import { useMemo } from "react";
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
    role: "Software Engineer",
    company: "Oracle",
    location: "Durham, NC",
    period: "May 2021 — Present",
    description: "Building intelligent observability tools and scalable ML infrastructure. Developed the Oracle Observability Assistant for natural language interaction with monitoring systems, and designed the OCTO ML framework — a horizontally scalable MLOps solution for time-series prediction across tens of thousands of VMs. Built database outage prediction models achieving 60% detection coverage. Automated release processes reducing engineering time from a full day to 10 minutes.",
    highlights: ["LLMs & RAG", "LangChain", "PyTorch", "Kubernetes", "Prometheus", "Grafana", "GoLang", "DevOps"]
  },
  {
    role: "Part-time Lecturer",
    company: "University of Khartoum",
    location: "Online",
    period: "Sep 2024 — Present",
    description: "Teaching the Algorithms and Data Structures course to 3rd-year students in the Faculty of Electrical and Electronics Engineering.",
    highlights: ["Algorithms", "Data Structures", "Teaching"]
  },
  {
    role: "Research Assistant",
    company: "Center for Urban Informatics and Progress (CUIP)",
    location: "Chattanooga, TN",
    period: "Jan 2019 — May 2021",
    description: "Developed a smart city car tracking system using object detection and tracking algorithms. Proposed a vehicle-to-building assignment algorithm for energy consumption analysis. Refined a hospital discharge prediction model using interpretability techniques including surrogate models and counterfactuals.",
    highlights: ["Computer Vision", "Object Detection", "ML Interpretability", "Smart City Systems"]
  },
  {
    role: "Data Engineer & Development Team Leader",
    company: "Dot Energy Consulting",
    location: "Khartoum, Sudan",
    period: "Nov 2017 — Dec 2018",
    description: "Built a network fault prediction system combining supervised and unsupervised learning methods. Created a unified interface between different systems for Zain telecom. Performed information extraction from legacy free-text data using NLP/ML tools. Hired and trained a new development team of three engineers.",
    highlights: ["NLP", "Machine Learning", "Data Pipeline", "Team Leadership"]
  },
  {
    role: "Co-founder & Full-Stack Engineer",
    company: "MobiGo",
    location: "Khartoum, Sudan",
    period: "Oct 2016 — Nov 2017",
    description: "Led a team of 3 engineers on the technical implementation of Pocket, a payment mobile/web application for service payment and money transfer. Designed the system architecture on AWS and RESTful APIs using Django.",
    highlights: ["Django", "AWS", "REST APIs", "Mobile Payments", "System Architecture"]
  },
  {
    role: "Android Developer",
    company: "Avatar Apps",
    location: "Khartoum, Sudan",
    period: "Aug 2016 — Nov 2017",
    description: "Added 50% of the app's features and rewrote the entire legacy codebase into a more maintainable version. Added a caching layer and optimized performance for resource-constrained devices.",
    highlights: ["Android", "Performance Optimization", "Code Refactoring"]
  }
];

const technologies = [
  { name: "Python", weight: 5 },
  { name: "PyTorch", weight: 4 },
  { name: "scikit-learn", weight: 4 },
  { name: "Kubernetes", weight: 4 },
  { name: "LLMs", weight: 5 },
  { name: "RAG", weight: 4 },
  { name: "LangChain", weight: 4 },
  { name: "Prometheus", weight: 4 },
  { name: "Grafana", weight: 3 },
  { name: "Docker", weight: 3 },
  { name: "Terraform", weight: 3 },
  { name: "Golang", weight: 3 },
  { name: "Java", weight: 2 },
  { name: "C/C++", weight: 2 },
  { name: "JavaScript", weight: 3 },
  { name: "Django", weight: 3 },
  { name: "REST APIs", weight: 4 },
  { name: "PostgreSQL", weight: 3 },
  { name: "OpenCV", weight: 3 },
  { name: "Pandas", weight: 3 },
  { name: "Git", weight: 3 },
  { name: "OCI", weight: 3 },
  { name: "Computer Vision", weight: 4 },
  { name: "Bash", weight: 2 },
  { name: "PHP", weight: 1 },
  { name: "MySQL", weight: 2 },
  { name: "Android", weight: 2 },
  { name: "CI/CD", weight: 3 },
  { name: "Machine Learning", weight: 5 },
  { name: "Deep Learning", weight: 4 },
  { name: "Time-Series Analysis", weight: 4 },
  { name: "NLP", weight: 3 },
  { name: "Knowledge Graphs", weight: 3 },
  { name: "MLOps", weight: 3 },
  { name: "Web Scraping", weight: 2 },
  { name: "Parallel Programming", weight: 2 },
];

export default function Home() {
  const shuffledTechnologies = useMemo(() => [...technologies].sort(() => Math.random() - 0.5), []);

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
                      <p className="text-base text-primary/80">{exp.company}{exp.location && <span className="text-muted-foreground/60"> · {exp.location}</span>}</p>
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

        <LayerSection index={2} id="technologies" title="Technologies" subtitle="Tools & Skills">
          <div className="p-8 border border-border rounded-3xl bg-card/20">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
              {shuffledTechnologies.map((tech, i) => {
                  const sizeClasses: Record<number, string> = {
                    1: "text-xs text-muted-foreground/50",
                    2: "text-sm text-muted-foreground/60",
                    3: "text-base text-muted-foreground/80",
                    4: "text-lg text-foreground/80 font-medium",
                    5: "text-xl text-primary font-semibold",
                  };
                  return (
                    <span
                      key={tech.name}
                      className={`${sizeClasses[tech.weight]} hover:text-primary transition-colors duration-300 cursor-default`}
                      data-testid={`text-tech-${i}`}
                    >
                      {tech.name}
                    </span>
                  );
                })}
            </div>
          </div>
        </LayerSection>

        <LayerSection index={3} id="publications" title="Publications" subtitle="Research & Academic Work">
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

        <LayerSection index={4} id="education" title="Education" subtitle="Academic Background">
          <div className="space-y-8">
            <Card className="bg-transparent border-border hover:border-primary/50 transition-colors" data-testid="card-education-ms">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-lg font-medium flex items-center gap-2 text-foreground">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      M.Sc. Computer Science / Data Science & Statistics
                    </CardTitle>
                    <CardDescription>University of Tennessee at Chattanooga</CardDescription>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="bg-card/40 border-border text-foreground/60 text-xs">May 2021</Badge>
                    <p className="text-xs text-primary mt-1 font-mono">GPA: 4.0 / 4.0</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Coursework: machine learning, deep learning, parallel programming, theory of programming languages, mathematical statistics, applied statistics, advanced operating systems, advanced computer architecture, computer vision.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-transparent border-border hover:border-primary/50 transition-colors" data-testid="card-education-bs">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-lg font-medium flex items-center gap-2 text-foreground">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      B.Sc. (Hon.) Electronic Systems Software Engineering
                    </CardTitle>
                    <CardDescription>University of Khartoum</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-card/40 border-border text-foreground/60 text-xs">Oct 2015</Badge>
                </div>
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

        <LayerSection index={5} id="contact" title="Connect" subtitle="Get in Touch">
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
