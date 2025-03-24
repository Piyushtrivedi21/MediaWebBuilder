import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import { testimonials } from '@/data/testimonials';
import { fadeIn } from '@/lib/animations';
import { MessageSquare } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Hear from businesses who have transformed their digital presence with Maiden Media"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn(index * 0.1)}
              className="bg-[#121212] p-8 rounded-lg border border-[#2A2A2A] relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute -top-5 left-8 text-[#2DD4BF]">
                <MessageSquare className="w-10 h-10" />
              </div>
              <p className="text-gray-300 font-opensans italic mb-8 pt-4">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} portrait`} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-white font-montserrat font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
