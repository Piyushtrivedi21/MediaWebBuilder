
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      variants={fadeIn()}
      className="bg-white/5 backdrop-blur-lg rounded-lg p-6 hover:bg-white/10 transition-colors"
    >
      {service.icon && (
        <div className="mb-4">
          {React.createElement(service.icon, { className: "w-8 h-8 text-[#2DD4BF]" })}
        </div>
      )}
      <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-300 mb-4">{service.description}</p>
      <ul className="text-gray-300 font-opensans space-y-2">
        {service.features?.slice(0, 3).map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <svg className="w-5 h-5 text-[#2DD4BF] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;
