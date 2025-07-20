
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Users, Waves, Calendar, Star, Clock, DollarSign, MessageCircle } from 'lucide-react';
import sevenStarImage from '@/assets/seven-star-yacht.jpg';
import yachtInteriorImage from '@/assets/yacht-interior.jpg';

const Fleet = () => {
  const boats = [
    {
      name: 'Seven Star',
      type: 'Luxury Motor Yacht',
      capacity: '1-80 Guests',
      length: '98 feet',
      hourlyRate: '$2000/hr',
      features: ['Water slide', 'Multiple decks', 'Premium bar', 'Entertainment system', 'Air conditioning', 'Sun deck'],
      description: 'Our flagship vessel featuring an exciting water slide and multiple entertainment areas, perfect for large celebrations and unforgettable Sydney Harbour experiences.',
      images: [
        sevenStarImage,
        yachtInteriorImage,
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
        'https://images.unsplash.com/photo-1567449303183-8a5aa7c62fdb?w=800&q=80',
      ],
      highlight: 'Most Popular'
    },
    {
      name: 'Privacy',
      type: 'Performance Luxury Yacht',
      capacity: '1-36 Guests',
      length: '87 feet',
      hourlyRate: '$1650/hr',
      features: ['High-speed performance', 'Sleek interior', 'Premium sound system', 'Air conditioning', 'Modern galley', 'Panoramic windows'],
      description: 'A sophisticated performance yacht combining speed with luxury, ideal for intimate gatherings and corporate events with contemporary styling.',
      images: [
        yachtInteriorImage,
        'https://images.unsplash.com/photo-1593113616828-6f22bdd62e63?w=800&q=80',
        'https://images.unsplash.com/photo-1541013064736-c026a50b4269?w=800&q=80',
        'https://images.unsplash.com/photo-1567449303183-8a5aa7c62fdb?w=800&q=80',
      ],
      highlight: 'Best Value'
    }
  ];

  const handleWhatsAppBooking = (boatName: string) => {
    const message = `Hi! I'm interested in booking the ${boatName} for a charter. Could you please provide more details about availability and packages?`;
    const phoneNumber = '61400000000';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Perfect Boat
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From intimate gatherings to big celebrations, we've got the perfect vessel for your Sydney Harbour adventure.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {boats.map((boat, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-card hover:shadow-lg transition-all duration-300 bg-card">
                <div className="relative">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {boat.images.map((image, imageIndex) => (
                        <CarouselItem key={imageIndex}>
                          <img 
                            src={image} 
                            alt={`${boat.name} - View ${imageIndex + 1}`}
                            className="w-full h-64 object-cover"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                  
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent-bright hover:bg-accent-bright-light text-white font-medium border-0">
                      {boat.highlight}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/90 backdrop-blur-sm text-foreground font-medium border border-border">
                      <DollarSign className="w-3 h-3 mr-1" />
                      {boat.hourlyRate}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                        {boat.name}
                      </h3>
                      <p className="font-sans text-muted-foreground text-sm">{boat.type}</p>
                    </div>
                    <Star className="h-5 w-5 text-accent-bright" />
                  </div>

                  <p className="font-sans text-foreground mb-6 leading-relaxed">
                    {boat.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="font-sans text-sm text-muted-foreground">{boat.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Waves className="h-4 w-4 text-primary" />
                      <span className="font-sans text-sm text-muted-foreground">{boat.length}</span>
                    </div>
                    <div className="flex items-center space-x-2 col-span-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-sans text-sm text-muted-foreground">From {boat.hourlyRate}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-sans font-medium text-foreground mb-3">What's Included</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {boat.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="font-sans text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-primary hover:bg-primary-light text-primary-foreground font-medium h-12 rounded-lg"
                      onClick={() => handleWhatsAppBooking(boat.name)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Let's Chat About This Boat
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary/20 text-primary hover:bg-primary/5 font-medium h-12 rounded-lg"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Check When It's Available
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Not Sure Which One's Right for You?
          </h2>
          <p className="font-sans text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto leading-relaxed">
            Our friendly team knows these boats inside and out. We'll help you pick the perfect one for your celebration.
          </p>
          <Button 
            className="bg-white hover:bg-gray-50 text-primary font-medium px-8 py-3 h-12 rounded-lg text-base shadow-clean"
            onClick={() => handleWhatsAppBooking('fleet consultation')}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Get Help Choosing
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
