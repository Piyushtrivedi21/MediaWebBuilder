import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Service } from '@/types';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
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
      className="service-card bg-[#121212] p-8 rounded-lg border border-[#2A2A2A] transition-all duration-500 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-[#2DD4BF]/5 transform scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left z-[-1]"></div>
      <div className="text-[#2DD4BF] mb-6">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d={service.icon}></path>
        </svg>
      </div>
      <h3 className="text-xl font-montserrat font-semibold text-white mb-4">{service.title}</h3>
      <p className="text-gray-300 font-opensans mb-6">
        {service.description}
      </p>
      <ul className="text-gray-300 font-opensans space-y-2 mb-6">
        {service.features.slice(0, 3).map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <svg className="w-5 h-5 text-[#2DD4BF] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link href={`/services/${service.id}`} className="inline-flex items-center text-[#2DD4BF] hover:text-[#14b8a6] transition-colors duration-300">
        Learn More
        <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link href="/contact">
        <span className="inline-flex items-center text-[#2DD4BF] hover:text-[#14b8a6] font-montserrat font-medium transition-colors duration-300 cursor-pointer">
          Learn more
          <ChevronRight className="w-5 h-5 ml-2" />
        </span>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
