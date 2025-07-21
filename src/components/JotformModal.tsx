
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface JotformModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBoat?: string;
}

const JotformModal: React.FC<JotformModalProps> = ({ isOpen, onClose, selectedBoat }) => {
  const isMobile = useIsMobile();
  
  // Construct the Jotform URL with pre-selected boat
  const getJotformUrl = () => {
    const baseUrl = 'https://form.jotform.com/252008164262045';
    if (selectedBoat) {
      const encodedBoat = encodeURIComponent(selectedBoat);
      return `${baseUrl}?selectPreferredVessel=${encodedBoat}`;
    }
    return baseUrl;
  };

  const jotformUrl = getJotformUrl();

  const JotformContent = () => (
    <div className="w-full h-full">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold text-primary mb-2">
            Get Your Instant Quote
          </h2>
          {selectedBoat && (
            <p className="text-sm text-muted-foreground">
              Pre-selected vessel: <span className="font-medium text-primary">{selectedBoat}</span>
            </p>
          )}
        </div>
      </div>
      
      <div className="relative w-full" style={{ height: isMobile ? '70vh' : '600px' }}>
        <iframe
          src={jotformUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="auto"
          title="Boat Charter Quote Request"
          className="border border-border rounded-lg"
          onLoad={() => {
            // Optional: Add any loading completion logic here
            console.log('Jotform loaded successfully');
          }}
        />
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent 
          side="bottom" 
          className="max-h-[95vh] overflow-y-auto p-4 rounded-t-xl"
        >
          <SheetHeader className="mb-4">
            <SheetTitle className="sr-only">Instant Quote Request</SheetTitle>
          </SheetHeader>
          <JotformContent />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle className="sr-only">Instant Quote Request</DialogTitle>
        </DialogHeader>
        <JotformContent />
      </DialogContent>
    </Dialog>
  );
};

export default JotformModal;
