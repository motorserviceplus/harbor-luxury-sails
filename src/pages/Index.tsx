import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Calendar, Anchor, Quote, ExternalLink, ArrowRight, Zap, Shield, Crown } from 'lucide-react';
import Navigation from '@/components/Navigation';
import heroImage from '@/assets/hero-sydney-harbour.jpg';
import yachtFleetImage from '@/assets/yacht-fleet.jpg';
import yachtExperienceImage from '@/assets/yacht-experience.jpg';

const Index = () => {
  const { t } = useTranslation();
  const testimonials = [
    {
      name: 'Sarah & James Wellington',
      occasion: 'Wedding Anniversary',
      text: 'Absolutely incredible experience. The modern luxury and attention to detail exceeded all expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      occasion: 'Corporate Event', 
      text: 'Next-level professionalism. Our clients were blown away by the sleek vessels and premium service.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      occasion: 'Birthday Celebration',
      text: 'Pure perfection from start to finish. The crew made everything seamless and unforgettable.',
      rating: 5
    }
  ];

  const features = [
    {
      icon: <Crown className="h-10 w-10 text-electric" />,
      title: t('home.features.luxury.title'),
      description: t('home.features.luxury.description')
    },
    {
      icon: <Shield className="h-10 w-10 text-electric" />,
      title: t('home.features.service.title'),
      description: t('home.features.service.description')
    },
    {
      icon: <Zap className="h-10 w-10 text-electric" />,
      title: t('home.features.experience.title'),
      description: t('home.features.experience.description')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Full Modern with Animated Gradient */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-mesh"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative z-10 text-center text-foreground px-4 max-w-6xl mx-auto">
          <div className="animate-float">
            <Badge className="bg-electric/20 text-electric border border-electric/30 font-medium mb-8 text-lg px-6 py-3 backdrop-blur-sm">
              Sydney's Most Advanced Fleet
            </Badge>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-8 leading-tight text-glow">
            {t('home.hero.title')}
          </h1>
          
          <p className="font-sans text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
            {t('home.hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild
              className="gradient-electric hover-glow text-background font-semibold px-10 py-6 text-lg h-auto animate-glow-pulse"
            >
              <Link to="/contact">
                Let's Talk
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-2 border-electric/50 text-electric hover:bg-electric/10 hover:border-electric font-semibold px-10 py-6 text-lg h-auto backdrop-blur-sm"
            >
              <Link to="/fleet">
                View Fleet
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-20 h-20 border border-electric/30 rotate-45 animate-float"></div>
        <div className="absolute bottom-32 right-32 w-16 h-16 bg-electric/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-20 w-12 h-12 border border-electric/40 animate-float" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* Features Section - Glass Morphism */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              {t('home.features.title')}
            </h2>
            <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference that modern luxury and innovation make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-morphism hover-glow text-center group cursor-pointer border-0">
                <CardContent className="p-10">
                  <div className="flex justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Preview - Keep but modernize */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              {t('home.fleet.title')}
            </h2>
            <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('home.fleet.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={yachtFleetImage} 
                alt="Elite yacht fleet" 
                className="rounded-2xl shadow-glass"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl"></div>
            </div>
            <div>
              <Badge className="bg-electric/20 text-electric border border-electric/30 font-medium mb-6 backdrop-blur-sm">
                Fleet Highlights
              </Badge>
              <h3 className="font-display text-4xl font-bold text-foreground mb-8">
                Built for Modern Luxury
              </h3>
              <div className="space-y-6 font-sans text-lg text-muted-foreground mb-10">
                <p>
                  From sleek 8-guest cruisers to our flagship 80-guest super yacht, 
                  every vessel represents the cutting edge of maritime luxury and technology.
                </p>
                <p>
                  Premium amenities, professional crews, and immaculate presentation 
                  create the perfect setting for your most important celebrations.
                </p>
              </div>
              <Button 
                asChild
                className="gradient-electric hover-glow text-background font-semibold px-8 py-4 text-lg h-auto"
              >
                <Link to="/fleet">
                  {t('home.fleet.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Glass Cards */}
      <section className="py-32 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Guest <span className="text-electric">Experiences</span>
            </h2>
            <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from guests who've experienced the Elite difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-morphism hover-glow border-0 group">
                <CardContent className="p-10">
                  <div className="flex justify-center mb-6">
                    <Quote className="h-10 w-10 text-electric group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-electric fill-current" />
                    ))}
                  </div>
                  <p className="font-sans text-muted-foreground mb-8 italic text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="text-center">
                    <div className="font-display font-semibold text-foreground text-lg">
                      {testimonial.name}
                    </div>
                    <div className="font-sans text-sm text-electric">
                      {testimonial.occasion}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed - Modern Grid */}
      <section className="py-32 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Follow Our <span className="text-electric">Journey</span>
            </h2>
            <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto">
              Daily highlights from Sydney's most exclusive harbour experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[yachtExperienceImage, heroImage, yachtFleetImage, yachtExperienceImage].map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-2xl group cursor-pointer relative">
                <img 
                  src={image} 
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-electric/0 group-hover:bg-electric/20 transition-colors duration-300 rounded-2xl"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="gradient-electric hover-glow text-background font-semibold px-8 py-4 text-lg h-auto">
              <ExternalLink className="w-5 h-5 mr-2" />
              @HarbourEliteSydney
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - Electric Gradient */}
      <section className="py-32 gradient-electric text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-background mb-8">
            {t('home.cta.title')}
          </h2>
          <p className="font-sans text-xl text-background/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild
              className="bg-background hover:bg-background/90 text-electric font-semibold px-10 py-6 text-lg h-auto shadow-glow"
            >
              <Link to="/contact">
                {t('home.cta.button')}
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-2 border-background/50 text-background hover:bg-background/10 hover:border-background font-semibold px-10 py-6 text-lg h-auto backdrop-blur-sm"
            >
              <Link to="/packages">
                View Packages
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Background geometric elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-background/30 rotate-45 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-background/20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </section>
    </div>
  );
};

export default Index;
