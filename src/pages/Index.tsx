import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import profileImage from "@/assets/profile.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection profileImage={profileImage} />
      <AboutPreview profileImage={profileImage} />
      <ServicesPreview />
      <Footer />
    </div>
  );
};

export default Index;
