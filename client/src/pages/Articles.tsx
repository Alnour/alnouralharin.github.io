import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ArrowRight, Calendar } from "lucide-react";
import { Link } from "wouter";

interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export default function Articles() {
  const { data: articles, isLoading } = useQuery<ArticleMeta[]>({
    queryKey: ["/api/articles"],
    queryFn: async () => {
      const res = await fetch("/api/articles");
      if (!res.ok) throw new Error("Failed to fetch articles");
      return res.json();
    },
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navigation />

      <main className="pt-28 pb-20">
        <div className="container px-6 md:px-12 max-w-5xl mx-auto">
          <div className="space-y-4 mb-16">
            <span className="text-xs font-mono text-primary/70 tracking-widest">ARTICLES</span>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground" data-testid="text-articles-title">
              Writing & Ideas
            </h1>
            <p className="text-muted-foreground font-light max-w-2xl" data-testid="text-articles-subtitle">
              Explorations in machine learning, software engineering, and the layers of abstraction that connect them.
            </p>
          </div>

          {isLoading && (
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-40 border border-border rounded-2xl animate-pulse bg-card/20" />
              ))}
            </div>
          )}

          {!isLoading && articles && articles.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <FileText className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p>No articles yet.</p>
            </div>
          )}

          {articles && articles.length > 0 && (
            <div className="space-y-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="block group"
                  data-testid={`card-article-${article.slug}`}
                >
                  <Card className="bg-transparent border-border hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-lg font-medium flex items-start gap-2 text-foreground group-hover:text-primary transition-colors">
                            <FileText className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            {article.title}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            {article.description}
                          </CardDescription>
                        </div>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary flex-shrink-0 mt-1" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span className="font-mono text-xs">
                            {new Date(article.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
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
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
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
