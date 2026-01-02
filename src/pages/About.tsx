import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { MapPin, Briefcase, Mail, Linkedin } from "lucide-react";
import profileImage from "@/assets/profile.png";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-section pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <Navigation />
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="section-label text-primary-foreground/60 mb-4">
              <span className="w-1 h-1 rounded-full bg-accent"></span>
              About Me
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-primary-foreground mb-6">
              Eeshitha <span className="text-accent">Gudipati</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg">
              Hello, I'm Eeshitha — a UI/UX designer focused on creating clean, intuitive, and user-centered digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src={profileImage}
                  alt="Eeshitha Gudipati"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="section-title mb-6">My Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With over 5 years of experience in UI/UX design, I've had the privilege of working with startups, agencies, and established brands to create digital experiences that truly resonate with users.
                  </p>
                  <p>
                    My approach combines thorough user research with creative problem-solving, ensuring that every design decision is backed by insights and aligned with business goals.
                  </p>
                  <p>
                    I believe that great design is invisible — it simply works. My goal is to create interfaces that feel natural and intuitive, allowing users to accomplish their goals without friction.
                  </p>
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-secondary rounded-xl p-5">
                  <Briefcase className="w-5 h-5 text-accent mb-3" />
                  <h4 className="font-medium mb-1">Experience</h4>
                  <p className="text-muted-foreground text-sm">5+ Years in UI/UX</p>
                </div>
                <div className="bg-secondary rounded-xl p-5">
                  <MapPin className="w-5 h-5 text-accent mb-3" />
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm">California, USA</p>
                </div>
              </div>

              {/* Contact */}
              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold mb-4">Get in Touch</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:hello@eeshitha.com"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    hello@eeshitha.com
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
