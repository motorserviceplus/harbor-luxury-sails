import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Calendar, Anchor, Quote, ExternalLink, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import heroImage from '@/assets/hero-sydney-harbour.jpg';
import yachtFleetImage from '@/assets/yacht-fleet.jpg';
import yachtExperienceImage from '@/assets/yacht-experience.jpg';

const Index = () => {
  const testimonials = [
    {
      name: 'Sarah & James Wellington',
      occasion: 'Wedding Anniversary',
      text: 'Our 10th anniversary celebration aboard Harbour Princess was absolutely magical. The sunset views, impeccable service, and attention to detail made it unforgettable.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      occasion: 'Corporate Event', 
      text: 'Outstanding professionalism and luxury. Our international clients were thoroughly impressed with the quality of service and the stunning harbour experience.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      occasion: 'Birthday Celebration',
      text: 'From the moment we stepped aboard, everything was perfect. The crew anticipated our every need and the yacht exceeded all expectations.',
      rating: 5
    }
  ];

  const features = [
    {
      icon: <Anchor className="h-8 w-8 text-gold" />,
      title: 'Premium Fleet',
      description: 'Hand-selected luxury vessels maintained to the highest standards'
    },
    {
      icon: <Users className="h-8 w-8 text-gold" />,
      title: 'Expert Crew',
      description: 'Professional maritime team with unparalleled local knowledge'
    },
    {
      icon: <Calendar className="h-8 w-8 text-gold" />,
      title: 'Bespoke Service',
      description: 'Tailored experiences crafted for your special occasion'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <Badge className="bg-gold text-primary font-semibold mb-6 text-lg px-4 py-2">
            Sydney's Class Above Water
          </Badge>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Luxury Harbour<br />Experiences
          </h1>
          <p className="font-sans text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover Sydney Harbour aboard our exclusive fleet of premium vessels. 
            Create unforgettable memories with unparalleled luxury and service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-gold hover:bg-gold-light text-primary font-semibold px-8 py-4 text-lg"
            >
              <Link to="/contact">
                Enquire Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
            >
              <Link to="/fleet">
                View Fleet
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Choose Harbour Elite
            </h2>
            <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference that attention to detail and genuine passion make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Premium Fleet
            </h2>
            <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto">
              Each vessel carefully selected for luxury, comfort, and unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={yachtFleetImage} 
                alt="Luxury yacht fleet" 
                className="rounded-lg shadow-luxury"
              />
            </div>
            <div>
              <Badge className="bg-gold text-primary font-semibold mb-4">Fleet Highlights</Badge>
              <h3 className="font-serif text-3xl font-bold text-primary mb-6">
                Vessels Built for Luxury
              </h3>
              <div className="space-y-4 font-sans text-lg text-muted-foreground mb-8">
                <p>
                  From intimate 8-guest cruisers to our flagship 16-guest super yacht, 
                  every vessel in our fleet represents the pinnacle of maritime luxury.
                </p>
                <p>
                  Featuring premium amenities, professional crews, and immaculate 
                  presentation, our boats provide the perfect setting for your 
                  most important celebrations.
                </p>
              </div>
              <Button 
                asChild
                className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold"
              >
                <Link to="/fleet">
                  Explore Our Fleet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Guest Experiences
            </h2>
            <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from guests who have experienced the Harbour Elite difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <Quote className="h-8 w-8 text-gold" />
                  </div>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold fill-current" />
                    ))}
                  </div>
                  <p className="font-sans text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="text-center">
                    <div className="font-serif font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="font-sans text-sm text-muted-foreground">
                      {testimonial.occasion}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Follow Our Journey
            </h2>
            <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay connected with daily highlights from Sydney Harbour's most exclusive experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[yachtExperienceImage, heroImage, yachtFleetImage, yachtExperienceImage].map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <img 
                  src={image} 
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold">
              <ExternalLink className="w-5 h-5 mr-2" />
              @HarbourEliteSydney
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Your Luxury Experience Awaits
          </h2>
          <p className="font-sans text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today to begin planning your unforgettable Sydney Harbour celebration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-gold hover:bg-gold-light text-primary font-semibold px-8 py-4 text-lg"
            >
              <Link to="/contact">
                Start Planning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
            >
              <Link to="/packages">
                View Packages
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
