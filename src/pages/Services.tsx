import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Palette, Layout, Users, Smartphone, Layers, PenTool, Monitor, FileSearch } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI Design",
    description: "Creating visually stunning interfaces that align with your brand identity and engage your users effectively.",
  },
  {
    icon: Layout,
    title: "UX Design",
    description: "Crafting intuitive user experiences through comprehensive research, testing, and iterative design processes.",
  },
  {
    icon: Users,
    title: "User Research",
    description: "Understanding your users deeply to create meaningful design solutions that solve real problems.",
  },
  {
    icon: Smartphone,
    title: "Prototyping",
    description: "Building interactive prototypes to validate design concepts and gather feedback before development.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    description: "Developing scalable design systems that ensure consistency across all your digital products.",
  },
  {
    icon: PenTool,
    title: "Wireframing",
    description: "Creating detailed wireframes to establish the structure and layout of your digital products.",
  },
  {
    icon: Monitor,
    title: "Responsive Design",
    description: "Designing seamless experiences that work beautifully across all devices and screen sizes.",
  },
  {
    icon: FileSearch,
    title: "Usability Testing",
    description: "Conducting thorough usability tests to identify pain points and optimize user flows.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-section pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <Navigation />
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="section-label text-primary-foreground/60 mb-4">
              <span className="w-1 h-1 rounded-full bg-accent"></span>
              Services
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-primary-foreground mb-6">
              Services <span className="text-accent">Offered</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg">
              Comprehensive design services to help bring your digital vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-service"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
