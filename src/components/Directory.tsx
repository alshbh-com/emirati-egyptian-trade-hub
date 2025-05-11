
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");

  // Sample supplier data
  const suppliers = [
    {
      id: 1,
      name: "Cairo Textiles Manufacturing",
      category: "Textiles & Apparel",
      country: "Egypt",
      rating: 4.8,
      products: ["Cotton fabrics", "Garments", "Home textiles"],
      verified: true
    },
    {
      id: 2,
      name: "Dubai Electronics Trading Co.",
      category: "Electronics",
      country: "UAE",
      rating: 4.6,
      products: ["Smartphones", "Laptops", "Audio equipment"],
      verified: true
    },
    {
      id: 3,
      name: "Alexandria Food Export",
      category: "Food & Beverages",
      country: "Egypt",
      rating: 4.5,
      products: ["Dried fruits", "Spices", "Olive oil"],
      verified: false
    },
    {
      id: 4,
      name: "Sharjah Furniture Industries",
      category: "Furniture",
      country: "UAE",
      rating: 4.7,
      products: ["Office furniture", "Home furniture", "Custom designs"],
      verified: true
    },
    {
      id: 5,
      name: "Egyptian Handicrafts Co.",
      category: "Handicrafts",
      country: "Egypt",
      rating: 4.4,
      products: ["Traditional crafts", "Decorative items", "Souvenirs"],
      verified: false
    },
    {
      id: 6,
      name: "Abu Dhabi Chemical Industries",
      category: "Chemicals",
      country: "UAE",
      rating: 4.9,
      products: ["Industrial chemicals", "Cleaning products", "Cosmetic ingredients"],
      verified: true
    },
  ];

  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         supplier.products.some(product => product.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = category === "" || supplier.category === category;
    const matchesCountry = country === "" || supplier.country === country;

    return matchesSearch && matchesCategory && matchesCountry;
  });

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-trade-dark mb-4">Supplier Directory</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find reliable suppliers and importers from Egypt and UAE. Connect directly and build lasting business relationships.
          </p>
        </div>

        <div className="bg-trade-light p-6 rounded-lg mb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search by company name or product"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                <SelectItem value="Textiles & Apparel">Textiles & Apparel</SelectItem>
                <SelectItem value="Electronics">Electronics</SelectItem>
                <SelectItem value="Food & Beverages">Food & Beverages</SelectItem>
                <SelectItem value="Furniture">Furniture</SelectItem>
                <SelectItem value="Handicrafts">Handicrafts</SelectItem>
                <SelectItem value="Chemicals">Chemicals</SelectItem>
              </SelectContent>
            </Select>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger>
                <SelectValue placeholder="All Countries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Countries</SelectItem>
                <SelectItem value="Egypt">Egypt</SelectItem>
                <SelectItem value="UAE">UAE</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSuppliers.map((supplier) => (
            <Card key={supplier.id} className="border-2 hover:border-trade-primary transition-all">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle>{supplier.name}</CardTitle>
                  {supplier.verified && 
                    <Badge className="bg-green-500 hover:bg-green-600">Verified</Badge>
                  }
                </div>
                <CardDescription className="flex items-center gap-2">
                  <span>{supplier.country}</span>
                  <span>•</span>
                  <span>{supplier.category}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-sm font-medium mb-1">Rating: {supplier.rating}/5</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-trade-primary h-2 rounded-full" 
                      style={{ width: `${(supplier.rating/5)*100}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Products:</h4>
                  <div className="flex flex-wrap gap-2">
                    {supplier.products.map((product, idx) => (
                      <Badge key={idx} variant="secondary">{product}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-trade-primary hover:bg-trade-dark">
                  View Profile
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" className="border-trade-primary text-trade-primary hover:bg-trade-light">
            View All Suppliers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Directory;
