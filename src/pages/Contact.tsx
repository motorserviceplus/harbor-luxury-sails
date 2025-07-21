import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Send, Star, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import JotformModal from '@/components/JotformModal';

const Contact = () => {
  const { toast } = useToast();
  const [isJotformOpen, setIsJotformOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    occasion: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted",
      description: "Thank you for your interest! We'll contact you within 2 hours to discuss your luxury harbour experience.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      occasion: '',
      guests: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInstantQuote = () => {
    setIsJotformOpen(true);
  };

  const occasions = [
    'Wedding Celebration',
    'Corporate Event',
    'Birthday Party',
    'Anniversary',
    'Proposal',
    'Family Gathering',
    'Holiday Celebration',
    'Other'
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-gold" />,
      title: 'Phone',
      detail: '+61 2 9555 0123',
      subtitle: 'Available 7 days a week'
    },
    {
      icon: <Mail className="h-6 w-6 text-gold" />,
      title: 'Email',
      detail: 'bookings@harbourelite.com.au',
      subtitle: 'Response within 2 hours'
    },
    {
      icon: <MapPin className="h-6 w-6 text-gold" />,
      title: 'Marina',
      detail: 'King Street Wharf',
      subtitle: 'Darling Harbour, Sydney'
    },
    {
      icon: <Clock className="h-6 w-6 text-gold" />,
      title: 'Operating Hours',
      detail: '7:00 AM - 10:00 PM',
      subtitle: 'Daily luxury charters'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            Contact Us
          </h1>
          <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to create unforgettable memories on Sydney Harbour? 
            Let's discuss your perfect luxury charter experience.
          </p>
        </div>
      </section>

      {/* Quick Action Buttons */}
      <section className="pb-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Button 
              onClick={handleInstantQuote}
              className="bg-gradient-to-r from-gold-dark to-gold hover:from-gold to-gold-light text-primary font-semibold py-4 text-lg h-auto"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Instant Quote
            </Button>
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 font-semibold py-4 text-lg h-auto"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Send className="w-5 h-5 mr-2" />
              Detailed Enquiry
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-luxury" id="contact-form">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-8">
                    <Star className="h-6 w-6 text-gold" />
                    <h2 className="font-serif text-3xl font-bold text-primary">
                      Book Your Luxury Experience
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-sans font-medium text-primary">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="border-border focus:border-gold"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-sans font-medium text-primary">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="border-border focus:border-gold"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-sans font-medium text-primary">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="border-border focus:border-gold"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="date" className="font-sans font-medium text-primary">
                          Preferred Date
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleInputChange('date', e.target.value)}
                          className="border-border focus:border-gold"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="font-sans font-medium text-primary">
                          Occasion Type
                        </Label>
                        <Select value={formData.occasion} onValueChange={(value) => handleInputChange('occasion', value)}>
                          <SelectTrigger className="border-border focus:border-gold">
                            <SelectValue placeholder="Select occasion" />
                          </SelectTrigger>
                          <SelectContent>
                            {occasions.map((occasion) => (
                              <SelectItem key={occasion} value={occasion}>
                                {occasion}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="font-sans font-medium text-primary">
                          Number of Guests
                        </Label>
                        <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                          <SelectTrigger className="border-border focus:border-gold">
                            <SelectValue placeholder="Select group size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2-4">2-4 guests</SelectItem>
                            <SelectItem value="5-8">5-8 guests</SelectItem>
                            <SelectItem value="9-12">9-12 guests</SelectItem>
                            <SelectItem value="13-16">13-16 guests</SelectItem>
                            <SelectItem value="16+">16+ guests</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-sans font-medium text-primary">
                        Special Requests or Additional Information
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="border-border focus:border-gold min-h-[120px]"
                        placeholder="Tell us about your vision for this special occasion..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-gold-dark to-gold hover:from-gold to-gold-light text-primary font-semibold py-3 text-lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Submit Enquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-luxury transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-sans font-semibold text-primary mb-1">
                          {info.title}
                        </h3>
                        <p className="font-sans font-medium text-foreground mb-1">
                          {info.detail}
                        </p>
                        <p className="font-sans text-sm text-muted-foreground">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to help you plan your perfect harbour experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-sans font-semibold text-primary mb-3">
                  How far in advance should I book?
                </h3>
                <p className="font-sans text-muted-foreground">
                  We recommend booking 2-4 weeks in advance for optimal vessel selection, 
                  especially during peak seasons and weekends.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-sans font-semibold text-primary mb-3">
                  What's included in the charter price?
                </h3>
                <p className="font-sans text-muted-foreground">
                  All charters include professional crew, fuel, safety equipment, 
                  and basic beverages. Catering and premium services are available.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-sans font-semibold text-primary mb-3">
                  Can I bring my own food and drinks?
                </h3>
                <p className="font-sans text-muted-foreground">
                  Yes! We welcome BYO options and can provide serving equipment, 
                  ice, and glassware to enhance your experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-sans font-semibold text-primary mb-3">
                  What happens in bad weather?
                </h3>
                <p className="font-sans text-muted-foreground">
                  We monitor weather closely and offer flexible rescheduling options. 
                  Your safety and enjoyment are our top priorities.
                </p>
              </CardContent>
            </Card>
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
            Join us for an unforgettable journey across Sydney's most beautiful waters
          </p>
          <Button className="bg-gold hover:bg-gold-light text-primary font-semibold px-8 py-3 text-lg">
            Call Now: +61 2 9555 0123
          </Button>
        </div>
      </section>

      {/* Jotform Modal */}
      <JotformModal 
        isOpen={isJotformOpen}
        onClose={() => setIsJotformOpen(false)}
      />
    </div>
  );
};

export default Contact;
