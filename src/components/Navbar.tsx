
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'ar' | 'en'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
    document.documentElement.classList.toggle('rtl');
  };

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-trade-primary">
            {language === 'en' ? 'UAE-Egypt Trade' : 'التجارة بين مصر والإمارات'}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-600 hover:text-trade-primary font-medium">
            {language === 'en' ? 'Home' : 'الرئيسية'}
          </Link>
          <Link to="/" className="text-gray-600 hover:text-trade-primary font-medium">
            {language === 'en' ? 'Directory' : 'الدليل'}
          </Link>
          <Link to="/" className="text-gray-600 hover:text-trade-primary font-medium">
            {language === 'en' ? 'Shipping' : 'الشحن'}
          </Link>
          <Link to="/" className="text-gray-600 hover:text-trade-primary font-medium">
            {language === 'en' ? 'Documentation' : 'المستندات'}
          </Link>
          <Link to="/" className="text-gray-600 hover:text-trade-primary font-medium">
            {language === 'en' ? 'Contact' : 'اتصل بنا'}
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline" 
            onClick={toggleLanguage}
            className="border-trade-primary text-trade-primary hover:bg-trade-light"
          >
            {language === 'en' ? 'العربية' : 'English'}
          </Button>
          <Button className="bg-trade-primary hover:bg-trade-dark">
            {language === 'en' ? 'Sign In' : 'تسجيل الدخول'}
          </Button>
          <Button variant="outline" className="border-trade-primary text-trade-primary hover:bg-trade-light">
            {language === 'en' ? 'Register' : 'تسجيل'}
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t animate-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-600 hover:text-trade-primary font-medium">
              {language === 'en' ? 'Home' : 'الرئيسية'}
            </Link>
            <Link to="/" className="text-gray-600 hover:text-trade-primary font-medium">
              {language === 'en' ? 'Directory' : 'الدليل'}
            </Link>
            <Link to="/" className="text-gray-600 hover:text-trade-primary font-medium">
              {language === 'en' ? 'Shipping' : 'الشحن'}
            </Link>
            <Link to="/" className="text-gray-600 hover:text-trade-primary font-medium">
              {language === 'en' ? 'Documentation' : 'المستندات'}
            </Link>
            <Link to="/" className="text-gray-600 hover:text-trade-primary font-medium">
              {language === 'en' ? 'Contact' : 'اتصل بنا'}
            </Link>
            <div className="pt-4 flex flex-col gap-2">
              <Button 
                variant="outline" 
                onClick={toggleLanguage}
                className="border-trade-primary text-trade-primary hover:bg-trade-light"
              >
                {language === 'en' ? 'العربية' : 'English'}
              </Button>
              <Button className="bg-trade-primary hover:bg-trade-dark">
                {language === 'en' ? 'Sign In' : 'تسجيل الدخول'}
              </Button>
              <Button variant="outline" className="border-trade-primary text-trade-primary hover:bg-trade-light">
                {language === 'en' ? 'Register' : 'تسجيل'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
