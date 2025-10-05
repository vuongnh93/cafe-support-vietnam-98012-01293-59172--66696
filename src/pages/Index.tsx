import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CreatorShowcase from "@/components/CreatorShowcase";
import PaymentMethods from "@/components/PaymentMethods";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PaymentMethods />
        <CreatorShowcase />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
