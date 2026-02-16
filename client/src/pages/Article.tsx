import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar } from "lucide-react";

interface ArticleFull {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

export default function Article() {
  const { slug } = useParams<{ slug: string }>();

  const { data: article, isLoading, error } = useQuery<ArticleFull>({
    queryKey: ["/api/articles", slug],
    queryFn: async () => {
      const res = await fetch(`/api/articles/${slug}`);
      if (!res.ok) throw new Error("Article not found");
      return res.json();
    },
    enabled: !!slug,
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navigation />

      <main className="pt-28 pb-20">
        <div className="container px-6 md:px-12 max-w-3xl mx-auto">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
            data-testid="link-back-articles"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>

          {isLoading && (
            <div className="space-y-4">
              <div className="h-10 w-3/4 bg-card/20 rounded animate-pulse" />
              <div className="h-6 w-1/2 bg-card/20 rounded animate-pulse" />
              <div className="h-64 bg-card/20 rounded animate-pulse mt-8" />
            </div>
          )}

          {error && (
            <div className="text-center py-20 text-muted-foreground">
              <p>Article not found.</p>
              <Link
                href="/articles"
                className="text-primary hover:underline mt-4 inline-block"
              >
                Browse all articles
              </Link>
            </div>
          )}

          {article && (
            <article>
              <header className="mb-12">
                <h1
                  className="text-3xl md:text-4xl font-serif text-foreground mb-4"
                  data-testid="text-article-title"
                >
                  {article.title}
                </h1>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span className="font-mono text-xs">
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-primary/10 border-primary/30 text-primary text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </header>

              <div
                className="article-content prose prose-neutral max-w-none
                  [&_h2]:text-2xl [&_h2]:font-serif [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4
                  [&_h3]:text-xl [&_h3]:font-serif [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3
                  [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4
                  [&_strong]:text-foreground [&_em]:text-foreground/80
                  [&_ul]:text-muted-foreground [&_ul]:space-y-2 [&_ul]:mb-4 [&_ul]:pl-6 [&_ul]:list-disc
                  [&_ol]:text-muted-foreground [&_ol]:space-y-2 [&_ol]:mb-4 [&_ol]:pl-6 [&_ol]:list-decimal
                  [&_li]:leading-relaxed
                  [&_blockquote]:border-l-2 [&_blockquote]:border-primary/40 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-muted-foreground
                  [&_code]:bg-card [&_code]:border [&_code]:border-border [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:font-mono [&_code]:text-primary
                  [&_pre]:bg-card [&_pre]:border [&_pre]:border-border [&_pre]:rounded-lg [&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:mb-4
                  [&_pre_code]:bg-transparent [&_pre_code]:border-0 [&_pre_code]:p-0
                  [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-primary/80
                  [&_hr]:border-border [&_hr]:my-8"
                dangerouslySetInnerHTML={{ __html: article.content }}
                data-testid="article-content"
              />
            </article>
          )}
        </div>
      </main>

      <footer className="py-12 border-t border-border/40 text-center">
        <div className="text-xs font-mono text-muted-foreground/60">
          &copy; 2026 Alnour Alharin
        </div>
      </footer>
    </div>
  );
}
