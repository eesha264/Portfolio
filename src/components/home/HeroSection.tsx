import { Link } from "react-router-dom";
import { ArrowRight, Star, Award } from "lucide-react";

interface HeroSectionProps {
  profileImage: string;
}

const HeroSection = ({ profileImage }: HeroSectionProps) => {
  return (
    <section className="hero-section min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-primary-foreground">
              UI/UX Designer creating{" "}
              <span className="text-accent">intuitive</span> experiences you can trust
            </h1>
            
            <p className="text-primary-foreground/70 text-lg max-w-lg">
              Helping brands and businesses create meaningful digital experiences through clean, user-centered design solutions.
            </p>

            <Link to="/projects" className="btn-accent">
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Stats */}
            <div className="pt-8 border-t border-primary-foreground/10">
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                Eeshitha Gudipati
              </h3>
              <p className="text-primary-foreground/60 text-sm">
                UI/UX Design, User Research, Prototyping, and Design Systems
              </p>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Image */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent/20">
                <img
                  src={profileImage}
                  alt="Eeshitha Gudipati"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rating Badge */}
              <div className="absolute bottom-8 -left-4 bg-primary-foreground rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                  <span className="text-foreground font-semibold text-lg ml-2">20+</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Projects completed with<br />
                  high client satisfaction
                </p>
              </div>

              {/* Badge */}
              <div className="absolute top-8 -right-4 md:right-0 bg-primary-foreground rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                <Award className="w-4 h-4 text-foreground" />
                <span className="text-foreground text-sm font-medium">Based in California</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
