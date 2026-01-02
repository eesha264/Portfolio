import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "UI/UX Design",
    description: "A comprehensive dashboard for financial management",
    color: "bg-accent/10",
  },
  {
    title: "E-Commerce Redesign",
    category: "UX Research",
    description: "Complete redesign of an online shopping experience",
    color: "bg-primary/10",
  },
  {
    title: "Healthcare App",
    category: "Mobile Design",
    description: "Patient management mobile application",
    color: "bg-accent/10",
  },
  {
    title: "SaaS Platform",
    category: "Design System",
    description: "Scalable design system for a B2B platform",
    color: "bg-primary/10",
  },
  {
    title: "Travel Booking",
    category: "UI Design",
    description: "Modern travel booking web application",
    color: "bg-accent/10",
  },
  {
    title: "Food Delivery",
    category: "App Design",
    description: "User-friendly food ordering experience",
    color: "bg-primary/10",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-section pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <Navigation />
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="section-label text-primary-foreground/60 mb-4">
              <span className="w-1 h-1 rounded-full bg-accent"></span>
              Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-primary-foreground mb-6">
              Featured <span className="text-accent">Projects</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg">
              A selection of my recent work across various industries and design challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card-project cursor-pointer"
              >
                <div className={`aspect-[4/3] ${project.color} flex items-center justify-center`}>
                  <span className="text-4xl font-bold text-foreground/10">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-semibold text-lg mt-2 mb-2 flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
