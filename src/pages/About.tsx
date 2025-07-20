import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Users, Heart, Shield, Star, Anchor } from 'lucide-react';
import yachtExperienceImage from '@/assets/yacht-experience.jpg';
import heroImage from '@/assets/hero-sydney-harbour.jpg';

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-gold" />,
      title: 'Excellence',
      description: 'Uncompromising commitment to luxury and quality in every detail'
    },
    {
      icon: <Heart className="h-8 w-8 text-gold" />,
      title: 'Passion',
      description: 'Genuine love for Sydney Harbour and creating magical experiences'
    },
    {
      icon: <Shield className="h-8 w-8 text-gold" />,
      title: 'Safety',
      description: 'Highest maritime safety standards with certified professional crew'
    },
    {
      icon: <Users className="h-8 w-8 text-gold" />,
      title: 'Service',
      description: 'Personalized attention that exceeds expectations every time'
    }
  ];

  const team = [
    {
      name: 'Captain James Mitchell',
      role: 'Founder & Master Mariner',
      experience: '25+ years',
      description: 'Master of the harbour with unparalleled local knowledge and passion for luxury yachting.'
    },
    {
      name: 'Sarah Chen',
      role: 'Guest Experience Director',
      experience: '15+ years',
      description: 'Hospitality expert ensuring every detail creates unforgettable memories.'
    },
    {
      name: 'Michael Torres',
      role: 'Fleet Operations Manager',
      experience: '20+ years',
      description: 'Ensuring our vessels maintain the highest standards of luxury and safety.'
    }
  ];

  const achievements = [
    { metric: '10+', label: 'Years of Excellence' },
    { metric: '5000+', label: 'Happy Guests' },
    { metric: '4', label: 'Luxury Vessels' },
    { metric: '99%', label: 'Guest Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            About Harbour Elite
          </h1>
          <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto">
            Sydney's Class Above Water
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-gold text-primary font-semibold mb-4">Our Story</Badge>
              <h2 className="font-serif text-4xl font-bold text-primary mb-6">
                Born from a Love of the Harbour
              </h2>
              <div className="space-y-4 font-sans text-lg text-muted-foreground">
                <p>
                  Founded in 2014 by Captain James Mitchell, Harbour Elite emerged from a simple yet 
                  profound vision: to share the unparalleled beauty of Sydney Harbour through 
                  exceptional luxury experiences.
                </p>
                <p>
                  With over 25 years navigating these pristine waters, Captain Mitchell understood 
                  that Sydney Harbour deserved a yacht charter service that matched its natural 
                  grandeur. Every vessel, every service, and every moment is crafted to honor the 
                  majesty of one of the world's most beautiful harbours.
                </p>
                <p>
                  Today, we continue this mission with an unwavering commitment to excellence, 
                  creating memories that last a lifetime for discerning guests who appreciate 
                  the finer things in life.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={yachtExperienceImage} 
                alt="Harbour Elite experience" 
                className="rounded-lg shadow-luxury"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg text-primary-foreground">
                <Anchor className="h-8 w-8 mb-2" />
                <div className="font-serif text-xl font-bold">Est. 2014</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every aspect of your luxury harbour experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="font-sans text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              Meet Our Team
            </h2>
            <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals dedicated to delivering extraordinary experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                    {member.name}
                  </h3>
                  <Badge className="bg-gold text-primary font-medium mb-3">
                    {member.role}
                  </Badge>
                  <p className="font-sans text-sm text-muted-foreground mb-3">
                    {member.experience} maritime experience
                  </p>
                  <p className="font-sans text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary-foreground mb-4">
              A Legacy of Excellence
            </h2>
            <p className="font-sans text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Numbers that reflect our commitment to exceptional service
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2">
                  {achievement.metric}
                </div>
                <div className="font-sans text-primary-foreground/90">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <Badge className="bg-gold text-primary font-semibold mb-4">Our Mission</Badge>
              <h2 className="font-serif text-4xl font-bold text-primary mb-6">
                Creating Unforgettable Harbour Memories
              </h2>
              <div className="space-y-4 font-sans text-lg text-muted-foreground">
                <p>
                  We believe that Sydney Harbour is more than just a destination—it's a canvas 
                  for life's most precious moments. Our mission is to provide the luxury platform 
                  where these moments can unfold naturally and beautifully.
                </p>
                <p>
                  From intimate proposals against the backdrop of the Opera House to grand 
                  corporate celebrations under the Harbour Bridge, we create the perfect 
                  setting for life's milestones.
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-8">
                <Star className="h-6 w-6 text-gold" />
                <span className="font-sans text-primary font-semibold">
                  "Sydney's Class Above Water"
                </span>
              </div>
            </div>
            <div className="lg:order-1">
              <img 
                src={heroImage} 
                alt="Sydney Harbour mission" 
                className="rounded-lg shadow-luxury"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-primary mb-6">
            Experience the Harbour Elite Difference
          </h2>
          <p className="font-sans text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover why discerning guests choose us for their most important celebrations
          </p>
          <Button className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold px-8 py-3 text-lg">
            Start Your Journey
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;