import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Wine, Utensils, Check } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: 'Harbour Escape',
      duration: '2 Hours',
      price: 'From $2,200',
      capacity: 'Up to 8 guests',
      description: 'Perfect for intimate celebrations and sunset cruises',
      inclusions: [
        'Premium vessel with skipper',
        'Welcome champagne service',
        'Gourmet canapé selection',
        'Complimentary soft drinks',
        'Bluetooth sound system',
        'Harbour commentary'
      ],
      popular: false,
      color: 'primary'
    },
    {
      name: 'Premium Experience',
      duration: '4 Hours',
      price: 'From $4,800',
      capacity: 'Up to 12 guests',
      description: 'Our most popular package for special occasions',
      inclusions: [
        'Luxury yacht with professional crew',
        'Premium beverage package',
        'Three-course gourmet dining',
        'BYO alcohol welcome',
        'Water activities equipment',
        'Professional photography',
        'Custom itinerary planning'
      ],
      popular: true,
      color: 'gold'
    },
    {
      name: 'Full Day Charter',
      duration: '8 Hours',
      price: 'From $9,500',
      capacity: 'Up to 16 guests',
      description: 'Ultimate luxury experience for unforgettable events',
      inclusions: [
        'Super yacht with dedicated crew',
        'All-inclusive premium dining',
        'Top-shelf beverage service',
        'Multiple harbour destinations',
        'Swimming and snorkeling gear',
        'Jet ski hire available',
        'Personal event coordinator',
        'Sunset dinner service'
      ],
      popular: false,
      color: 'secondary'
    }
  ];

  const addOns = [
    { name: 'Professional Photography', price: '$450' },
    { name: 'Live Music Performance', price: '$850' },
    { name: 'Floral Arrangements', price: '$320' },
    { name: 'Custom Cake Service', price: '$180' },
    { name: 'Jet Ski Hire (per hour)', price: '$280' },
    { name: 'Extended BYO Service', price: '$150' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            Luxury Packages
          </h1>
          <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto">
            Carefully curated experiences designed to create unforgettable moments 
            on Sydney's most beautiful harbour.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden hover:shadow-luxury transition-all duration-300 ${
                  pkg.popular ? 'border-gold border-2 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <Badge className="bg-gold text-primary font-semibold px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="font-serif text-2xl font-semibold text-primary mb-2">
                      {pkg.name}
                    </h3>
                    <div className="font-serif text-4xl font-bold text-gold mb-2">
                      {pkg.price}
                    </div>
                    <p className="font-sans text-muted-foreground">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-gold" />
                        <span className="font-sans font-medium">Duration</span>
                      </div>
                      <span className="font-sans text-primary font-semibold">{pkg.duration}</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-gold" />
                        <span className="font-sans font-medium">Capacity</span>
                      </div>
                      <span className="font-sans text-primary font-semibold">{pkg.capacity}</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-sans font-semibold text-primary mb-4 flex items-center">
                      <Wine className="h-5 w-5 text-gold mr-2" />
                      Package Inclusions
                    </h4>
                    <ul className="space-y-2">
                      {pkg.inclusions.map((inclusion, inclusionIndex) => (
                        <li key={inclusionIndex} className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                          <span className="font-sans text-sm text-muted-foreground">{inclusion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className={`w-full font-semibold ${
                      pkg.popular 
                        ? 'bg-gold hover:bg-gold-light text-primary' 
                        : 'bg-primary hover:bg-primary-light text-primary-foreground'
                    }`}
                  >
                    Select Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              Enhance Your Experience
            </h2>
            <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto">
              Customize your charter with our premium add-on services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-gold transition-colors">
                <div className="flex items-center space-x-3">
                  <Utensils className="h-5 w-5 text-gold" />
                  <span className="font-sans font-medium text-foreground">{addon.name}</span>
                </div>
                <span className="font-sans font-semibold text-primary">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-primary-foreground mb-6">
            Ready to Book Your Experience?
          </h2>
          <p className="font-sans text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote and to customize your perfect Sydney Harbour experience
          </p>
          <Button className="bg-gold hover:bg-gold-light text-primary font-semibold px-8 py-3 text-lg">
            Get Custom Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Packages;