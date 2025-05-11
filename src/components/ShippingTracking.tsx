
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Circle, Truck } from "lucide-react";

const ShippingTracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [shipmentDetails, setShipmentDetails] = useState<null | {
    status: string;
    origin: string;
    destination: string;
    carrier: string;
    events: Array<{
      date: string;
      time: string;
      location: string;
      status: string;
      completed: boolean;
    }>;
  }>(null);

  const handleTrack = () => {
    // In a real app, this would call an API with the tracking number
    // Here we're just simulating a response
    setIsTracking(true);
    setTimeout(() => {
      setShipmentDetails({
        status: "In Transit",
        origin: "Cairo, Egypt",
        destination: "Dubai, UAE",
        carrier: "Express Shipping Ltd.",
        events: [
          {
            date: "2025-05-09",
            time: "10:30",
            location: "Cairo International Airport",
            status: "Package received",
            completed: true
          },
          {
            date: "2025-05-09",
            time: "16:45",
            location: "Cairo International Airport",
            status: "Package processed",
            completed: true
          },
          {
            date: "2025-05-10",
            time: "08:15",
            location: "Cairo International Airport",
            status: "Departed",
            completed: true
          },
          {
            date: "2025-05-10",
            time: "14:20",
            location: "Dubai International Airport",
            status: "Arrived at destination",
            completed: true
          },
          {
            date: "2025-05-11",
            time: "--:--",
            location: "Dubai Customs",
            status: "Customs clearance",
            completed: false
          },
          {
            date: "Pending",
            time: "--:--",
            location: "Dubai",
            status: "Out for delivery",
            completed: false
          },
          {
            date: "Pending",
            time: "--:--",
            location: "Dubai",
            status: "Delivered",
            completed: false
          }
        ]
      });
      setIsTracking(false);
    }, 1500);
  };

  return (
    <div className="py-16 bg-trade-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-trade-dark mb-4">Track Your Shipment</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your tracking number to get real-time updates on your shipment's status and location.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                placeholder="Enter tracking number"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="md:flex-grow"
              />
              <Button 
                className="bg-trade-primary hover:bg-trade-dark"
                onClick={handleTrack}
                disabled={isTracking || !trackingNumber}
              >
                {isTracking ? "Tracking..." : "Track Shipment"}
              </Button>
            </div>
          </div>

          {shipmentDetails && (
            <Card className="animate-in">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">Status</h3>
                    <p className="font-semibold">{shipmentDetails.status}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">Shipping From</h3>
                    <p className="font-semibold">{shipmentDetails.origin}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">Shipping To</h3>
                    <p className="font-semibold">{shipmentDetails.destination}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Truck className="h-5 w-5 text-trade-primary mr-2" />
                    <h3 className="font-medium">Carrier: {shipmentDetails.carrier}</h3>
                  </div>
                </div>

                <Separator className="my-6" />

                <h3 className="font-semibold mb-4 text-lg">Tracking History</h3>
                <div className="relative">
                  {shipmentDetails.events.map((event, index) => (
                    <div key={index} className="flex mb-8 last:mb-0">
                      <div className="mr-4 relative">
                        {event.completed ? (
                          <CheckCircle className="h-6 w-6 text-trade-primary z-10 bg-white" />
                        ) : (
                          <Circle className="h-6 w-6 text-gray-300 z-10 bg-white" />
                        )}
                        {index < shipmentDetails.events.length - 1 && (
                          <div 
                            className={`absolute top-6 bottom-0 left-3 w-0.5 -ml-[1px] h-full 
                            ${event.completed ? "bg-trade-primary" : "bg-gray-300"}`}
                          ></div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{event.status}</p>
                        <p className="text-gray-500 text-sm">
                          {event.date} {event.time !== "--:--" && `• ${event.time}`}
                        </p>
                        <p className="text-gray-500 text-sm">{event.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShippingTracking;
