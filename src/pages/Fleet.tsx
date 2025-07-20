
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Users, Waves, DollarSign, MessageCircle, Eye } from 'lucide-react';
import { Bath, Utensils, Sparkles, Bed, Music, Star } from 'lucide-react';
import BoatDetailsModal from '@/components/BoatDetailsModal';
import sevenStarMain from '@/assets/seven-star-main.jpg';
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
import yachtInteriorImage from '@/assets/yacht-interior.jpg';

const Fleet = () => {
  const [selectedBoat, setSelectedBoat] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        'Apr-Sep': '$2,000/hr',
        'Jan-Mar & Oct': '$2,250/hr', 
        'Nov-Dec': '$2,500/hr'
      },
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
    },
    {
      name: 'Privacy',
      type: 'Performance Luxury Yacht',
      capacity: '1-36 Guests',
      length: '87 feet',
      hourlyRate: '$1650/hr',
      images: [
        yachtInteriorImage,
        'https://images.unsplash.com/photo-1593113616828-6f22bdd62e63?w=800&q=80',
        'https://images.unsplash.com/photo-1541013064736-c026a50b4269?w=800&q=80',
        'https://images.unsplash.com/photo-1567449303183-8a5aa7c62fdb?w=800&q=80',
      ],
      highlight: 'Performance Choice'
    }
  ];

  const handleWhatsAppBooking = (boatName: string) => {
    const message = `Hi! I'm interested in booking the ${boatName} for a charter. Could you please provide more details about availability and packages?`;
    const phoneNumber = '61400000000';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleViewDetails = (boat: any) => {
    setSelectedBoat(boat);
    setIsModalOpen(true);
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

      {/* Enhanced Fleet Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {boats.map((boat, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-luxury transition-all duration-300">
                <div className="relative">
                  <img 
                    src={boat.images[0]} 
                    alt={boat.name}
                    className="w-full h-64 object-cover"
                  />
                  
                  {boat.highlight && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gold text-primary font-semibold">
                        {boat.highlight}
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90 text-primary-foreground font-semibold">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {boat.hourlyRate}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl font-semibold text-primary mb-2">
                      {boat.name}
                    </h3>
                    <p className="font-sans text-muted-foreground mb-1">{boat.type}</p>
                    <p className="font-sans text-sm text-muted-foreground">Hire in Sydney</p>
                  </div>

                  <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="flex items-center space-x-3">
                      <Users className="h-6 w-6 text-gold" />
                      <span className="font-sans text-sm text-muted-foreground">{boat.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Waves className="h-6 w-6 text-gold" />
                      <span className="font-sans text-sm text-muted-foreground">{boat.length}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-6 w-6 text-gold" />
                      <span className="font-sans text-sm text-muted-foreground">From {boat.hourlyRate.replace('From ', '')}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold h-12"
                      onClick={() => handleWhatsAppBooking(boat.name)}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Book by WhatsApp
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary/5 font-semibold h-12"
                      onClick={() => handleViewDetails(boat)}
                    >
                      <Eye className="w-5 h-5 mr-2" />
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

      {/* Modal */}
      <BoatDetailsModal 
        boat={selectedBoat}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Fleet;
