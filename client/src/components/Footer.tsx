import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
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
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Pranav Enterprises
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional offset digital and flex printing services in Mudhol, Karnataka. 
              Quality prints with fast turnaround times.
            </p>
            <a
              href="https://www.instagram.com/pranaventerprisesmdl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              data-testid="link-footer-instagram"
            >
              <Instagram className="w-4 h-4" />
              Follow us on Instagram
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'Services', id: 'services' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'About', id: 'about' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Offset Digital Printing</li>
              <li>Flex Printing</li>
              <li>Business Cards</li>
              <li>Banners & Signage</li>
              <li>Brochures & Catalogs</li>
              <li>Marketing Materials</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="tel:9740007147"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-phone"
                >
                  9740007147
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/919740007147?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20your%20printing%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-[#25D366] transition-colors"
                  data-testid="link-footer-whatsapp"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Shop No 7, Talewad Towers,<br />
                  Ranna Circle, Mudhol,<br />
                  Bagalkote, Karnataka - 587313
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Pranav Enterprises. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Crafted with precision in Mudhol, Karnataka
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
