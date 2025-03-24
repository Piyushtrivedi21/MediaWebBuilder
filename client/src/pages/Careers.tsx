import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { fadeIn } from '@/lib/animations';
import { careers, benefits } from '@/data/careers';
import JobCard from '@/components/careers/JobCard';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

const Careers: React.FC = () => {
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
              Join Our <span className="text-[#2DD4BF]">Team</span>
            </motion.h1>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn(0.1)}
              className="text-xl text-gray-300 mb-8 font-opensans leading-relaxed"
            >
              Be part of a talented team dedicated to transforming the digital landscape for our clients.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Careers Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn()}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">Why Join Maiden Media?</h2>
              <div className="w-20 h-1 bg-[#2DD4BF] mb-8"></div>
              <p className="text-gray-300 mb-6 font-opensans leading-relaxed">
                At Maiden Media, we're always looking for talented individuals who are passionate about digital marketing and want to make a real impact.
              </p>
              <p className="text-gray-300 mb-8 font-opensans leading-relaxed">
                We offer a collaborative, innovative environment where creativity thrives and professional growth is encouraged. Join us in helping businesses transform their digital presence.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={benefit.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn(0.1 + index * 0.1)}
                    className="bg-[#121212] rounded-lg p-4 flex items-center"
                  >
                    <svg className="w-6 h-6 text-[#2DD4BF] mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d={benefit.icon}></path>
                    </svg>
                    <span className="text-white font-opensans">{benefit.title}</span>
                  </motion.div>
                ))}
              </div>

              <Link href="#openings">
                <Button className="bg-[#2DD4BF] hover:bg-[#14b8a6] text-[#121212] px-8 py-3 h-auto rounded-md font-montserrat font-semibold transition-all duration-300 inline-flex items-center">
                  VIEW OPEN POSITIONS
                  <ArrowRight className="ml-2 w-5 h-5" />
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
              <div className="grid grid-cols-2 gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Team meeting" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Office space" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Team working together" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Culture"
            subtitle="What makes working at Maiden Media special"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Innovation First', 
                description: 'We encourage thinking outside the box and exploring new ideas. Our team is always looking for innovative ways to solve problems and deliver results.',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z'
              },
              { 
                title: 'Collaboration', 
                description: 'We believe in the power of teamwork. Our collaborative environment allows us to combine our diverse skills and perspectives to create exceptional work.',
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
              },
              { 
                title: 'Growth Mindset', 
                description: "We're committed to continuous learning and professional development. We provide opportunities for our team members to grow their skills and advance their careers.",
                icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn(index * 0.1)}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-[#2A2A2A] hover:border-[#2DD4BF] transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-[#2DD4BF] mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon}></path>
                  </svg>
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 font-opensans">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Open Positions"
            subtitle="Join our team and make an impact"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careers.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn(0.4)}
            className="mt-16 text-center"
          >
            <p className="text-gray-300 font-opensans mb-6">
              Don't see a position that matches your skillset?
            </p>
            <Link href="/contact">
              <Button variant="outline" className="bg-transparent border-2 border-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-[#121212] text-[#2DD4BF] px-8 py-3 h-auto rounded-md font-montserrat font-semibold transition-all duration-300">
                SEND US YOUR RESUME
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Employee Testimonials Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Life at Maiden Media"
            subtitle="Hear from our team members"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Working at Maiden Media has been incredibly rewarding. I'm constantly challenged to grow my skills, and I love the collaborative environment.",
                name: "Alex Thompson",
                position: "SEO Specialist",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
              },
              {
                quote: "The culture here is unlike any place I've worked before. There's a perfect balance of autonomy and teamwork, and my ideas are always valued.",
                name: "Jessica Chen",
                position: "Social Media Manager",
                image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn(index * 0.1)}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-[#2A2A2A] relative"
              >
                <div className="absolute -top-5 left-8 text-[#2DD4BF]">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="text-gray-300 font-opensans italic mb-8 pt-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-montserrat font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;