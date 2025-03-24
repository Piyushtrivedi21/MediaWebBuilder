import React, { useState } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { fadeIn, slideInFromLeft, slideInFromRight } from '@/lib/animations';
import { services } from '@/data/services';
import ServiceCard from '@/components/services/ServiceCard';
import { ArrowRight, CheckCircle2, ChevronRight, Filter } from 'lucide-react';

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'advertising', name: 'Advertising' },
    { id: 'content', name: 'Content' },
    { id: 'marketing', name: 'Marketing' }
  ];
  
  const serviceCategories = {
    'programmatic-display-ads': 'advertising',
    'ctv-advertising': 'advertising',
    'social-media-marketing': 'marketing',
    'content-marketing': 'content',
    'affiliate-marketing': 'marketing',
    'performance-marketing': 'marketing',
    'paid-media-solutions': 'advertising',
    'influencer-marketing': 'marketing',
    'lead-gen-solutions': 'marketing',
    'seo-optimization': 'content'
  };
  
  const filteredServices = selectedCategory && selectedCategory !== 'all'
    ? services.filter(service => serviceCategories[service.id as keyof typeof serviceCategories] === selectedCategory)
    : services;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-[#121212] relative overflow-hidden">
        {/* Background geometric elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2DD4BF] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2DD4BF] opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn()}
              className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6"
            >
              Strategic <span className="text-[#2DD4BF]">Digital Marketing</span> Solutions
            </motion.h1>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn(0.1)}
              className="text-xl text-gray-300 mb-8 font-opensans leading-relaxed"
            >
              Elevate your brand with our comprehensive suite of digital marketing services, tailored to your business goals and audience needs.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn(0.2)}
            >
              <Link href="/contact">
                <Button className="bg-[#2DD4BF] hover:bg-[#14b8a6] text-[#121212] px-8 py-3 h-auto rounded-md font-montserrat font-medium transition-all duration-300 text-lg">
                  GET STARTED
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInFromLeft()}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">Data-Driven Digital Solutions</h2>
              <div className="w-20 h-1 bg-[#2DD4BF] mb-8"></div>
              <p className="text-gray-300 mb-6 font-opensans leading-relaxed">
                At Maiden Media, we leverage the latest technologies and innovative strategies to help businesses thrive in today's competitive digital landscape. Our collaborative approach ensures that every campaign we develop aligns perfectly with your unique business objectives.
              </p>
              <p className="text-gray-300 mb-8 font-opensans leading-relaxed">
                From programmatic display advertising to advanced lead generation solutions, our comprehensive suite of services is designed to maximize your ROI and drive sustainable growth for your business.
              </p>
              <ul className="space-y-3 mb-8">
                {['Targeted audience engagement', 'Cross-channel marketing integration', 'Real-time performance analytics', 'Continuous strategy optimization'].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn(0.1 + index * 0.1)}
                    className="flex items-start text-gray-300 font-opensans"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#2DD4BF] mr-3 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="bg-[#2DD4BF] hover:bg-[#14b8a6] text-[#121212] px-6 py-2 h-auto rounded-md font-montserrat font-medium transition-all duration-300">
                  GET A FREE CONSULTATION
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInFromRight()}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Digital marketing strategy" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2DD4BF] bg-opacity-20 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-[#2DD4BF] rounded-full -z-10"></div>
            </motion.div>
          </div>
          
          {/* Service filter controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn()}
              className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-4 md:mb-0"
            >
              Our Services
            </motion.h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn(0.1)}
              className="flex flex-wrap gap-2 md:gap-4 items-center"
            >
              <span className="text-gray-300 flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Filter by:
              </span>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id === 'all' ? null : category.id)}
                  className={`px-4 py-2 rounded-md text-sm transition-all duration-300 ${
                    (category.id === 'all' && !selectedCategory) || selectedCategory === category.id
                      ? 'bg-[#2DD4BF] text-[#121212] font-medium'
                      : 'bg-[#2A2A2A] text-gray-300 hover:bg-[#333333]'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>
          </div>
          
          {/* Services grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedCategory || 'all'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
          
          {/* No services found message */}
          {filteredServices.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-300 text-lg">No services found in this category.</p>
              <button 
                onClick={() => setSelectedCategory(null)}
                className="text-[#2DD4BF] hover:text-[#14b8a6] font-medium mt-4 inline-flex items-center"
              >
                View all services <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Process"
            subtitle="How we transform your marketing goals into measurable results"
          />
          
          <div className="relative">
            {/* Process line */}
            <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-[#2A2A2A]"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                { title: 'Discovery', description: 'We analyze your business goals, target audience, and competitive landscape to identify opportunities.', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
                { title: 'Strategy', description: 'We develop a customized marketing roadmap with clear KPIs aligned with your business objectives.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                { title: 'Execution', description: 'We implement campaigns across channels with precision, creativity, and attention to detail.', icon: 'M4 5a2 2 0 012-2h4.586A2 2 0 0112 3.586L15.414 7A2 2 0 0116 8.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V5z' },
                { title: 'Optimization', description: 'We continuously analyze performance data to refine strategies and maximize your ROI.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn(index * 0.1)}
                  className="bg-[#1A1A1A] p-6 rounded-lg text-center border border-[#2A2A2A] relative z-10 hover:border-[#2DD4BF] transition-all duration-300 h-full flex flex-col"
                >
                  {/* Step number */}
                  <div className="w-12 h-12 rounded-full bg-[#2DD4BF] text-[#121212] flex items-center justify-center font-montserrat font-bold text-xl mx-auto mb-6 relative">
                    <span>{index + 1}</span>
                    {/* Circle connector */}
                    <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-[#2A2A2A] -z-10"></div>
                  </div>
                  
                  <div className="text-[#2DD4BF] mb-4">
                    <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon}></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 font-opensans flex-grow">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="See Our Work in Action"
            subtitle="Watch how we transform brands through innovative digital marketing strategies"
          />
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn()}
            className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl"
          >
            <div className="relative aspect-video z-10">
              {/* Video element that will autoplay in a loop */}
              <video 
                className="w-full h-full object-cover rounded-lg"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                {/* Digital marketing related video */}
                <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-person-typing-on-a-computers-keyboard-42753-large.mp4" type="video/mp4" />
                <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-person-typing-on-a-computers-keyboard-42753-large.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20"></div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-30">
                <h3 className="text-xl md:text-2xl font-montserrat font-bold text-white mb-2">Digital Marketing Excellence</h3>
                <p className="text-gray-200 font-opensans mb-4 max-w-xl">
                  Our strategic approach combines creativity, data-driven insights, and cutting-edge technology 
                  to deliver exceptional results for our clients.
                </p>
                <Link href="/contact">
                  <Button className="bg-[#2DD4BF] hover:bg-[#14b8a6] text-[#121212] px-6 py-2 h-auto rounded-md font-montserrat font-medium transition-all duration-300">
                    GET STARTED
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2DD4BF] bg-opacity-20 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-[#2DD4BF] rounded-full -z-10"></div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn(0.4)}
            className="mt-16 text-center"
          >
            <p className="text-gray-300 font-opensans text-lg mb-6">
              Ready to transform your digital presence with our expertise?
            </p>
            <Link href="/contact">
              <Button variant="outline" className="bg-transparent border-2 border-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-[#121212] text-[#2DD4BF] px-8 py-3 h-auto rounded-md font-montserrat font-semibold transition-all duration-300 inline-flex items-center">
                REQUEST A CUSTOMIZED STRATEGY
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-[#121212] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2DD4BF] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2DD4BF] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn()}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">Ready to Transform Your Digital Marketing?</h2>
            <p className="text-xl text-gray-300 mb-10 font-opensans leading-relaxed">
              Partner with Maiden Media to discover how our data-driven marketing strategies can elevate your brand and drive measurable business growth.
            </p>
            <Link href="/contact">
              <Button className="bg-[#2DD4BF] hover:bg-[#14b8a6] text-[#121212] px-8 py-4 h-auto rounded-md font-montserrat font-semibold text-lg transition-all duration-300">
                SCHEDULE A STRATEGY SESSION
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
