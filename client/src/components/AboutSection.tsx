import { Building2, Users, Target, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  const stats = [
    {
      icon: <Building2 className="w-6 h-6 text-primary" />,
      value: '10+',
      label: 'Years in Business',
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      value: '3000+',
      label: 'Happy Clients',
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      value: '5000+',
      label: 'Projects Completed',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      value: '100%',
      label: 'Quality Assured',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wide">
                About Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Trusted Partner in{' '}
              <span className="text-primary">Quality Printing</span>
            </h2>

            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Located in the heart of Mudhol, Karnataka, <strong className="text-foreground">Pranav Enterprises</strong> has been 
                serving businesses and individuals with top-quality printing solutions for over a decade.
              </p>
              <p>
                We specialize in offset digital printing and flex printing, offering a comprehensive range of 
                services from small business cards to large outdoor banners. Our state-of-the-art equipment 
                and experienced team ensure that every project meets the highest standards of quality and precision.
              </p>
              <p>
                Whether you need marketing materials for your business, event signage, or custom stationery, 
                we deliver exceptional results with fast turnaround times and competitive pricing.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="space-y-3 pt-4">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  'Premium quality prints with vibrant colors',
                  'Fast turnaround times - 24 to 48 hours',
                  'Competitive and transparent pricing',
                  'Experienced and professional team',
                  'Latest printing technology and equipment',
                  'Personalized customer service',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="text-base text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover-elevate transition-all duration-300"
                data-testid={`card-stat-${index}`}
              >
                <CardContent className="pt-8 pb-8 px-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
