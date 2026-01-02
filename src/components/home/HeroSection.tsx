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
                Eeshitha Gone
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
              <div className="w-180 h-180 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent/20">
                <img
                  src={profileImage}
                  alt="Eeshitha Gone"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
