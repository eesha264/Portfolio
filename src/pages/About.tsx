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
              Eeshitha <span className="text-accent">GONE</span>
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
                  alt="Eeshitha Gone"
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
                    I’m a passionate UI/UX designer who enjoys creating intuitive and visually engaging digital experiences. My interest lies in understanding users, their needs, and translating those insights into meaningful designs.
                  </p>
                  <p>
                    With a background in technology, I combine design thinking with problem-solving to build interfaces that are both functional and user-friendly. I value simplicity, consistency, and clarity in every design decision I make.
                  </p>
                  <p>
                    I’m continuously learning and refining my skills, aiming to create experiences that not only look good but feel effortless to use. This portfolio showcases my design journey and the ideas I bring to life.
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
                  <p className="text-muted-foreground text-sm">Hyderabad, India</p>
                </div>
              </div>

              {/* Contact */}
              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold mb-4">Get in Touch</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:@eeshagone45@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    eeshagone45@gmail.com
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
