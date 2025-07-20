
import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Users, Waves, Clock, DollarSign, Phone } from 'lucide-react';
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

  const MobileModalContent = () => (
    <div className="space-y-4">
      {/* Image Gallery - moved up */}
      <div className="relative -mx-4 -mt-4">
        <Carousel className="w-full">
          <CarouselContent>
            {boat.images.map((image, index) => (
              <CarouselItem key={index}>
                <img 
                  src={image} 
                  alt={`${boat.name} - View ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-background/80 backdrop-blur-sm h-8 w-8" />
          <CarouselNext className="right-2 bg-background/80 backdrop-blur-sm h-8 w-8" />
        </Carousel>
        
        {boat.highlight && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-gold text-primary font-semibold text-xs px-2 py-1">
              {boat.highlight}
            </Badge>
          </div>
        )}
      </div>

      {/* Header - now primary title */}
      <div className="space-y-2 px-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary">{boat.name}</h3>
            <p className="text-sm text-muted-foreground">{boat.type}</p>
          </div>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-3 gap-3 p-3 bg-muted/30 rounded-lg mx-4">
        <div className="text-center">
          <Users className="h-5 w-5 text-gold mx-auto mb-1" />
          <p className="text-xs text-muted-foreground">Capacity</p>
          <p className="font-semibold text-xs text-foreground">{boat.capacity}</p>
        </div>
        <div className="text-center">
          <Waves className="h-5 w-5 text-gold mx-auto mb-1" />
          <p className="text-xs text-muted-foreground">Length</p>
          <p className="font-semibold text-xs text-foreground">{boat.length}</p>
        </div>
        <div className="text-center">
          <Clock className="h-5 w-5 text-gold mx-auto mb-1" />
          <p className="text-xs text-muted-foreground">Rate</p>
          <p className="font-semibold text-xs text-foreground">{boat.hourlyRate.replace('From ', '')}</p>
        </div>
      </div>

      {/* Enhanced Action Buttons - moved up */}
      <div className="grid grid-cols-2 gap-2 px-4">
        <a href="tel:+61401494414">
          <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 h-10 text-sm">
            <Phone className="w-3 h-3 mr-1 text-green-600" />
            Call
          </Button>
        </a>
        <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50 h-10 text-sm">
          <Calendar className="w-3 h-3 mr-1 text-blue-900" />
          Instant Quote
        </Button>
      </div>

      {/* Information Tabs */}
      {(boat.seasonalPricing || boat.amenities || boat.recreationExtras) && (
        <div className="px-4">
          <Tabs defaultValue="pricing" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-10">
              {boat.seasonalPricing && <TabsTrigger value="pricing" className="text-xs">Pricing</TabsTrigger>}
              {boat.amenities && <TabsTrigger value="amenities" className="text-xs">Amenities</TabsTrigger>}
              {boat.recreationExtras && <TabsTrigger value="extras" className="text-xs">Extras</TabsTrigger>}
            </TabsList>
            
            {boat.seasonalPricing && (
              <TabsContent value="pricing" className="mt-4">
                <div className="space-y-3">
                  <h5 className="font-semibold text-primary text-sm">Seasonal Pricing</h5>
                  <div className="space-y-2">
                    {Object.entries(boat.seasonalPricing).map(([season, price], index) => (
                      <div key={index} className="flex justify-between items-center py-2 px-3 border border-border/50 rounded-lg">
                        <span className="text-foreground font-medium text-xs">{season}</span>
                        <span className="text-sm font-bold text-primary">{price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            )}
            
            {boat.amenities && (
              <TabsContent value="amenities" className="mt-3">
                <div className="grid grid-cols-2 gap-1">
                  {boat.amenities.map((amenity, index) => {
                    const IconComponent = amenity.icon;
                    return (
                      <div key={index} className="flex items-center space-x-1.5 p-1.5 rounded-lg hover:bg-muted/50 transition-colors">
                        <IconComponent className="h-3 w-3 text-gold flex-shrink-0" />
                        <span className="text-foreground text-xs">{amenity.name}</span>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            )}
            
            {boat.recreationExtras && (
              <TabsContent value="extras" className="mt-4">
                <div className="grid grid-cols-2 gap-1">
                  {boat.recreationExtras.map((extra, index) => (
                    <div key={index} className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                      <span className="text-foreground text-xs">{extra}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div>
      )}
    </div>
  );

  const ModalContent = () => (
    <div className="space-y-6">
      {/* Image Gallery - moved up */}
      <div className="relative -mx-8 -mt-6">
        <Carousel className="w-full">
          <CarouselContent>
            {boat.images.map((image, index) => (
              <CarouselItem key={index}>
                <img 
                  src={image} 
                  alt={`${boat.name} - View ${index + 1}`}
                  className="w-full h-80 object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-6 bg-background/80 backdrop-blur-sm" />
          <CarouselNext className="right-6 bg-background/80 backdrop-blur-sm" />
        </Carousel>
        
        {boat.highlight && (
          <div className="absolute top-6 left-6">
            <Badge className="bg-gold text-primary font-semibold text-sm px-3 py-1">
              {boat.highlight}
            </Badge>
          </div>
        )}
      </div>

      {/* Boat Header Info - now primary title */}
      <div className="space-y-4 px-8">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-serif text-4xl font-bold text-primary mb-2">{boat.name}</h3>
            <p className="text-lg text-muted-foreground mb-2">{boat.type}</p>
            <p className="text-base text-muted-foreground">Available for hire in Sydney</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="h-5 w-5 text-gold" />
              <span className="text-xl font-bold text-primary">{boat.hourlyRate.replace('From ', '')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-muted/30 rounded-xl mx-8">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gold/10 rounded-full">
            <Users className="h-6 w-6 text-gold" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Capacity</p>
            <p className="font-semibold text-foreground">{boat.capacity}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gold/10 rounded-full">
            <Waves className="h-6 w-6 text-gold" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Length</p>
            <p className="font-semibold text-foreground">{boat.length}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gold/10 rounded-full">
            <Clock className="h-6 w-6 text-gold" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Rate</p>
            <p className="font-semibold text-foreground">{boat.hourlyRate.replace('From ', '')}</p>
          </div>
        </div>
      </div>

      {/* Enhanced Action Buttons - moved up */}
      <div className="grid grid-cols-2 gap-4 px-8">
        <a href="tel:+61401494414">
          <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 h-12 font-semibold">
            <Phone className="w-4 h-4 mr-2 text-green-600" />
            Call +61 401 494 414
          </Button>
        </a>
        <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50 h-12 font-semibold">
          <Calendar className="w-4 h-4 mr-2 text-blue-900" />
          Instant Quote
        </Button>
      </div>

      {/* Information Tabs */}
      {(boat.seasonalPricing || boat.amenities || boat.recreationExtras) && (
        <div className="px-8">
          <Tabs defaultValue="pricing" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-12">
              {boat.seasonalPricing && <TabsTrigger value="pricing" className="text-sm">Pricing</TabsTrigger>}
              {boat.amenities && <TabsTrigger value="amenities" className="text-sm">Amenities</TabsTrigger>}
              {boat.recreationExtras && <TabsTrigger value="extras" className="text-sm">Extras</TabsTrigger>}
            </TabsList>
            
            {boat.seasonalPricing && (
              <TabsContent value="pricing" className="mt-6">
                <div className="space-y-4">
                  <h5 className="font-semibold text-primary text-lg">Seasonal Pricing</h5>
                  <div className="space-y-3">
                    {Object.entries(boat.seasonalPricing).map(([season, price], index) => (
                      <div key={index} className="flex justify-between items-center py-3 px-4 border border-border/50 rounded-lg">
                        <span className="text-foreground font-medium">{season}</span>
                        <span className="text-lg font-bold text-primary">{price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            )}
            
            {boat.amenities && (
              <TabsContent value="amenities" className="mt-6">
                <div className="grid grid-cols-3 gap-3">
                  {boat.amenities.map((amenity, index) => {
                    const IconComponent = amenity.icon;
                    return (
                      <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <IconComponent className="h-4 w-4 text-gold flex-shrink-0" />
                        <span className="text-foreground text-sm">{amenity.name}</span>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            )}
            
            {boat.recreationExtras && (
              <TabsContent value="extras" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {boat.recreationExtras.map((extra, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-foreground">{extra}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div>
      )}
    </div>
  );

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="bottom" className="h-[90vh] overflow-y-auto p-0">
          <MobileModalContent />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto p-0">
        <ModalContent />
      </DialogContent>
    </Dialog>
  );
};

export default BoatDetailsModal;
