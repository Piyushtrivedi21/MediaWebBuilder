import React from 'react';
import { motion } from 'framer-motion';
import { Value } from '@/types';

interface ValueCardProps {
  value: Value;
  index: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ value, index }) => {
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
      className="bg-[#1A1A1A] p-8 rounded-lg transform transition-all duration-300 border-t-4 border-[#2DD4BF] shadow-lg"
    >
      <div className="text-[#2DD4BF] mb-4">
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d={value.icon} clipRule="evenodd"></path>
        </svg>
      </div>
      <h3 className="text-xl font-montserrat font-semibold text-white mb-4">{value.title}</h3>
      <p className="text-gray-300 font-opensans">
        {value.description}
      </p>
    </motion.div>
  );
};

export default ValueCard;
