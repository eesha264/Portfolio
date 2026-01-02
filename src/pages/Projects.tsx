import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchProjectsFromGoogleSheets } from "@/lib/googleSheets";
import { Project } from "@/types/project";

const Projects = () => {
  const { data: projects = [], isLoading, error } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: fetchProjectsFromGoogleSheets,
  });

  const getColorClass = (index: number) => {
    const colors = ["bg-accent/10", "bg-primary/10"];
    return colors[index % colors.length];
  };

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
          {isLoading && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">Loading projects...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-destructive">
                Error loading projects. Please check your Google Sheets configuration.
              </p>
            </div>
          )}

          {!isLoading && !error && projects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found.</p>
              <p className="text-sm text-muted-foreground mt-2">
                Please configure your Google Sheet ID in src/lib/googleSheets.ts
              </p>
            </div>
          )}

          {!isLoading && !error && projects.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="card-project group cursor-pointer"
                  onClick={() => {
                    if (project.demo) {
                      window.open(project.demo, "_blank", "noopener,noreferrer");
                    }
                  }}
                >
                  <div className={`aspect-[2880/1864] ${getColorClass(index)} flex items-center justify-center overflow-hidden relative`}>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to number if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            const fallback = document.createElement("span");
                            fallback.className = "text-4xl font-bold text-foreground/10";
                            fallback.textContent = String(index + 1).padStart(2, "0");
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    ) : (
                      <span className="text-4xl font-bold text-foreground/10">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    {project.techStack && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.techStack.split(",").map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs font-medium text-accent uppercase tracking-wider"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                    <h3 className="font-semibold text-lg mt-2 mb-2 flex items-center justify-between">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex gap-3 mt-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
