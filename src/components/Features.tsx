
import { CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Supplier Directory",
      description: "Access a comprehensive database of verified suppliers and importers from Egypt and UAE.",
      icon: "search"
    },
    {
      title: "Document Management",
      description: "Easily upload, manage, and share important trade documents securely.",
      icon: "file-text"
    },
    {
      title: "Shipping Integration",
      description: "Track shipments in real-time with major shipping companies.",
      icon: "truck"
    },
    {
      title: "Secure Payments",
      description: "Make and receive payments with confidence using our secure payment gateway.",
      icon: "dollar-sign"
    },
    {
      title: "Customs Information",
      description: "Access up-to-date information on customs requirements and procedures.",
      icon: "file-search"
    },
    {
      title: "Business Ratings",
      description: "Make informed decisions based on verified reviews and ratings.",
      icon: "users"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-trade-dark mb-4">Why Choose Our Platform?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive tools and services to make international trade between Egypt and UAE seamless and efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-trade-primary mr-2 flex-shrink-0" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
