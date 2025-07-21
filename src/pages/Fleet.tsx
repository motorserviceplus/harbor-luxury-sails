
import React, { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Users, Waves, DollarSign, Eye } from 'lucide-react';
import { Bath, Utensils, Sparkles, Bed, Music, Star, Wind } from 'lucide-react';
import BoatDetailsModal from '@/components/BoatDetailsModal';
import JotformModal from '@/components/JotformModal';
import sevenStarMain from '@/assets/seven-star-1.jpg';
import sevenStar1 from '@/assets/seven-star-1.jpg';
import sevenStar4 from '@/assets/seven-star-4.jpg';
import sevenStar5 from '@/assets/seven-star-5.jpg';
import sevenStar6 from '@/assets/seven-star-6.jpg';
import sevenStar7 from '@/assets/seven-star-7.jpg';
import sevenStar9 from '@/assets/seven-star-9.jpg';
import sevenStar12 from '@/assets/seven-star-12.jpg';
import sevenStar16 from '@/assets/seven-star-16.jpg';
import sevenStar19 from '@/assets/seven-star-19.jpg';
import sevenStar21 from '@/assets/seven-star-21.jpg';

const Fleet = () => {
  const [selectedBoat, setSelectedBoat] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isJotformOpen, setIsJotformOpen] = useState(false);


  const boats = [
    {
      name: 'Seven Star',
      type: '98ft Azimut Superyacht',
      capacity: '1-80 Guests',
      length: '98 feet',
      make: 'Azimut',
      model: '98',
      hourlyRate: 'From $2,000/hr',
      seasonalPricing: {
        'Apr-Sep': 'From $2,000/hr',
        'Jan-Mar & Oct': 'From $2,250/hr', 
        'Nov-Dec': 'From $2,500/hr'
      },
      description: 'A striking 98ft Azimut superyacht, Seven Star is one of the most iconic private charters on Sydney Harbour. With capacity for up to 80 guests, it features luxurious finishes, indoor and outdoor entertaining spaces, and a full-service crew. Perfect for weddings, VIP parties, or corporate events. Enjoy its rooftop entertaining area, jacuzzi, dance floor, and more.',
      images: [
        sevenStarMain,
        sevenStar1,
        sevenStar4,
        sevenStar5,
        sevenStar6,
        sevenStar7,
        sevenStar9,
        sevenStar12,
        sevenStar16,
        sevenStar19,
        sevenStar21
      ],
      highlight: 'Most Popular',
      amenities: [
        { name: 'Shower', icon: Bath },
        { name: 'Toilets', icon: Bath },
        { name: 'Fridge', icon: Utensils },
        { name: 'Ensuite', icon: Bath },
        { name: 'Air Conditioning', icon: Sparkles },
        { name: 'Bedrooms (3)', icon: Bed },
        { name: 'Dance Floor', icon: Music },
        { name: 'Underwater Lights', icon: Sparkles },
        { name: 'Rooftop Entertaining Area', icon: Star },
        { name: 'Bar', icon: Utensils },
        { name: 'Jacuzzi', icon: Sparkles },
        { name: 'TV', icon: Music },
        { name: 'iPod Docking', icon: Music },
        { name: 'Speakers', icon: Music },
        { name: 'Cups & Ice', icon: Utensils },
        { name: 'BYO Friendly', icon: Utensils },
        { name: 'Front Sunbeds', icon: Star }
      ],
      recreationExtras: [
        'Food & Catering',
        'DJ',
        'Live Bands', 
        'Paddleboards',
        'Magicians',
        'Waterslide',
        'Drinks Packages'
      ],
      specifications: {
        bathrooms: 3,
        bedrooms: 3,
        fuel: 'Included',
        crew: 'Captain & Crew Included'
      }
    }
  ];

  const handleViewDetails = (boat: any) => {
    setSelectedBoat(boat);
    setIsModalOpen(true);
  };

  const handleInstantQuote = () => {
    setIsJotformOpen(true);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Image failed to load:', e.currentTarget.src);
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log('Image loaded successfully:', e.currentTarget.src);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            Premium Fleet
          </h1>
          <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto">
            Each vessel in our exclusive collection has been carefully selected to provide 
            the ultimate in luxury, comfort, and Sydney Harbour experiences.
          </p>
        </div>
      </section>

      {/* Enhanced Fleet Grid */}
      <section className="pb-20 px-1 md:px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {boats.map((boat, index) => (
              <Card key={index} className="overflow-hidden group shadow-md hover:shadow-luxury transition-all duration-300">
                <div className="relative">
                  <img 
                    src={boat.images[0]} 
                    alt={boat.name}
                    className="w-full h-56 md:h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity duration-200"
                    onClick={() => handleViewDetails(boat)}
                    onError={handleImageError}
                    onLoad={handleImageLoad}
                  />
                  
                  {boat.highlight && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gold text-primary font-semibold">
                        {boat.highlight}
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-3 md:p-6">
                  <div className="mb-3 md:mb-4">
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-primary mb-2">
                      {boat.name}
                    </h3>
                    <p className="font-sans text-muted-foreground mb-1">{boat.type}</p>
                    <p className="font-sans text-sm text-muted-foreground">Hire in Sydney</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 md:gap-6 mb-4">
                    <div className="flex items-center space-x-1 md:space-x-3">
                      <Users className="h-5 w-5 md:h-6 md:w-6 text-gold flex-shrink-0" />
                      <span className="font-sans text-sm md:text-base text-muted-foreground leading-tight">{boat.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-1 md:space-x-3">
                      <Waves className="h-5 w-5 md:h-6 md:w-6 text-gold flex-shrink-0" />
                      <span className="font-sans text-sm md:text-base text-muted-foreground leading-tight">{boat.length}</span>
                    </div>
                    <div className="flex items-center space-x-1 md:space-x-3">
                      <DollarSign className="h-5 w-5 md:h-6 md:w-6 text-gold flex-shrink-0" />
                      <span className="font-sans text-base md:text-lg font-bold text-primary leading-tight">{boat.hourlyRate}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary/5 font-semibold h-10 md:h-12"
                      onClick={() => handleViewDetails(boat)}
                    >
                      <Eye className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      View Details
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
            Ready to Set Sail?
          </h2>
          <p className="font-sans text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get an instant quote for your perfect Sydney Harbour experience. Choose your vessel and let us create an unforgettable journey.
          </p>
          <Button 
            onClick={handleInstantQuote}
            className="bg-gold hover:bg-gold-light text-primary font-semibold px-8 py-3 text-lg"
          >
            Get Instant Quote
          </Button>
        </div>
      </section>

      {/* Modals */}
      <BoatDetailsModal 
        boat={selectedBoat}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      
      <JotformModal 
        isOpen={isJotformOpen}
        onClose={() => setIsJotformOpen(false)}
      />
    </div>
  );
};

export default Fleet;
