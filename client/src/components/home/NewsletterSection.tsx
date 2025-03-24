import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { fadeIn } from '@/lib/animations';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-[#121212]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn()}
          className="bg-gradient-to-r from-[#2DD4BF]/20 to-[#38bdf8]/20 p-8 md:p-12 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[#1A1A1A] opacity-50"></div>
          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-300 font-opensans mb-8">
                Stay updated with the latest trends and insights in digital marketing. Subscribe to our newsletter for valuable content delivered straight to your inbox.
              </p>
              <form 
                className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
                onSubmit={handleSubmit}
              >
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md px-4 py-3 focus:outline-none focus:border-[#2DD4BF] transition-colors duration-300"
                />
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#2DD4BF] hover:bg-[#14b8a6] text-[#121212] px-6 py-3 h-auto rounded-md font-montserrat font-semibold transition-all duration-300 whitespace-nowrap"
                >
                  {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
                </Button>
              </form>
              <p className="text-gray-400 text-sm mt-4 font-opensans">
                By subscribing, you agree to our Privacy Policy. We respect your privacy and will never share your information.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
