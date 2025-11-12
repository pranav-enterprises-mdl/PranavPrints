import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import heroImage from '@assets/generated_images/Printing_press_hero_background_8bd0a291.png';

export function HeroSection() {
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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern printing press"
          className="w-full h-full object-cover scale-105 animate-float"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/70" />
        
        {/* Animated CMYK gradient accents */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-lg shadow-primary/10 hover-elevate">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-glow" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Premium Printing Services in Mudhol
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            Transform Your Ideas Into{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Stunning Prints
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Professional offset digital and flex printing services for all your business needs. 
            High-quality prints with fast turnaround times and competitive pricing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <WhatsAppButton
              size="lg"
              text="Chat on WhatsApp"
              className="shadow-xl shadow-[#25D366]/30 bg-[#25D366] hover:bg-[#20BA5A] border-[#25D366] hover:scale-105 transition-transform duration-200"
              prefilledMessage="Hi! I'm interested in getting a quote for printing services."
              testId="button-hero-whatsapp"
            />
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-primary shadow-xl shadow-primary/30 hover:scale-105 transition-transform duration-200"
              data-testid="button-hero-quote"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('portfolio')}
              className="glass-effect border-2 shadow-lg hover:scale-105 transition-transform duration-200"
              data-testid="button-hero-portfolio"
            >
              View Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto">
            <div className="glass-effect rounded-xl p-6 shadow-lg hover-elevate transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold gradient-text">10+</div>
              <div className="text-sm text-muted-foreground mt-2 font-medium">Years Experience</div>
            </div>
            <div className="glass-effect rounded-xl p-6 shadow-lg hover-elevate transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold gradient-text">5000+</div>
              <div className="text-sm text-muted-foreground mt-2 font-medium">Projects Done</div>
            </div>
            <div className="glass-effect rounded-xl p-6 shadow-lg hover-elevate transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold gradient-text">100%</div>
              <div className="text-sm text-muted-foreground mt-2 font-medium">Client Satisfaction</div>
            </div>
            <div className="glass-effect rounded-xl p-6 shadow-lg hover-elevate transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold gradient-text">24hr</div>
              <div className="text-sm text-muted-foreground mt-2 font-medium">Fast Turnaround</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
}
