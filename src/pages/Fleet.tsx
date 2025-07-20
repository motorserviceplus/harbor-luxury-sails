import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Waves, Calendar, Star } from 'lucide-react';
import yachtFleetImage from '@/assets/yacht-fleet.jpg';
import yachtInteriorImage from '@/assets/yacht-interior.jpg';

const Fleet = () => {
  const boats = [
    {
      name: 'Harbour Princess',
      type: 'Luxury Motor Yacht',
      capacity: '12 Guests',
      length: '65 feet',
      features: ['Premium bar', 'Sound system', 'Sun deck', 'Air conditioning'],
      description: 'Our flagship vessel combining elegance with comfort for unforgettable Sydney Harbour experiences.',
      image: yachtFleetImage,
      highlight: 'Most Popular'
    },
    {
      name: 'Sydney Sovereign',
      type: 'Executive Cruiser',
      capacity: '8 Guests',
      length: '55 feet',
      features: ['Gourmet galley', 'Wine cellar', 'Panoramic windows', 'Wifi'],
      description: 'Perfect for intimate gatherings and corporate events with sophisticated styling.',
      image: yachtInteriorImage,
      highlight: 'Premium Choice'
    },
    {
      name: 'Opera Pearl',
      type: 'Sailing Yacht',
      capacity: '10 Guests',
      length: '60 feet',
      features: ['Classic sailing', 'Spacious cockpit', 'Traditional charm', 'Modern amenities'],
      description: 'Experience the romance of sailing with modern luxury and breathtaking harbour views.',
      image: yachtFleetImage,
      highlight: 'Romantic Option'
    },
    {
      name: 'Bridge Majesty',
      type: 'Super Yacht',
      capacity: '16 Guests',
      length: '80 feet',
      features: ['Multiple decks', 'Jacuzzi', 'Chef kitchen', 'Entertainment system'],
      description: 'Our largest vessel for grand celebrations and corporate events.',
      image: yachtInteriorImage,
      highlight: 'Ultimate Luxury'
    }
  ];

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
                  <img 
                    src={boat.image} 
                    alt={boat.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gold text-primary font-semibold">
                      {boat.highlight}
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

                  <Button className="w-full bg-primary hover:bg-primary-light text-primary-foreground font-semibold">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book This Vessel
                  </Button>
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
            Our experienced team can recommend the perfect vessel for your occasion
          </p>
          <Button className="bg-gold hover:bg-gold-light text-primary font-semibold px-8 py-3 text-lg">
            Speak with Our Team
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Fleet;