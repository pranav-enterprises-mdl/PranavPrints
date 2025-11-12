import { Printer, Activity, Layers, CheckCircle2, Clock, Award, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import flexImage from '@assets/generated_images/Flex_banner_installation_07b21df3.png';
import printingImage from '@assets/generated_images/Printing_press_hero_background_8bd0a291.png';

export function ServicesSection() {
  const services = [
    {
      icon: <Printer className="w-12 h-12 text-primary" />,
      title: 'Offset Digital Printing',
      description: 'High-volume, premium quality printing for all your business materials',
      image: printingImage,
      features: [
        'Business cards & letterheads',
        'Brochures & catalogs',
        'Marketing materials',
        'Custom stationery',
      ],
      badges: ['High Quality', 'Cost Effective', 'Fast Delivery'],
      detailUrl: '/services/offset-digital',
    },
    {
      icon: <Layers className="w-12 h-12 text-accent" />,
      title: 'Flex Printing',
      description: 'Large format outdoor printing for maximum visibility and impact',
      image: flexImage,
      features: [
        'Banners & hoardings',
        'Shop signage & boards',
        'Event displays',
        'Vehicle graphics',
      ],
      badges: ['Weather Resistant', 'Vibrant Colors', 'Large Format'],
      detailUrl: '/services/flex-printing',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Printing Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From small business cards to large outdoor banners, we deliver exceptional print quality for every project
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover-elevate overflow-hidden border-2 transition-all duration-300"
              data-testid={`card-service-${index}`}
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                  {service.badges.map((badge, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>

              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl md:text-3xl">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-base text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">24-48hrs delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Premium quality</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link href={service.detailUrl}>
                    <Button variant="outline" className="w-full" data-testid={`button-learn-more-${index}`}>
                      Learn More & Pricing
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
