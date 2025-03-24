import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ClientsSection from '@/components/home/ClientsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import SectionHeading from '@/components/ui/section-heading';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { fadeIn } from '@/lib/animations';
import { FaChartLine, FaMoneyBillWave, FaChartBar } from 'react-icons/fa'; // Added imports for icons
import { portfolioItems } from '@/data/portfolio';
import { values } from '@/data/values';
import ServiceCard from '@/components/services/ServiceCard';
import PortfolioCard from '@/components/portfolio/PortfolioCard';
import ValueCard from '@/components/about/ValueCard';

const services = [
  {
    title: "Performance Marketing",
    description: "By harnessing sophisticated analytical tools, we architect hyper-focused marketing initiatives, guaranteeing that each allocated marketing budget actively propels the attainment of quantifiable organizational milestones.",
    icon: FaChartLine,
    bgImage: "url('path/to/your/image.jpg')"
  },
  {
    title: "ROAS Maximization",
    description: "Our customer acquisition blueprints are designed to pinpoint and cultivate relationships with premium customer segments, fostering enduring expansion through finely tuned outreach and interaction methodologies.",
    icon: FaMoneyBillWave,
    bgImage: "url('path/to/your/image.jpg')"
  },
  {
    title: "Data-Driven Results",
    description: "We place paramount importance on amplifying advertising expenditure returns, deploying methodologies that elevate the efficacy of each resource commitment, thereby assuring judicious financial deployment and demonstrable achievements.",
    icon: FaChartBar,
    bgImage: "url('path/to/your/image.jpg')"
  }
];

const Home: React.FC = () => {
  // Display only 3 services on the homepage
  const featuredServices = services.slice(0, 3);

  return (
    <>
      <HeroSection />
      <ClientsSection />

      {/* About Section */}
      <section id="about" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn()}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">Who We Are</h2>
              <div className="w-20 h-1 bg-[#2DD4BF] mb-8"></div>
              <p className="text-gray-300 mb-6 font-opensans leading-relaxed">
                At Maiden Media, we're more than just a digital marketing agency. We're strategic partners dedicated to transforming your digital presence and driving measurable results.
              </p>
              <p className="text-gray-300 mb-6 font-opensans leading-relaxed">
                Founded in 2020, our team of marketing experts, designers, and developers combine creative thinking with data-driven strategies to deliver solutions that exceed expectations.
              </p>
              <p className="text-gray-300 mb-8 font-opensans leading-relaxed">
                We believe in transparency, collaboration, and long-term partnerships that foster growth for our clients across various industries.
              </p>
              <Link href="/about">
                <span className="inline-flex items-center text-[#2DD4BF] hover:text-[#14b8a6] font-montserrat font-medium transition-colors duration-300 cursor-pointer">
                  Meet our team
                  <ChevronRight className="w-5 h-5 ml-2" />
                </span>
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn(0.2)}
              className="relative"
            >
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Team collaboration in a modern office" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-10 left-10 -z-0 w-full h-full border-2 border-[#2DD4BF] rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2DD4BF] bg-opacity-20 rounded-full"></div>
            </motion.div>
          </div>

          {/* Values */}
          <div className="mt-24">
            <SectionHeading
              title="Our Core Values"
              subtitle="The principles that guide our work and relationships with clients"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <ValueCard key={value.id} value={value} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive digital marketing solutions tailored to your business needs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn(0.4)}
            className="mt-16 text-center"
          >
            <Link href="/services">
              <Button className="bg-[#2DD4BF] hover:bg-[#14b8a6] text-[#121212] px-8 py-3 h-auto rounded-md font-montserrat font-semibold transition-all duration-300">
                VIEW ALL SERVICES
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Work"
            subtitle="Explore our recent projects and success stories"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn(0.4)}
            className="mt-16 text-center"
          >
            <Link href="/portfolio">
              <Button variant="outline" className="bg-transparent border-2 border-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-[#121212] text-[#2DD4BF] px-8 py-3 h-auto rounded-md font-montserrat font-semibold transition-all duration-300">
                VIEW ALL PROJECTS
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
};

export default Home;