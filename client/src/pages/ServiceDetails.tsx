
import React from 'react';
import { useRoute } from 'wouter';
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { fadeIn } from '@/lib/animations';
import { CheckCircle2 } from 'lucide-react';

const ServiceDetails = () => {
  const [, params] = useRoute('/services/:id');
  const service = services.find(s => s.id === params?.id);

  if (!service) {
    return <div className="container mx-auto px-4 py-20 text-center text-white">Service not found</div>;
  }

  return (
    <div className="bg-[#121212] min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn()}
          className="max-w-4xl mx-auto"
        >
          <div className="text-[#2DD4BF] mb-6">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
              <path d={service.icon}></path>
            </svg>
          </div>
          
          <h1 className="text-4xl font-montserrat font-bold text-white mb-6">{service.title}</h1>
          <p className="text-xl text-gray-300 mb-12">{service.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-montserrat font-semibold text-white mb-6">Key Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <CheckCircle2 className="w-6 h-6 text-[#2DD4BF] mr-3 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {service.benefits && (
              <div>
                <h2 className="text-2xl font-montserrat font-semibold text-white mb-6">Benefits</h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <CheckCircle2 className="w-6 h-6 text-[#2DD4BF] mr-3 mt-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {service.whyChooseUs && (
            <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#2A2A2A]">
              <h2 className="text-2xl font-montserrat font-semibold text-white mb-4">Why Choose Us</h2>
              <p className="text-gray-300 leading-relaxed">{service.whyChooseUs}</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetails;
