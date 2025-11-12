import { useState, useMemo } from 'react';
import { Calculator, FileText, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

type ServiceType = 'business-cards' | 'brochures' | 'flex-banner' | 'posters' | 'signage' | 'custom';
type PaperQuality = 'standard' | 'premium' | 'luxury';
type PrintSide = 'single' | 'double';

interface PricingConfig {
  basePrice: number;
  perUnitPrice: number;
  qualityMultiplier: {
    standard: number;
    premium: number;
    luxury: number;
  };
  doubleSideMultiplier: number;
}

const servicePricing: Record<ServiceType, PricingConfig> = {
  'business-cards': {
    basePrice: 200,
    perUnitPrice: 2,
    qualityMultiplier: { standard: 1, premium: 1.5, luxury: 2.2 },
    doubleSideMultiplier: 1.4,
  },
  'brochures': {
    basePrice: 500,
    perUnitPrice: 15,
    qualityMultiplier: { standard: 1, premium: 1.6, luxury: 2.5 },
    doubleSideMultiplier: 1.5,
  },
  'flex-banner': {
    basePrice: 800,
    perUnitPrice: 120,
    qualityMultiplier: { standard: 1, premium: 1.4, luxury: 1.8 },
    doubleSideMultiplier: 1.3,
  },
  'posters': {
    basePrice: 300,
    perUnitPrice: 25,
    qualityMultiplier: { standard: 1, premium: 1.5, luxury: 2 },
    doubleSideMultiplier: 1.2,
  },
  'signage': {
    basePrice: 1000,
    perUnitPrice: 200,
    qualityMultiplier: { standard: 1, premium: 1.5, luxury: 2 },
    doubleSideMultiplier: 1.2,
  },
  'custom': {
    basePrice: 500,
    perUnitPrice: 50,
    qualityMultiplier: { standard: 1, premium: 1.5, luxury: 2 },
    doubleSideMultiplier: 1.3,
  },
};

export function QuoteCalculator() {
  const [service, setService] = useState<ServiceType>('business-cards');
  const [quantity, setQuantity] = useState<string>('100');
  const [quality, setQuality] = useState<PaperQuality>('standard');
  const [printSide, setPrintSide] = useState<PrintSide>('single');

  const estimatedPrice = useMemo(() => {
    const config = servicePricing[service];
    const qty = parseInt(quantity) || 0;
    
    if (qty === 0) return 0;

    let price = config.basePrice + (config.perUnitPrice * qty);
    price = price * config.qualityMultiplier[quality];
    
    if (printSide === 'double') {
      price = price * config.doubleSideMultiplier;
    }

    return Math.round(price);
  }, [service, quantity, quality, printSide]);

  const handleGetQuote = () => {
    const quoteDetails = {
      service,
      quantity: parseInt(quantity),
      quality,
      printSide,
      estimatedPrice,
    };
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="quote-calculator" className="py-20 md:py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">
              Instant Quote
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your Price Estimate
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Calculate an instant quote for your printing project. Final pricing may vary based on specific requirements.
          </p>
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Quote Calculator
            </CardTitle>
            <CardDescription>
              Select your requirements to get an instant price estimate
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service Type */}
              <div className="space-y-2">
                <Label htmlFor="service-type">Service Type *</Label>
                <Select value={service} onValueChange={(value) => setService(value as ServiceType)}>
                  <SelectTrigger id="service-type" data-testid="select-service-type">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="business-cards" data-testid="option-service-business-cards">Business Cards</SelectItem>
                    <SelectItem value="brochures" data-testid="option-service-brochures">Brochures & Catalogs</SelectItem>
                    <SelectItem value="flex-banner" data-testid="option-service-flex-banner">Flex Banners</SelectItem>
                    <SelectItem value="posters" data-testid="option-service-posters">Posters & Flyers</SelectItem>
                    <SelectItem value="signage" data-testid="option-service-signage">Shop Signage</SelectItem>
                    <SelectItem value="custom" data-testid="option-service-custom">Custom Print Job</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Quantity */}
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity *</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Enter quantity"
                  data-testid="input-quantity"
                />
              </div>

              {/* Paper Quality */}
              <div className="space-y-2">
                <Label htmlFor="quality">Paper/Material Quality *</Label>
                <Select value={quality} onValueChange={(value) => setQuality(value as PaperQuality)}>
                  <SelectTrigger id="quality" data-testid="select-quality">
                    <SelectValue placeholder="Select quality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard" data-testid="option-quality-standard">Standard (300 GSM)</SelectItem>
                    <SelectItem value="premium" data-testid="option-quality-premium">Premium (400 GSM)</SelectItem>
                    <SelectItem value="luxury" data-testid="option-quality-luxury">Luxury (500 GSM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Print Side */}
              <div className="space-y-2">
                <Label htmlFor="print-side">Printing Side *</Label>
                <Select value={printSide} onValueChange={(value) => setPrintSide(value as PrintSide)}>
                  <SelectTrigger id="print-side" data-testid="select-print-side">
                    <SelectValue placeholder="Select print side" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single" data-testid="option-print-side-single">Single Side</SelectItem>
                    <SelectItem value="double" data-testid="option-print-side-double">Double Side</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price Display */}
            <div className="mt-8 p-6 bg-primary/5 border-2 border-primary/20 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Estimated Price</p>
                  <div className="flex items-baseline gap-2">
                    <DollarSign className="w-6 h-6 text-primary" />
                    <span className="text-4xl font-bold text-primary" data-testid="text-estimated-price">
                      ₹{estimatedPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    * Final price may vary based on design complexity and additional requirements
                  </p>
                </div>
                <Button
                  size="lg"
                  onClick={handleGetQuote}
                  className="hidden md:flex"
                  data-testid="button-get-formal-quote"
                >
                  Get Formal Quote
                </Button>
              </div>
            </div>

            <Button
              size="lg"
              onClick={handleGetQuote}
              className="w-full md:hidden"
              data-testid="button-get-formal-quote-mobile"
            >
              Get Formal Quote
            </Button>

            {/* Additional Info */}
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground text-center">
                Ready to proceed? Click "Get Formal Quote" to contact us with your specific requirements.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
