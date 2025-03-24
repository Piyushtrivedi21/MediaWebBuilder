import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { fadeIn, slideInFromLeft } from '@/lib/animations';
import { scrollToElement } from '@/lib/utils';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(18,18,18,0.9)] via-[rgba(18,18,18,0.8)] to-[rgba(18,18,18,0.7)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft}
          className="max-w-3xl"
        >
          <motion.h1 
            variants={fadeIn(0.2)}
            className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white leading-tight mb-6"
          >
            Elevate Your Digital <span className="text-[#2DD4BF]">Presence</span>
          </motion.h1>
          <motion.p 
            variants={fadeIn(0.4)}
            className="text-lg md:text-xl text-gray-300 mb-8 font-opensans"
          >
            We craft innovative digital marketing strategies that drive growth, engagement, and conversion for forward-thinking businesses.
          </motion.p>
          <motion.div 
            variants={fadeIn(0.6)}
            className="flex flex-wrap gap-4"
          >
            <Link href="/services">
              <Button className="bg-[#2DD4BF] hover:bg-[#14b8a6] text-[#121212] px-8 py-3 h-auto rounded-md font-montserrat font-semibold transition-all duration-300">
                EXPLORE SERVICES
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" className="bg-transparent border-2 border-white hover:border-[#2DD4BF] hover:text-[#2DD4BF] text-white px-8 py-3 h-auto rounded-md font-montserrat font-semibold transition-all duration-300">
                VIEW OUR WORK
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.2,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button 
          onClick={() => scrollToElement('about')}
          className="text-white focus:outline-none"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
