
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
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', // Luxury yacht deck
        'https://images.unsplash.com/photo-1567449303183-8a5aa7c62fdb?w=800&q=80', // Yacht water slide area
      ],
      highlight: 'Featured Yacht'
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
        'https://images.unsplash.com/photo-1593113616828-6f22bdd62e63?w=800&q=80', // Modern yacht interior
        'https://images.unsplash.com/photo-1541013064736-c026a50b4269?w=800&q=80', // Yacht exterior at sea
        'https://images.unsplash.com/photo-1567449303183-8a5aa7c62fdb?w=800&q=80', // Yacht deck area
      ],
      highlight: 'Performance Choice'
    }
  ];

  const handleWhatsAppBooking = (boatName: string) => {
    const message = `Hi! I'm interested in booking the ${boatName} for a charter. Could you please provide more details about availability and packages?`;
    const phoneNumber = '61400000000'; // Replace with actual WhatsApp business number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            Our Premium Fleet
          </h1>
          <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto">
            Each vessel in our exclusive collection has been carefully selected to provide 
            the ultimate in luxury, comfort, and Sydney Harbour experiences.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {boats.map((boat, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-luxury transition-all duration-300">
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
                    <Badge className="bg-gold text-primary font-semibold">
                      {boat.highlight}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90 text-primary-foreground font-semibold">
                      <DollarSign className="w-3 h-3 mr-1" />
                      {boat.hourlyRate}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-primary mb-2">
                        {boat.name}
                      </h3>
                      <p className="font-sans text-muted-foreground mb-1">{boat.type}</p>
                    </div>
                    <Star className="h-6 w-6 text-gold" />
                  </div>

                  <p className="font-sans text-foreground mb-6">
                    {boat.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-gold" />
                      <span className="font-sans text-sm text-muted-foreground">{boat.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Waves className="h-5 w-5 text-gold" />
                      <span className="font-sans text-sm text-muted-foreground">{boat.length}</span>
                    </div>
                    <div className="flex items-center space-x-2 col-span-2">
                      <Clock className="h-5 w-5 text-gold" />
                      <span className="font-sans text-sm text-muted-foreground">Starting from {boat.hourlyRate}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-sans font-semibold text-primary mb-3">Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {boat.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gold rounded-full"></div>
                          <span className="font-sans text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-primary hover:bg-primary-light text-primary-foreground font-semibold"
                      onClick={() => handleWhatsAppBooking(boat.name)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Book by WhatsApp
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary/5 font-semibold"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Check Availability
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-primary-foreground mb-6">
            Need Help Choosing?
          </h2>
          <p className="font-sans text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our experienced team can recommend the perfect vessel for your occasion and help you plan the ultimate Sydney Harbour experience.
          </p>
          <Button 
            className="bg-gold hover:bg-gold-light text-primary font-semibold px-8 py-3 text-lg"
            onClick={() => handleWhatsAppBooking('fleet consultation')}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat with Our Team
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
