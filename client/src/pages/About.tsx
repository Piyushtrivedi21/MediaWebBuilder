import React from 'react';
import SectionHeading from '@/components/ui/section-heading';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { values } from '@/data/values';
import ValueCard from '@/components/about/ValueCard';
import { User, Users, Briefcase, Award, GraduationCap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      bio: 'With over 15 years of experience in digital marketing, Sarah leads our agency with vision and passion.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'David Chen',
      position: 'CTO',
      bio: 'David brings technical expertise to our marketing strategies, ensuring we stay on the cutting edge.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      position: 'Creative Director',
      bio: "Maria's eye for design and storytelling helps our clients stand out in crowded markets.",
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'James Wilson',
      position: 'SEO Specialist',
      bio: 'James crafts data-driven SEO strategies that help our clients climb to the top of search results.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const milestones = [
    { year: 2020, title: 'Founded', description: 'Maiden Media was established with a focus on innovative digital marketing solutions.' },
    { year: 2021, title: 'First Major Client', description: 'Secured our first enterprise client and expanded our team to 10 members.' },
    { year: 2022, title: 'Industry Recognition', description: 'Received multiple awards for our work in digital marketing campaigns.' },
    { year: 2023, title: 'Global Expansion', description: 'Expanded our services globally and doubled our client portfolio.' }
  ];

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
              About <span className="text-[#2DD4BF]">Maiden Media</span>
            </motion.h1>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn(0.1)}
              className="text-xl text-gray-300 mb-8 font-opensans leading-relaxed"
            >
              A team of passionate marketers, designers, and strategists dedicated to transforming your digital presence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn()}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-[#2DD4BF] mb-8"></div>
              <p className="text-gray-300 mb-6 font-opensans leading-relaxed">
                Maiden Media was founded in 2020 with a simple mission: to help businesses thrive in the digital landscape through innovative marketing strategies that deliver real results.
              </p>
              <p className="text-gray-300 mb-6 font-opensans leading-relaxed">
                What started as a small team of three passionate marketers has grown into a full-service digital marketing agency serving clients across various industries globally.
              </p>
              <p className="text-gray-300 mb-6 font-opensans leading-relaxed">
                We've built our reputation on transparency, data-driven decisions, and a deep understanding of how digital ecosystems work. Our approach combines creativity with analytics to craft strategies that not only look good but perform exceptionally well.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn(0.2)}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Team meeting" 
                  className="rounded-lg shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Team collaboration" 
                  className="rounded-lg shadow-lg mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Digital marketing workspace" 
                  className="rounded-lg shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Agency workspace" 
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide our work and define our culture"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard key={value.id} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Journey"
            subtitle="Key milestones in our growth and evolution"
          />
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#2A2A2A]"></div>
            
            <div className="relative">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn(index * 0.1)}
                  className={`flex items-center mb-16 ${index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'} relative z-10`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-[#121212] p-6 rounded-lg border border-[#2A2A2A] shadow-lg">
                      <span className="inline-block px-3 py-1 bg-[#2DD4BF] text-[#121212] text-sm font-montserrat font-semibold rounded-full mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-montserrat font-semibold text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-300 font-opensans">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#2DD4BF] border-4 border-[#121212]"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The talented individuals behind our success"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={member.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn(index * 0.1)}
                className="bg-[#1A1A1A] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-center space-x-3">
                      <a href="#" className="bg-[#2DD4BF] hover:bg-[#14b8a6] text-[#121212] w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                        </svg>
                      </a>
                      <a href="#" className="bg-[#2DD4BF] hover:bg-[#14b8a6] text-[#121212] w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="#" className="bg-[#2DD4BF] hover:bg-[#14b8a6] text-[#121212] w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-[#2DD4BF] font-opensans text-sm mb-4">{member.position}</p>
                  <p className="text-gray-300 font-opensans">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Impact"
            subtitle="The numbers that showcase our achievements"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn(0)}
              className="bg-[#121212] p-8 rounded-lg text-center border border-[#2A2A2A]"
            >
              <div className="text-[#2DD4BF] mb-4">
                <Users className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-4xl font-montserrat font-bold text-white mb-2">100+</h3>
              <p className="text-gray-300 font-opensans">Happy Clients</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn(0.1)}
              className="bg-[#121212] p-8 rounded-lg text-center border border-[#2A2A2A]"
            >
              <div className="text-[#2DD4BF] mb-4">
                <Briefcase className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-4xl font-montserrat font-bold text-white mb-2">250+</h3>
              <p className="text-gray-300 font-opensans">Projects Completed</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn(0.2)}
              className="bg-[#121212] p-8 rounded-lg text-center border border-[#2A2A2A]"
            >
              <div className="text-[#2DD4BF] mb-4">
                <Award className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-4xl font-montserrat font-bold text-white mb-2">15+</h3>
              <p className="text-gray-300 font-opensans">Industry Awards</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn(0.3)}
              className="bg-[#121212] p-8 rounded-lg text-center border border-[#2A2A2A]"
            >
              <div className="text-[#2DD4BF] mb-4">
                <User className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-4xl font-montserrat font-bold text-white mb-2">30+</h3>
              <p className="text-gray-300 font-opensans">Team Members</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
