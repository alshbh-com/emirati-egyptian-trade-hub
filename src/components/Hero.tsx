
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-trade-dark to-trade-primary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 animate-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simplifying Import & Export Between UAE and Egypt
            </h1>
            <p className="text-lg mb-8 max-w-lg">
              Connect with reliable suppliers, manage documentation, track shipments, and simplify customs clearance - all in one platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-trade-accent hover:bg-amber-600 text-black">
                Join as Supplier
              </Button>
              <Button size="lg" className="bg-white hover:bg-gray-100 text-trade-primary">
                Join as Importer
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 relative animate-in">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="flex justify-center">
                <div className="flex flex-col items-center mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-16 w-16 relative">
                      <div className="absolute inset-0 bg-red-600 rounded-full"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold">EG</div>
                    </div>
                    <div className="text-3xl">⟷</div>
                    <div className="h-16 w-16 relative">
                      <div className="absolute inset-0 bg-green-600 rounded-full"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold">UAE</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-semibold">Connecting businesses across borders</p>
                    <p className="mt-2">Over 500+ products and services available</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/20 p-3 rounded">
                  <h3 className="text-2xl font-bold">24/7</h3>
                  <p className="text-sm">Support</p>
                </div>
                <div className="bg-white/20 p-3 rounded">
                  <h3 className="text-2xl font-bold">100+</h3>
                  <p className="text-sm">Suppliers</p>
                </div>
                <div className="bg-white/20 p-3 rounded">
                  <h3 className="text-2xl font-bold">500+</h3>
                  <p className="text-sm">Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
