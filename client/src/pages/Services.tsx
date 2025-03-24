import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { fadeIn } from '@/lib/animations';
import { services } from '@/data/services';
import ServiceCard from '@/components/services/ServiceCard';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn()}
              className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6"
            >
              Our <span className="text-[#2DD4BF]">Services</span>
            </motion.h1>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn(0.1)}
              className="text-xl text-gray-300 mb-8 font-opensans leading-relaxed"
            >
              Comprehensive digital marketing solutions tailored to your business goals and target audience.
            </motion.p>
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
              variants={fadeIn()}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">Strategic Digital Solutions</h2>
              <div className="w-20 h-1 bg-[#2DD4BF] mb-8"></div>
              <p className="text-gray-300 mb-6 font-opensans leading-relaxed">
                At Maiden Media, we offer a comprehensive suite of digital marketing services designed to help your business thrive in the online landscape. Our data-driven approach ensures that every strategy we implement is tailored to your specific goals and audience.
              </p>
              <p className="text-gray-300 mb-8 font-opensans leading-relaxed">
                Whether you're looking to increase your online visibility, engage with your audience on social media, or convert more website visitors into customers, our team of experts has the skills and experience to help you succeed.
              </p>
              <ul className="space-y-3 mb-8">
                {['Customized strategies for your business', 'Data-driven approach to marketing', 'Regular reporting and analysis', 'Continuous optimization'].map((item, index) => (
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
              variants={fadeIn(0.2)}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Process"
            subtitle="How we work to deliver results for your business"
          />
          
          <div className="relative">
            {/* Process line */}
            <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-[#2A2A2A]"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                { title: 'Discovery', description: 'We learn about your business, goals, and target audience.', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
                { title: 'Strategy', description: 'We develop a customized plan based on your specific needs.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                { title: 'Execution', description: 'We implement the strategy with precision and creativity.', icon: 'M4 5a2 2 0 012-2h4.586A2 2 0 0112 3.586L15.414 7A2 2 0 0116 8.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V5z' },
                { title: 'Optimization', description: 'We continuously monitor, analyze, and improve for best results.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn(index * 0.1)}
                  className="bg-[#1A1A1A] p-6 rounded-lg text-center border border-[#2A2A2A] relative z-10"
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
                  <p className="text-gray-300 font-opensans">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Packages"
            subtitle="Flexible solutions to meet your business needs"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Starter', 
                price: '$999', 
                period: 'per month',
                description: 'Perfect for small businesses just getting started with digital marketing.',
                features: ['SEO Baseline Setup', 'Basic Social Media Management', 'Monthly Analytics Report', 'Email Support'],
                popular: false
              },
              { 
                name: 'Growth', 
                price: '$1,999', 
                period: 'per month',
                description: 'Ideal for businesses looking to expand their online presence and drive growth.',
                features: ['Comprehensive SEO Optimization', 'Content Creation & Publishing', 'Social Media Management', 'PPC Campaign Management', 'Bi-weekly Analytics Report', 'Email & Phone Support'],
                popular: true
              },
              { 
                name: 'Enterprise', 
                price: '$3,999', 
                period: 'per month',
                description: 'Full-service solution for established businesses seeking to dominate their market.',
                features: ['Advanced SEO Strategy', 'Content Marketing Strategy', 'Full Social Media Management', 'Custom PPC & Remarketing', 'Conversion Rate Optimization', 'Weekly Analytics & Strategy Calls', 'Priority Support'],
                popular: false
              }
            ].map((pkg, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn(index * 0.1)}
                className={`relative bg-[#121212] rounded-lg overflow-hidden border ${pkg.popular ? 'border-[#2DD4BF]' : 'border-[#2A2A2A]'} transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-[#2DD4BF] text-[#121212] px-4 py-1 font-montserrat font-semibold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-montserrat font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="flex items-end mb-6">
                    <span className="text-3xl font-montserrat font-bold text-white">{pkg.price}</span>
                    <span className="text-gray-400 ml-2 mb-1">{pkg.period}</span>
                  </div>
                  <p className="text-gray-300 font-opensans mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 font-opensans">
                        <CheckCircle2 className="w-5 h-5 text-[#2DD4BF] mr-3 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className={`w-full ${pkg.popular ? 'bg-[#2DD4BF] hover:bg-[#14b8a6] text-[#121212]' : 'bg-[#2A2A2A] hover:bg-[#2DD4BF] hover:text-[#121212] text-white'} px-6 py-3 h-auto rounded-md font-montserrat font-semibold transition-all duration-300`}>
                      GET STARTED
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn(0.4)}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 font-opensans mb-6">
              Need a custom solution? We offer tailored packages to meet your specific requirements.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="bg-transparent border-2 border-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-[#121212] text-[#2DD4BF] px-8 py-3 h-auto rounded-md font-montserrat font-semibold transition-all duration-300 inline-flex items-center">
                CONTACT US FOR A CUSTOM QUOTE
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
