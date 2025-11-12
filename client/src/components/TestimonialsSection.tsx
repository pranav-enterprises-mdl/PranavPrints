import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialData {
  customerName: string;
  customerRole: string;
  companyName?: string;
  rating: number;
  testimonialText: string;
  serviceUsed: string;
}

const testimonialsData: TestimonialData[] = [
  {
    customerName: "Rajesh Kumar",
    customerRole: "Business Owner",
    companyName: "Kumar Textiles",
    rating: 5,
    testimonialText: "Pranav Enterprises delivered exceptional quality business cards and brochures for our textile showroom. The vibrant colors and premium finish really helped us stand out. Highly recommended!",
    serviceUsed: "Business Cards & Brochures"
  },
  {
    customerName: "Sneha Patil",
    customerRole: "Event Manager",
    companyName: "Celebrations By Sneha",
    rating: 5,
    testimonialText: "We've been using Pranav Enterprises for all our event signage and flex banners. Their turnaround time is impressive, and the print quality is always top-notch. Best printing service in Mudhol!",
    serviceUsed: "Flex Banners & Event Signage"
  },
  {
    customerName: "Vikram Desai",
    customerRole: "Marketing Head",
    companyName: "Desai Agro Industries",
    rating: 5,
    testimonialText: "Professional service and excellent quality prints. They understood our branding requirements perfectly and delivered catalogs that exceeded our expectations. The team is very cooperative and responsive.",
    serviceUsed: "Corporate Catalogs"
  },
  {
    customerName: "Anita Sharma",
    customerRole: "Boutique Owner",
    companyName: "Anita's Fashion Studio",
    rating: 4,
    testimonialText: "Great experience working with Pranav Enterprises for our shop signage. The design team was helpful in finalizing the layout, and the final output looks amazing on our storefront.",
    serviceUsed: "Shop Signage"
  },
  {
    customerName: "Mahesh Reddy",
    customerRole: "Restaurant Owner",
    companyName: "Spice Route Restaurant",
    rating: 5,
    testimonialText: "We ordered menu cards and promotional posters from Pranav Enterprises. The quality is outstanding, and their prices are very competitive. Will definitely use their services again!",
    serviceUsed: "Menu Cards & Posters"
  },
  {
    customerName: "Priya Joshi",
    customerRole: "School Administrator",
    companyName: "Little Buds School",
    rating: 5,
    testimonialText: "Pranav Enterprises has been our go-to printing partner for admission brochures, certificates, and event banners. Always reliable, always on time, and always with excellent quality.",
    serviceUsed: "Educational Materials"
  }
];

export function TestimonialsSection() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-accent text-accent' : 'text-muted-foreground/30'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Quote className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent uppercase tracking-wide">
              Customer Reviews
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don't just take our word for it - hear from businesses and individuals who trust us with their printing needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <Card
              key={index}
              className="relative hover-elevate transition-all duration-300"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="pt-6 pb-6 px-6 space-y-4">
                {/* Quote Icon */}
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Quote className="w-5 h-5 text-accent" />
                  </div>
                  {/* Rating */}
                  <div className="flex gap-0.5" data-testid={`rating-${index}`}>
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-base text-foreground/90 leading-relaxed" data-testid={`text-testimonial-${index}`}>
                  "{testimonial.testimonialText}"
                </p>

                {/* Service Used */}
                <div className="pt-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full" data-testid={`text-service-${index}`}>
                    {testimonial.serviceUsed}
                  </span>
                </div>

                {/* Customer Info */}
                <div className="pt-2 border-t">
                  <p className="font-semibold text-base text-foreground" data-testid={`text-customer-name-${index}`}>
                    {testimonial.customerName}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-customer-role-${index}`}>
                    {testimonial.customerRole}
                    {testimonial.companyName && ` • ${testimonial.companyName}`}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-base text-muted-foreground">
            Ready to join our satisfied customers?{' '}
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-primary font-semibold hover:underline"
              data-testid="link-get-started"
            >
              Get started today
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
