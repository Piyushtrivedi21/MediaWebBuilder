import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import PortfolioCard from '@/components/portfolio/PortfolioCard';
import { portfolioItems, portfolioCategories } from '@/data/portfolio';
import { Link } from 'wouter';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => 
        item.category.toLowerCase() === selectedCategory.toLowerCase());

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
              Our <span className="text-[#2DD4BF]">Work</span>
            </motion.h1>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn(0.1)}
              className="text-xl text-gray-300 mb-8 font-opensans leading-relaxed"
            >
              Explore our portfolio of successful digital marketing projects and case studies.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-6">
          {/* Portfolio Filter */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn()}
            className="flex flex-wrap justify-center mb-12 gap-4"
          >
            {portfolioCategories.map(category => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  ${selectedCategory === category.id 
                    ? 'bg-[#2DD4BF] text-[#121212]' 
                    : 'bg-[#121212] hover:bg-[#2DD4BF] hover:text-[#121212] text-white'
                  } 
                  px-6 py-2 h-auto rounded-md font-montserrat transition-all duration-300 text-sm focus:outline-none
                `}
                variant={selectedCategory === category.id ? "default" : "outline"}
              >
                {category.label}
              </Button>
            ))}
          </motion.div>
          
          {/* Portfolio Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>
          
          {/* Case Studies Section */}
          <section className="mt-24">
            <SectionHeading
              title="Featured Case Studies"
              subtitle="In-depth looks at some of our most successful projects"
            />
            
            {[
              {
                title: "E-commerce Conversion Optimization",
                client: "Urban Gear Co.",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "We redesigned the e-commerce experience for Urban Gear Co., focusing on improving the user journey and optimizing conversion paths.",
                results: ["45% increase in conversion rate", "30% reduction in cart abandonment", "22% increase in average order value"],
                tags: ["UX Design", "Conversion Optimization", "A/B Testing"]
              },
              {
                title: "Social Media Strategy for Fitness Brand",
                client: "FitLife Athletics",
                image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "We developed and executed a comprehensive social media strategy for FitLife Athletics, focusing on engagement and community building.",
                results: ["200% increase in social engagement", "150% growth in social following", "35% increase in website traffic from social channels"],
                tags: ["Social Media", "Content Strategy", "Community Management"]
              }
            ].map((study, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn(index * 0.2)}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 ${
                  index % 2 !== 0 ? 'lg:grid-flow-col lg:auto-cols-max' : ''
                }`}
              >
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="rounded-lg shadow-xl object-cover w-full h-96"
                  />
                </div>
                <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <span className="inline-block px-3 py-1 bg-[#2DD4BF] text-[#121212] text-xs font-montserrat font-semibold rounded-full mb-3">
                    {study.client}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-gray-300 mb-6 font-opensans leading-relaxed">
                    {study.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-lg font-montserrat font-semibold text-white mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start text-gray-300 font-opensans">
                          <svg className="w-5 h-5 text-[#2DD4BF] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, i) => (
                      <span key={i} className="bg-[#2A2A2A] px-3 py-1 rounded-full text-sm text-gray-300 font-opensans">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button className="bg-[#2DD4BF] hover:bg-[#14b8a6] text-[#121212] px-6 py-2 h-auto rounded-md font-montserrat font-medium transition-all duration-300">
                    VIEW FULL CASE STUDY
                  </Button>
                </div>
              </motion.div>
            ))}
          </section>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Impact"
            subtitle="Measurable results that speak for themselves"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: '250+', label: 'Projects Completed' },
              { stat: '45%', label: 'Average Conversion Increase' },
              { stat: '180%', label: 'Average Traffic Growth' },
              { stat: '15+', label: 'Industry Awards' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn(index * 0.1)}
                className="bg-[#1A1A1A] p-8 rounded-lg text-center shadow-lg border border-[#2A2A2A]"
              >
                <h3 className="text-4xl font-montserrat font-bold text-[#2DD4BF] mb-2">{item.stat}</h3>
                <p className="text-white font-opensans">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Client Success Stories"
            subtitle="What our clients say about working with us"
          />
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn()}
            className="bg-[#121212] p-8 md:p-12 rounded-lg border border-[#2A2A2A]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <svg className="w-12 h-12 text-[#2DD4BF] mb-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
                <p className="text-xl text-gray-300 font-opensans italic mb-8 leading-relaxed">
                  "Working with Maiden Media has been a game-changer for our business. Their strategic approach to SEO and content marketing increased our organic traffic by 150% and generated a 200% ROI within just 6 months. The team is incredibly responsive, professional, and truly invested in our success."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                    alt="Michael Roberts" 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-montserrat font-semibold text-white">Michael Roberts</h4>
                    <p className="text-gray-400">Founder, Urban Gear Co.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Urban Gear Co. office" 
                  className="rounded-lg shadow-xl relative z-10"
                />
                <div className="absolute top-6 -right-6 w-full h-full border-2 border-[#2DD4BF] rounded-lg -z-0"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#121212] to-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn()}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-gray-300 mb-8 font-opensans">
              Let's create a tailored digital strategy that drives real results for your business.
            </p>
            <Link href="/contact">
              <Button className="bg-[#2DD4BF] hover:bg-[#14b8a6] text-[#121212] px-8 py-3 h-auto rounded-md font-montserrat font-semibold transition-all duration-300 text-lg">
                START YOUR PROJECT
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
