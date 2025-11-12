import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  text?: string;
  showIcon?: boolean;
  prefilledMessage?: string;
  className?: string;
  testId?: string;
}

export function WhatsAppButton({
  variant = 'default',
  size = 'default',
  text = 'Chat on WhatsApp',
  showIcon = true,
  prefilledMessage = 'Hi! I am interested in your printing services.',
  className = '',
  testId = 'button-whatsapp',
}: WhatsAppButtonProps) {
  const phoneNumber = '919740007147';
  const encodedMessage = encodeURIComponent(prefilledMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      asChild
      data-testid={testId}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {showIcon && <MessageCircle className="w-4 h-4 mr-2" />}
        {text}
      </a>
    </Button>
  );
}
