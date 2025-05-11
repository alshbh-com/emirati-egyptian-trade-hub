
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Upload, Check } from "lucide-react";

const DocumentUpload = () => {
  // In a real app, you would handle file uploads with state
  
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-trade-dark mb-4">Document Management</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload, store, and share your trade documents securely in one place. Simplify your documentation process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6">Upload New Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DocumentUploadCard 
                title="Commercial Invoice"
                description="Upload commercial invoice for your goods"
              />
              <DocumentUploadCard 
                title="Certificate of Origin"
                description="Document certifying country of origin"
              />
              <DocumentUploadCard 
                title="Packing List"
                description="Detailed list of package contents"
              />
              <DocumentUploadCard 
                title="Bill of Lading"
                description="Receipt of cargo for shipment"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Recently Uploaded</h3>
            <Card className="mb-4">
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-trade-primary mr-2" />
                    <CardTitle className="text-lg">Commercial_Invoice_12345.pdf</CardTitle>
                  </div>
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <CardDescription>Uploaded on May 11, 2025</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="mb-4">
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-trade-primary mr-2" />
                    <CardTitle className="text-lg">Certificate_Origin_EG12345.pdf</CardTitle>
                  </div>
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <CardDescription>Uploaded on May 10, 2025</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="mb-4">
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-trade-primary mr-2" />
                    <CardTitle className="text-lg">Packing_List_Shipment_456.pdf</CardTitle>
                  </div>
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <CardDescription>Uploaded on May 9, 2025</CardDescription>
              </CardHeader>
            </Card>
            
            <div className="text-center mt-6">
              <Button variant="outline" className="border-trade-primary text-trade-primary hover:bg-trade-light">
                View All Documents
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable document upload card component
const DocumentUploadCard = ({ title, description }: { title: string; description: string }) => (
  <Card className="hover:border-trade-primary transition-colors cursor-pointer">
    <CardContent className="p-6 flex flex-col items-center text-center">
      <div className="h-12 w-12 rounded-full bg-trade-light flex items-center justify-center mb-4">
        <Upload className="h-6 w-6 text-trade-primary" />
      </div>
      <CardTitle className="text-lg mb-2">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <Button variant="ghost" className="mt-4 text-trade-primary hover:text-trade-dark hover:bg-trade-light">
        Upload File
      </Button>
    </CardContent>
  </Card>
);

export default DocumentUpload;
