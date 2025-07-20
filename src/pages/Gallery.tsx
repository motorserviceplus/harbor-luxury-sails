import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, X, ExternalLink } from 'lucide-react';
import heroImage from '@/assets/hero-sydney-harbour.jpg';
import yachtFleetImage from '@/assets/yacht-fleet.jpg';
import yachtExperienceImage from '@/assets/yacht-experience.jpg';
import yachtInteriorImage from '@/assets/yacht-interior.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      type: 'image',
      src: heroImage,
      title: 'Sydney Harbour at Golden Hour',
      category: 'Scenic Views'
    },
    {
      type: 'image',
      src: yachtExperienceImage,
      title: 'Champagne Celebration',
      category: 'Experiences'
    },
    {
      type: 'image',
      src: yachtFleetImage,
      title: 'Premium Fleet',
      category: 'Our Vessels'
    },
    {
      type: 'image',
      src: yachtInteriorImage,
      title: 'Luxury Interior',
      category: 'Our Vessels'
    },
    {
      type: 'video',
      src: heroImage, // Placeholder for video thumbnail
      title: 'Harbour Experience Video',
      category: 'Video Tours'
    },
    {
      type: 'image',
      src: yachtExperienceImage,
      title: 'Corporate Events',
      category: 'Events'
    },
    {
      type: 'image',
      src: heroImage,
      title: 'Sunset Sailing',
      category: 'Scenic Views'
    },
    {
      type: 'image',
      src: yachtInteriorImage,
      title: 'Fine Dining',
      category: 'Experiences'
    },
    {
      type: 'image',
      src: yachtFleetImage,
      title: 'Wedding Celebrations',
      category: 'Events'
    }
  ];

  const categories = ['All', 'Scenic Views', 'Experiences', 'Our Vessels', 'Events', 'Video Tours'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            Gallery
          </h1>
          <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the magic of Sydney Harbour through our collection of stunning imagery 
            and unforgettable moments captured aboard our luxury vessels.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`font-sans ${
                  activeCategory === category
                    ? 'bg-primary hover:bg-primary-light text-primary-foreground'
                    : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg bg-card hover:shadow-luxury transition-all duration-300"
                onClick={() => setSelectedImage(item.src)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Badge className="bg-gold text-primary font-medium mb-2">
                      {item.category}
                    </Badge>
                    <h3 className="font-serif text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Video Play Button */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-gold transition-colors">
                      <Play className="w-6 h-6 text-primary ml-1" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-primary mb-6">
            Follow Our Journey
          </h2>
          <p className="font-sans text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay connected with daily highlights from Sydney Harbour's most exclusive experiences
          </p>
          <Button className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold px-8 py-3">
            <ExternalLink className="w-5 h-5 mr-2" />
            @HarbourEliteSydney
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-primary-foreground mb-6">
            Create Your Own Memories
          </h2>
          <p className="font-sans text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join the exclusive collection of guests who have experienced Sydney Harbour in ultimate luxury
          </p>
          <Button className="bg-gold hover:bg-gold-light text-primary font-semibold px-8 py-3 text-lg">
            Book Your Experience
          </Button>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gold transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;