import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import SectionHeading from '@/components/ui/section-heading';

const About: React.FC = () => {
  const stats = [
    { value: '60+', label: 'Happy Clients' },
    { value: '25+', label: 'Projects Completed' },
    { value: '10', label: 'Team Members' },
  ];

  const teamMembers = [
    {
      name: 'PIYUSH TRIVEDI',
      role: 'CEO & Founder',
      bio: 'With over 15 years of experience in digital marketing, Piyush leads our agency with vision and passion.',
    },
    {
      name: 'SHUBHAM PARMAR',
      role: 'CTO',
      bio: 'David brings technical expertise to our marketing strategies, ensuring we stay on the cutting edge.',
    },
    {
      name: 'HARSHIT MANGLA',
      role: 'Creative Director',
      bio: 'Maria\'s eye for design and storytelling helps our clients stand out in crowded markets.',
    },
    {
      name: 'RACHIT SHUKUL',
      role: 'SEO Specialist',
      bio: 'Rachit crafts data-driven SEO strategies that help our clients climb to the top of search results',
    },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Company Founded',
      description: 'Maiden Media was established with a vision to transform digital marketing.',
    },
    {
      year: '2025',
      title: 'Rapid Growth',
      description: 'Expanded our team and client base significantly.',
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Began serving international clients and opened new market opportunities.',
    },
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
              About <span className="text-[#2DD4BF]">Us</span>
            </motion.h1>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn(0.1)}
              className="text-xl text-gray-300 mb-8 font-opensans leading-relaxed"
            >
              Founded in 2024, our team of marketing experts, designers, and developers combine creative thinking with data-driven strategies to deliver solutions that exceed expectations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn(0.1 * index)}
                className="text-center"
              >
                <h3 className="text-4xl font-montserrat font-bold text-[#2DD4BF] mb-2">{stat.value}</h3>
                <p className="text-gray-300 font-opensans">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Team"
            subtitle="Meet the experts behind our success"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn(0.1 * index)}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#2DD4BF] to-[#14b8a6] rounded-full mb-6"></div>
                <h3 className="text-xl font-montserrat font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#2DD4BF] font-opensans mb-4">{member.role}</p>
                <p className="text-gray-300 font-opensans">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Journey"
            subtitle="The milestones that shaped our success"
          />

          <div className="max-w-4xl mx-auto mt-12">
            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn(0.1 * index)}
                className="flex gap-8 mb-12 relative"
              >
                <div className="w-24 flex-shrink-0">
                  <span className="text-2xl font-montserrat font-bold text-[#2DD4BF]">{event.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300 font-opensans">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;