import { Link } from "react-router-dom";
import { ArrowRight, Palette, Layout, Users, Smartphone } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI Design",
    description: "Creating visually stunning interfaces that align with your brand identity.",
  },
  {
    icon: Layout,
    title: "UX Design",
    description: "Crafting intuitive user experiences through research and testing.",
  },
  {
    icon: Users,
    title: "User Research",
    description: "Understanding your users to create meaningful design solutions.",
  },
  {
    icon: Smartphone,
    title: "Prototyping",
    description: "Building interactive prototypes to validate design concepts.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="section-label mb-4">
              <span className="w-1 h-1 rounded-full bg-accent"></span>
              Services
            </div>
            <h2 className="section-title">
              Services <span className="section-title-accent">Offered</span>
            </h2>
          </div>
          <Link to="/services" className="text-accent font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-service"
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
  );
};

export default ServicesPreview;
