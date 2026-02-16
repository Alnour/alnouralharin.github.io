import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { LayerSection } from "@/components/LayerSection";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Linkedin, BookOpen, GraduationCap, Award, FileText, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const publications = [
  {
    title: "Reinforcement Learning Interpretation Methods: A Survey",
    authors: "A Alharin, TN Doan, M Sartipi",
    venue: "IEEE Access 8, 171058-171077",
    year: 2020,
    citations: 121,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=gDfUnA0AAAAJ&citation_for_view=gDfUnA0AAAAJ:2osOgNQ5qMEC"
  },
  {
    title: "Predicting Post-stroke Hospital Discharge Disposition Using Interpretable Machine Learning Approaches",
    authors: "J Cho, A Alharin, Z Hu, N Fell, M Sartipi",
    venue: "2019 IEEE International Conference on Big Data (Big Data)",
    year: 2019,
    citations: 25,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=gDfUnA0AAAAJ&citation_for_view=gDfUnA0AAAAJ:u-x6o8ySG0sC"
  },
  {
    title: "Comparison Between Mixed Binary Classification and Voting Technique for Active User Authentication Using Mouse Dynamics",
    authors: "AA Khalifa, MA Hassan, TA Khalid, H Hamdoun",
    venue: "2015 International Conference on Computing, Control, Networking, Electronics",
    year: 2015,
    citations: 7,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=gDfUnA0AAAAJ&citation_for_view=gDfUnA0AAAAJ:u5HHmVD_uO8C"
  },
  {
    title: "Data Analysis and Visualization of Traffic in Chicago with Size and Landuse-aware Vehicle to Buildings Assignment",
    authors: "A Alharin, Y Patel, TN Doan, M Sartipi",
    venue: "Smoky Mountains Computational Sciences and Engineering Conference, 518-529",
    year: 2020,
    citations: 3,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=gDfUnA0AAAAJ&citation_for_view=gDfUnA0AAAAJ:qjMakFHDy7sC"
  },
  {
    title: "Deep Learning-Based Fine-Tuned Multi-Vehicle Tracking with Classification Correction",
    authors: "A Alharin",
    venue: "Masters Theses and Doctoral Dissertations, University of Tennessee at Chattanooga",
    year: 2021,
    citations: 0,
    link: "https://scholar.utc.edu/theses/698/"
  }
];

const experiences = [
  {
    role: "Machine Learning Research Assistant",
    company: "Center for Urban Informatics and Progress",
    period: "Research",
    description: "Conducted research on smart city car tracking using object detection and computer vision techniques.",
    highlights: ["Computer Vision", "Object Detection", "Smart City Systems", "Traffic Analysis"]
  },
  {
    role: "Teaching Assistant",
    company: "University of Khartoum",
    period: "Academic",
    description: "Conducted tutorials and supervised student projects across multiple computer science and engineering courses.",
    highlights: ["Algorithms & Data Structures", "Software Development", "Artificial Neural Networks", "Software Engineering"]
  },
  {
    role: "Co-Founder & Backend Developer",
    company: "Semicolon",
    period: "Entrepreneurial",
    description: "Co-founded an IT solutions company specializing in mobile/web applications and integrated systems.",
    highlights: ["Mobile Apps", "Web Applications", "Integrated Systems", "Backend Development"]
  },
  {
    role: "Android Backend Developer",
    company: "Ramz",
    period: "Part-Time",
    description: "Developed backend systems for Android mobile applications.",
    highlights: ["Android", "Backend Development", "Mobile Systems"]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navigation />
      
      <main>
        <Hero />
        
        <LayerSection index={0} id="about" title="About" subtitle="A Thoughts Player">
          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-lg leading-relaxed text-muted-foreground" data-testid="text-about-intro">
              I am a "thoughts player": I explore ideas through coding, writing, research, and deep discussions.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground" data-testid="text-about-fields">
              Some fields I have spent significant time in, and therefore have hands-on experience with, include machine learning, software engineering, agentic programming, and retrieval-augmented generation (RAG). I tend to avoid titles, because I see these disciplines not as identities but as powerful tools for thinking and experimentation.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground" data-testid="text-about-problems">
              More concrete problems I have worked on include computer vision, observability, master data management, and software architecture and design.
            </p>

            <div className="p-6 border border-border bg-card/20 rounded-2xl">
              <h3 className="font-serif text-xl mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                Layers on Layers on Layers
              </h3>
              <p className="text-sm text-muted-foreground" data-testid="text-novel-goal">
                My ultimate goal in the tech industry is to write my novel, "Layers on Layers on Layers". The book aims to tell the story of how we build beautiful abstractions, from the transistor to world models(?). I come from an Electrical and Electronics Engineering background, and I view the abstraction layers from physics to logic in the same way I think about higher-level computational layers.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-4 text-foreground">Career Themes</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Digital systems design",
                  "Programming abstractions",
                  "Computer networks",
                  "Clean design",
                  "Machine learning",
                  "Software design (as a concrete practice)",
                  "LLMs and RAG",
                  "Agentic programming",
                  "Curiosity about the next jumps"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="h-[1px] w-8 bg-border group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
                    <span className="font-mono text-sm text-foreground/80" data-testid={`text-interest-${i}`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground" data-testid="text-about-admiration">
              In summary, I admire people like Donald Knuth the same way I admire people like G. Hinton.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground" data-testid="text-about-hobbies">
              My hobbies include playing guitar and studying people, often through music.
            </p>
          </div>
        </LayerSection>

        <LayerSection index={1} id="experience" title="Experience" subtitle="Professional Journey">
          <div className="space-y-8">
            <div className="relative pl-8 border-l border-border/40 space-y-12">
              {experiences.map((exp, i) => (
                <div key={i} className="relative" data-testid={`card-experience-${i}`}>
                  <div className={`absolute -left-[37px] top-1 w-5 h-5 rounded-full bg-background border-2 ${i === 0 ? 'border-primary bg-primary/20' : 'border-border'}`} />
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-medium text-foreground" data-testid={`text-role-${i}`}>{exp.role}</h3>
                      <p className="text-base text-primary/80">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="bg-card/40 border-border text-foreground/60 text-xs">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm" data-testid={`text-exp-description-${i}`}>
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-card/40 border-border hover:bg-card/60 transition-colors text-foreground text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </LayerSection>

        <LayerSection index={2} id="publications" title="Publications" subtitle="Research & Academic Work">
          <div className="space-y-6">
            <div className="flex items-center gap-8 mb-8 p-6 border border-border rounded-3xl bg-card/20">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary" data-testid="text-total-citations">156</p>
                <p className="text-xs text-muted-foreground">Total Citations</p>
              </div>
              <Separator orientation="vertical" className="h-12" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary" data-testid="text-h-index">3</p>
                <p className="text-xs text-muted-foreground">h-index</p>
              </div>
              <Separator orientation="vertical" className="h-12" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary" data-testid="text-i10-index">2</p>
                <p className="text-xs text-muted-foreground">i10-index</p>
              </div>
              <Separator orientation="vertical" className="h-12" />
              <a
                href="https://scholar.google.com/citations?user=gDfUnA0AAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
                data-testid="link-google-scholar"
              >
                <GraduationCap className="w-4 h-4" />
                Google Scholar Profile
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {publications.map((pub, i) => (
              <a
                key={i}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                data-testid={`card-publication-${i}`}
              >
                <Card className="bg-transparent border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-base font-medium flex items-start gap-2 text-foreground group-hover:text-primary transition-colors">
                          <FileText className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          {pub.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {pub.authors}
                        </CardDescription>
                      </div>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary flex-shrink-0 mt-1" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{pub.venue}</span>
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-muted-foreground">{pub.year}</span>
                        <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary">
                          <BarChart3 className="w-3 h-3 mr-1" />
                          {pub.citations} citations
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </LayerSection>

        <LayerSection index={3} id="education" title="Education" subtitle="Academic Background">
          <div className="space-y-8">
            <Card className="bg-transparent border-border hover:border-primary/50 transition-colors" data-testid="card-education-ms">
              <CardHeader>
                <CardTitle className="text-lg font-medium flex items-center gap-2 text-foreground">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Master of Computer Science (Data Science)
                </CardTitle>
                <CardDescription>University of Tennessee at Chattanooga</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Focused on data science, machine learning research, and interpretable AI methods.
                  Published research on reinforcement learning interpretation and healthcare ML applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-transparent border-border hover:border-primary/50 transition-colors" data-testid="card-education-bs">
              <CardHeader>
                <CardTitle className="text-lg font-medium flex items-center gap-2 text-foreground">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Bachelor of Electrical Engineering
                </CardTitle>
                <CardDescription>University of Khartoum</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Electrical and Electronics Engineering foundation — understanding abstraction layers from physics to logic.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-transparent border-border hover:border-primary/50 transition-colors" data-testid="card-education-cert">
              <CardHeader>
                <CardTitle className="text-lg font-medium flex items-center gap-2 text-foreground">
                  <Award className="w-5 h-5 text-primary" />
                  Improving Deep Neural Networks
                </CardTitle>
                <CardDescription>Coursera Certification</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </LayerSection>

        <LayerSection index={4} id="contact" title="Connect" subtitle="Get in Touch">
           <div className="space-y-6">
             <p className="text-muted-foreground mb-6" data-testid="text-contact-intro">
               Interested in machine learning, software engineering, or just want to discuss ideas? Let's connect.
             </p>
             <div className="flex flex-col sm:flex-row flex-wrap gap-4">
               <a href="https://www.linkedin.com/in/alnouralharin/" target="_blank" rel="noopener noreferrer" data-testid="link-linkedin">
                 <Button variant="outline" className="h-12 border-border hover:bg-card/40 gap-2 text-foreground w-full sm:w-auto rounded-full px-6">
                   <Linkedin className="w-4 h-4" />
                   LinkedIn
                   <ExternalLink className="w-3 h-3 ml-1" />
                 </Button>
               </a>
               <a href="https://scholar.google.com/citations?user=gDfUnA0AAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" data-testid="link-scholar">
                 <Button variant="outline" className="h-12 border-border hover:bg-card/40 gap-2 text-foreground w-full sm:w-auto rounded-full px-6">
                   <GraduationCap className="w-4 h-4" />
                   Google Scholar
                   <ExternalLink className="w-3 h-3 ml-1" />
                 </Button>
               </a>
             </div>
           </div>
        </LayerSection>

        <footer className="py-12 border-t border-border/40 text-center mt-12">
          <p className="font-serif italic text-muted-foreground" data-testid="text-footer-quote">
            "From the transistor to world models"
          </p>
          <div className="mt-8 text-xs font-mono text-muted-foreground/60">
            © 2026 Alnour Alharin
          </div>
        </footer>
      </main>
    </div>
  );
}
