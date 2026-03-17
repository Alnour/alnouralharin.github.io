import type { Plugin } from "vite";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const ARTICLES_DIR = path.resolve(process.cwd(), "articles");

interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

interface ArticleFull extends ArticleMeta {
  content: string;
}

function getMdFiles(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".md"));
}

function parseArticle(filename: string): ArticleFull | null {
  const filePath = path.join(ARTICLES_DIR, filename);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const slug = filename.replace(/\.md$/, "");

  return {
    slug,
    title: data.title || slug.replace(/-/g, " "),
    description: data.description || "",
    date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    tags: Array.isArray(data.tags) ? data.tags : [],
    content: marked.parse(content, { async: false }) as string,
  };
}

/**
 * Vite plugin that serves articles API in dev mode
 * and generates static JSON files during build.
 */
export function articlesPlugin(): Plugin {
  return {
    name: "vite-plugin-articles",

    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === "/api/articles") {
          const files = getMdFiles();
          const articles: ArticleMeta[] = files
            .map((f) => {
              const article = parseArticle(f);
              if (!article) return null;
              const { content, ...meta } = article;
              return meta;
            })
            .filter(Boolean) as ArticleMeta[];

          articles.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );

          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(articles));
          return;
        }

        const match = req.url?.match(/^\/api\/articles\/([^/?]+)/);
        if (match) {
          const slug = match[1];
          const article = parseArticle(slug + ".md");
          if (!article) {
            res.statusCode = 404;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ message: "Article not found" }));
            return;
          }
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(article));
          return;
        }

        next();
      });
    },

    writeBundle() {
      // Generate static JSON files for production
      const outDir = path.resolve(process.cwd(), "dist/public/api/articles");
      fs.mkdirSync(outDir, { recursive: true });

      const files = getMdFiles();
      const articles: ArticleMeta[] = [];

      for (const f of files) {
        const article = parseArticle(f);
        if (!article) continue;

        // Write individual article JSON
        fs.writeFileSync(
          path.join(outDir, `${article.slug}.json`),
          JSON.stringify(article)
        );

        const { content, ...meta } = article;
        articles.push(meta);
      }

      articles.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      // Write articles list JSON
      fs.writeFileSync(
        path.join(outDir, "index.json"),
        JSON.stringify(articles)
      );
    },
  };
}
