import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

interface AboutPreviewProps {
  profileImage: string;
}

const AboutPreview = ({ profileImage }: AboutPreviewProps) => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={profileImage}
                alt="Eeshitha Gone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="section-label">
              <span className="w-1 h-1 rounded-full bg-accent"></span>
              About Me
            </div>

            <h2 className="section-title">
              Eeshitha Gone
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Eeshitha is a UI/UX designer based in Hyderabad, dedicated to creating digital experiences that are both beautiful and functional. With a focus on user research and intuitive design, she helps brands connect with their audiences through thoughtful, accessible interfaces.
            </p>

            <Link to="/about" className="btn-accent">
              Read My Full Story
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="bg-secondary rounded-xl p-4">
                <Briefcase className="w-5 h-5 text-muted-foreground mb-2" />
                <h4 className="font-medium text-sm">Experience</h4>
                <p className="text-muted-foreground text-sm">5+ Years</p>
              </div>
              <div className="bg-secondary rounded-xl p-4">
                <MapPin className="w-5 h-5 text-muted-foreground mb-2" />
                <h4 className="font-medium text-sm">Location</h4>
                <p className="text-muted-foreground text-sm">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
