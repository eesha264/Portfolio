import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="logo-hover flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-sm">EG</span>
          </div>
          <span className="text-primary-foreground font-medium text-sm hidden sm:block">
            Eeshitha
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive(item.path)
                  ? "text-primary-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {isActive(item.path) && <span className="mr-1">•</span>}
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Link
          to="/about"
          className="btn-outline-light"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
