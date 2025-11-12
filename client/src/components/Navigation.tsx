import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@assets/ChatGPT Image Nov 12, 2025, 02_50_01 PM_1762939224069.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 hover-elevate active-elevate-2 group"
            data-testid="link-home"
          >
            <img 
              src={logo} 
              alt="Pranav Enterprises Logo" 
              className="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hidden sm:inline">
              Pranav Enterprises
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
              data-testid="link-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('quote-calculator')}
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
              data-testid="link-quote"
            >
              Quote
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
              data-testid="link-portfolio"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('upload')}
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
              data-testid="link-upload"
            >
              Upload
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
            <Button
              variant="default"
              onClick={() => scrollToSection('quote-calculator')}
              className="bg-primary"
              data-testid="button-get-quote"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-3 px-4 rounded-lg hover-elevate active-elevate-2 text-base font-medium"
              data-testid="link-services-mobile"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('quote-calculator')}
              className="block w-full text-left py-3 px-4 rounded-lg hover-elevate active-elevate-2 text-base font-medium"
              data-testid="link-quote-mobile"
            >
              Quote
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left py-3 px-4 rounded-lg hover-elevate active-elevate-2 text-base font-medium"
              data-testid="link-portfolio-mobile"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('upload')}
              className="block w-full text-left py-3 px-4 rounded-lg hover-elevate active-elevate-2 text-base font-medium"
              data-testid="link-upload-mobile"
            >
              Upload
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-3 px-4 rounded-lg hover-elevate active-elevate-2 text-base font-medium"
              data-testid="link-about-mobile"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-3 px-4 rounded-lg hover-elevate active-elevate-2 text-base font-medium"
              data-testid="link-contact-mobile"
            >
              Contact
            </button>
            <Button
              variant="default"
              onClick={() => scrollToSection('quote-calculator')}
              className="w-full bg-primary"
              data-testid="button-get-quote-mobile"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
