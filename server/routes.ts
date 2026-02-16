import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
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

function getArticleFolders(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs.readdirSync(ARTICLES_DIR).filter((entry) => {
    const fullPath = path.join(ARTICLES_DIR, entry);
    return (
      fs.statSync(fullPath).isDirectory() &&
      fs.existsSync(path.join(fullPath, "index.md"))
    );
  });
}

function parseArticle(slug: string): ArticleFull | null {
  const filePath = path.join(ARTICLES_DIR, slug, "index.md");
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    tags: Array.isArray(data.tags) ? data.tags : [],
    content: marked.parse(content, { async: false }) as string,
  };
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/articles", (_req, res) => {
    const slugs = getArticleFolders();
    const articles: ArticleMeta[] = slugs
      .map((slug) => {
        const article = parseArticle(slug);
        if (!article) return null;
        const { content, ...meta } = article;
        return meta;
      })
      .filter(Boolean) as ArticleMeta[];

    articles.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    res.json(articles);
  });

  app.get("/api/articles/:slug", (req, res) => {
    const article = parseArticle(req.params.slug);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.json(article);
  });

  return httpServer;
}
