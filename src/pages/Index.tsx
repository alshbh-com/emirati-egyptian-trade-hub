
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Directory from "@/components/Directory";
import ShippingTracking from "@/components/ShippingTracking";
import DocumentUpload from "@/components/DocumentUpload";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Directory />
        <ShippingTracking />
        <DocumentUpload />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
