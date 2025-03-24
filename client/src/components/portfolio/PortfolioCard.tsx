import React from 'react';
import { motion } from 'framer-motion';
import { PortfolioItem } from '@/types';
import { ChevronRight } from 'lucide-react';

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300"
    >
      <img 
        src={item.image} 
        alt={item.title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 p-6">
        <span className="inline-block px-3 py-1 bg-[#2DD4BF] text-[#121212] text-xs font-montserrat font-semibold rounded-full mb-3">
          {item.category}
        </span>
        <h3 className="text-xl font-montserrat font-bold text-white mb-2">{item.title}</h3>
        <p className="text-gray-300 font-opensans mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {item.description}
        </p>
        <a 
          href="#" 
          className="inline-flex items-center text-[#2DD4BF] hover:text-[#14b8a6] font-montserrat font-medium transition-colors duration-300"
        >
          View case study
          <ChevronRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
