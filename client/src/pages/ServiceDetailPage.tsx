import { useRoute, Link } from 'wouter';
import { ArrowLeft, CheckCircle2, Printer, Clock, Award, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Footer } from '@/components/Footer';

interface ServiceSpec {
  title: string;
  value: string;
}

interface PricingTier {
  name: string;
  description: string;
  priceRange: string;
  features: string[];
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ServiceDetails {
  title: string;
  subtitle: string;
  description: string;
  specifications: ServiceSpec[];
  pricingTiers: PricingTier[];
  process: ProcessStep[];
  features: string[];
}

const serviceData: Record<string, ServiceDetails> = {
  'offset-digital': {
    title: 'Offset Digital Printing',
    subtitle: 'Premium Quality Digital & Offset Printing Solutions',
    description: 'Our state-of-the-art offset digital printing services deliver exceptional quality for all your business and personal printing needs. Perfect for high-volume jobs with consistent, vibrant color reproduction.',
    specifications: [
      { title: 'Printing Method', value: 'Offset Digital Press' },
      { title: 'Maximum Size', value: 'A0+ (Custom sizes available)' },
      { title: 'Color Output', value: 'CMYK Full Color + Pantone' },
      { title: 'Paper Weight', value: '80 GSM - 500 GSM' },
      { title: 'Turnaround Time', value: '24-48 Hours' },
      { title: 'Minimum Quantity', value: '50 units' },
    ],
    pricingTiers: [
      {
        name: 'Standard',
        description: 'Perfect for everyday business materials',
        priceRange: '₹2-5 per unit',
        features: [
          '80-130 GSM paper stock',
          'CMYK color printing',
          'Standard finish',
          'Business cards, flyers, letterheads',
          '24-48 hour turnaround',
        ],
      },
      {
        name: 'Premium',
        description: 'Enhanced quality for professional materials',
        priceRange: '₹5-12 per unit',
        features: [
          '170-300 GSM premium paper',
          'Enhanced color accuracy',
          'Matte or glossy finish',
          'Brochures, catalogs, certificates',
          'UV coating available',
        ],
      },
      {
        name: 'Luxury',
        description: 'Top-tier quality for premium branding',
        priceRange: '₹12-25 per unit',
        features: [
          '300-500 GSM luxury stock',
          'Pantone color matching',
          'Special finishes (embossing, foil)',
          'Premium business cards, invitations',
          'Same-day rush available',
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: 'Design Review',
        description: 'Share your design files or work with our design team to create the perfect print-ready artwork.',
      },
      {
        step: 2,
        title: 'Material Selection',
        description: 'Choose from our wide range of paper stocks, finishes, and special effects to match your vision.',
      },
      {
        step: 3,
        title: 'Proof Approval',
        description: 'Review digital proofs or request a physical sample before full production begins.',
      },
      {
        step: 4,
        title: 'Production',
        description: 'Your order is printed using our high-quality offset digital presses with expert oversight.',
      },
      {
        step: 5,
        title: 'Finishing',
        description: 'Cutting, folding, binding, and any special finishing touches are applied with precision.',
      },
      {
        step: 6,
        title: 'Quality Check & Delivery',
        description: 'Final inspection ensures perfection before packaging and delivery to your location.',
      },
    ],
    features: [
      'High-resolution output up to 2400 DPI',
      'Consistent color reproduction across print runs',
      'Wide variety of paper stocks and finishes',
      'Cost-effective for medium to high volumes',
      'Quick turnaround times',
      'Eco-friendly printing options available',
      'Professional design assistance',
      'Free delivery within Mudhol',
    ],
  },
  'flex-printing': {
    title: 'Flex Printing',
    subtitle: 'Large Format Outdoor & Indoor Flex Banner Solutions',
    description: 'Professional flex printing services for eye-catching outdoor banners, indoor displays, and large-format graphics. Weather-resistant and durable materials ensure your message stays vibrant for years.',
    specifications: [
      { title: 'Printing Method', value: 'Large Format Digital Flex' },
      { title: 'Maximum Width', value: 'Up to 16 feet (custom lengths)' },
      { title: 'Material Type', value: 'Frontlit, Backlit, Vinyl Flex' },
      { title: 'Resolution', value: '720-1440 DPI' },
      { title: 'Weather Resistance', value: 'UV & Water Resistant' },
      { title: 'Turnaround Time', value: '2-3 Days' },
    ],
    pricingTiers: [
      {
        name: 'Standard Flex',
        description: 'Durable outdoor banners for events and promotions',
        priceRange: '₹25-40 per sq.ft',
        features: [
          'Standard frontlit flex material',
          'Weather-resistant printing',
          'Eyelets for easy hanging',
          'Event banners, sale promotions',
          'Outdoor durability up to 1 year',
        ],
      },
      {
        name: 'Premium Flex',
        description: 'High-quality flex for long-term installations',
        priceRange: '₹40-70 per sq.ft',
        features: [
          'Premium frontlit/backlit flex',
          'Enhanced color vibrancy',
          'Reinforced edges',
          'Shop fascias, permanent signage',
          'Outdoor durability up to 2 years',
        ],
      },
      {
        name: 'Vinyl Graphics',
        description: 'Premium vinyl for vehicle wraps and wall graphics',
        priceRange: '₹70-150 per sq.ft',
        features: [
          'High-quality adhesive vinyl',
          'Contour cutting available',
          'Lamination for protection',
          'Vehicle wraps, wall graphics',
          'Indoor/outdoor long-term use',
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: 'Size & Material Consultation',
        description: 'Discuss banner dimensions, installation location, and select the appropriate flex material.',
      },
      {
        step: 2,
        title: 'Design Preparation',
        description: 'Submit your design or work with our team to create impactful large-format graphics.',
      },
      {
        step: 3,
        title: 'Material Selection',
        description: 'Choose between frontlit, backlit, or vinyl flex based on your specific requirements.',
      },
      {
        step: 4,
        title: 'Large Format Printing',
        description: 'Your banner is printed on our professional large-format printers with UV-resistant inks.',
      },
      {
        step: 5,
        title: 'Finishing & Installation Prep',
        description: 'Welding, hemming, eyelets, and poles added as needed for easy installation.',
      },
      {
        step: 6,
        title: 'Installation Support',
        description: 'Professional installation assistance available for large or complex installations.',
      },
    ],
    features: [
      'Waterproof and UV-resistant materials',
      'Suitable for indoor and outdoor use',
      'Custom sizes up to 16 feet wide',
      'Vibrant, long-lasting colors',
      'Professional installation support',
      'Hemming and eyelet finishing',
      'Pole and mounting hardware available',
      'Free on-site consultation in Mudhol area',
    ],
  },
};

export default function ServiceDetailPage() {
  const [, params] = useRoute('/services/:serviceId');
  const serviceId = params?.serviceId || '';
  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested service page doesn't exist.</p>
          <Link href="/">
            <Button data-testid="button-back-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/">
              <button className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover-elevate active-elevate-2" data-testid="button-brand-home">
                Pranav Enterprises
              </button>
            </Link>
            <Button onClick={scrollToContact} data-testid="button-get-quote">
              Get Quote
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <Link href="/">
              <button className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 hover-elevate active-elevate-2 px-3 py-2 rounded-lg" data-testid="button-back">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </button>
            </Link>
            
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Printer className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wide">
                  Professional Service
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-service-title">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                {service.subtitle}
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" onClick={scrollToContact} data-testid="button-request-quote">
                  Request a Quote
                </Button>
                <Link href="/">
                  <Button size="lg" variant="outline" data-testid="button-view-all-services">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.specifications.map((spec, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-spec-${index}`}>
                  <CardContent className="pt-6 pb-6">
                    <p className="text-sm text-muted-foreground mb-2">{spec.title}</p>
                    <p className="text-lg font-semibold text-foreground" data-testid={`text-spec-value-${index}`}>
                      {spec.value}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 md:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Tiers</h2>
              <p className="text-lg text-muted-foreground">
                Choose the quality level that fits your budget and requirements
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.pricingTiers.map((tier, index) => (
                <Card
                  key={index}
                  className={`relative hover-elevate ${index === 1 ? 'border-2 border-primary' : ''}`}
                  data-testid={`card-pricing-${index}`}
                >
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl" data-testid={`text-tier-name-${index}`}>{tier.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <p className="text-3xl font-bold text-primary" data-testid={`text-price-range-${index}`}>
                        {tier.priceRange}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">* Prices vary by quantity</p>
                    </div>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3" data-testid={`text-feature-${index}-${featureIndex}`}>
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-base text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent uppercase tracking-wide">
                  Our Process
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">How We Work</h2>
            </div>
            <div className="space-y-8">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start"
                  data-testid={`process-step-${index}`}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2" data-testid={`text-step-title-${index}`}>
                      {step.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed" data-testid={`text-step-desc-${index}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 md:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wide">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Key Features & Benefits</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg hover-elevate active-elevate-2"
                  data-testid={`feature-${index}`}
                >
                  <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for a detailed quote and personalized consultation for your printing needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={scrollToContact} data-testid="button-contact-now">
                Contact Us Now
              </Button>
              <Link href="/">
                <Button size="lg" variant="outline" data-testid="button-explore-services">
                  Explore Other Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
