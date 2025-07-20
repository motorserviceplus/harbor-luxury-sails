
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageCircle, Calendar, Users, Waves, Clock, DollarSign, Phone, Mail } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Boat {
  name: string;
  type: string;
  capacity: string;
  length: string;
  make?: string;
  model?: string;
  hourlyRate: string;
  seasonalPricing?: {
    [key: string]: string;
  };
  description: string;
  images: string[];
  highlight?: string;
  amenities?: Array<{
    name: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
  recreationExtras?: string[];
  specifications?: {
    [key: string]: string | number;
  };
}

interface BoatDetailsModalProps {
  boat: Boat | null;
  isOpen: boolean;
  onClose: () => void;
}

const BoatDetailsModal: React.FC<BoatDetailsModalProps> = ({ boat, isOpen, onClose }) => {
  const isMobile = useIsMobile();

  if (!boat) return null;

  const handleWhatsAppBooking = (boatName: string) => {
    const message = `Hi! I'm interested in booking the ${boatName} for a charter. Could you please provide more details about availability and packages?`;
    const phoneNumber = '61400000000';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const ModalContent = () => (
    <div className="space-y-6">
      {/* Image Gallery */}
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {boat.images.map((image, index) => (
              <CarouselItem key={index}>
                <img 
                  src={image} 
                  alt={`${boat.name} - View ${index + 1}`}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
        
        {boat.highlight && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-gold text-primary font-semibold">
              {boat.highlight}
            </Badge>
          </div>
        )}
      </div>

      {/* Boat Info */}
      <div>
        <h3 className="font-serif text-3xl font-bold text-primary mb-2">{boat.name}</h3>
        <p className="text-muted-foreground mb-4">{boat.type}</p>
        <p className="text-foreground">{boat.description}</p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-gold" />
          <span className="text-sm text-muted-foreground">{boat.capacity}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Waves className="h-5 w-5 text-gold" />
          <span className="text-sm text-muted-foreground">{boat.length}</span>
        </div>
        <div className="flex items-center space-x-2 col-span-2">
          <Clock className="h-5 w-5 text-gold" />
          <span className="text-sm text-muted-foreground">{boat.hourlyRate}</span>
        </div>
      </div>

      {/* Detailed Information Tabs */}
      {(boat.amenities || boat.seasonalPricing || boat.specifications || boat.recreationExtras) && (
        <Tabs defaultValue="amenities" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            {boat.amenities && <TabsTrigger value="amenities">Amenities</TabsTrigger>}
            {boat.seasonalPricing && <TabsTrigger value="pricing">Pricing</TabsTrigger>}
            {boat.specifications && <TabsTrigger value="specs">Specs</TabsTrigger>}
            {boat.recreationExtras && <TabsTrigger value="extras">Extras</TabsTrigger>}
          </TabsList>
          
          {boat.amenities && (
            <TabsContent value="amenities" className="mt-4">
              <div className="grid grid-cols-2 gap-3">
                {boat.amenities.map((amenity, index) => {
                  const IconComponent = amenity.icon;
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      <IconComponent className="h-4 w-4 text-gold" />
                      <span className="text-sm text-muted-foreground">{amenity.name}</span>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          )}
          
          {boat.seasonalPricing && (
            <TabsContent value="pricing" className="mt-4">
              <div className="space-y-3">
                <h5 className="font-semibold text-primary">Seasonal Pricing</h5>
                {Object.entries(boat.seasonalPricing).map(([season, price], index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">{season}</span>
                    <span className="text-sm font-semibold text-primary">{price}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          )}
          
          {boat.specifications && (
            <TabsContent value="specs" className="mt-4">
              <div className="space-y-3">
                {Object.entries(boat.specifications).map(([spec, value], index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground capitalize">{spec.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="text-sm font-semibold text-primary">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          )}
          
          {boat.recreationExtras && (
            <TabsContent value="extras" className="mt-4">
              <div className="grid grid-cols-2 gap-2">
                {boat.recreationExtras.map((extra, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{extra}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          )}
        </Tabs>
      )}

      {/* Booking Actions */}
      <div className="space-y-3 pt-4 border-t">
        <Button 
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
          onClick={() => handleWhatsAppBooking(boat.name)}
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Book by WhatsApp
        </Button>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
            <Calendar className="w-4 h-4 mr-2" />
            Check Availability
          </Button>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="bottom" className="h-[90vh] overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-left">{boat.name}</SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <ModalContent />
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{boat.name}</DialogTitle>
        </DialogHeader>
        <ModalContent />
      </DialogContent>
    </Dialog>
  );
};

export default BoatDetailsModal;
