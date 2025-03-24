import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { SiGoogle, SiAdobe, SiAmazon, SiApple, SiNetflix } from 'react-icons/si';

const ClientsSection: React.FC = () => {
  const clients = [
    { id: 1, Icon: SiGoogle, name: 'Google' },
    { id: 2, Icon: SiAdobe, name: 'Adobe' },
    { id: 3, Icon: SiAmazon, name: 'Amazon' },
    { id: 4, Icon: SiApple, name: 'Apple' },
    { id: 5, Icon: SiNetflix, name: 'Netflix' },
  ];

  return (
    <section className="py-16 bg-[#1A1A1A]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Trusted by Industry Leaders"
          center={true}
        />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {clients.map((client) => (
            <motion.div 
              key={client.id}
              variants={fadeIn()}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <client.Icon className="h-10 w-auto text-white" title={client.name} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
