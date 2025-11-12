import { useState } from 'react';
import { ImageIcon, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import businessCardsImg from '@assets/generated_images/Business_cards_portfolio_sample_03bfe36f.png';
import flexBannerImg from '@assets/generated_images/Flex_banner_installation_07b21df3.png';
import brochuresImg from '@assets/generated_images/Brochures_and_catalogs_caf3af49.png';
import postersImg from '@assets/generated_images/Event_posters_and_flyers_5ec4ea02.png';
import signageImg from '@assets/generated_images/Shop_signage_board_92519abb.png';

export function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const portfolioItems = [
    {
      src: businessCardsImg,
      title: 'Premium Business Cards',
      category: 'Business Stationery',
    },
    {
      src: flexBannerImg,
      title: 'Outdoor Flex Banners',
      category: 'Large Format',
    },
    {
      src: brochuresImg,
      title: 'Corporate Brochures',
      category: 'Marketing Materials',
    },
    {
      src: postersImg,
      title: 'Event Posters & Flyers',
      category: 'Promotional',
    },
    {
      src: signageImg,
      title: 'Shop Signage',
      category: 'Outdoor Signage',
    },
    {
      src: businessCardsImg,
      title: 'Custom Stationery',
      category: 'Business Essentials',
    },
  ];

  return (
    <>
      <section id="portfolio" className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <ImageIcon className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent uppercase tracking-wide">
                Our Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Portfolio Gallery
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our collection of high-quality prints that showcase our commitment to excellence
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {portfolioItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage({ src: item.src, title: item.title })}
                className="group relative aspect-square overflow-hidden rounded-xl hover-elevate active-elevate-2"
                data-testid={`button-portfolio-${index}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-base text-background mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-background/80">{item.category}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background/95 backdrop-blur-md">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover-elevate active-elevate-2"
            data-testid="button-close-lightbox"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
              <div className="p-6 bg-background/80 backdrop-blur-sm">
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
