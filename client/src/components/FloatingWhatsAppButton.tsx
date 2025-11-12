import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FloatingWhatsAppButton() {
  const phoneNumber = '919740007147';
  const encodedMessage = encodeURIComponent('Hi! I would like to know more about your printing services.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <Button
        size="icon"
        className="h-14 w-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#20BA5A] border-2 border-white transition-all duration-300 hover:scale-110"
        asChild
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="button-floating-whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </a>
      </Button>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-background/95 backdrop-blur-sm rounded-lg shadow-md border border-border text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat on WhatsApp
      </span>
    </div>
  );
}
