import React from 'react';
import { motion } from 'framer-motion';
import { Career } from '@/types';
import { ChevronRight } from 'lucide-react';

interface JobCardProps {
  job: Career;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
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
      whileHover={{ y: -5, borderColor: "#2DD4BF" }}
      className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A] transition-all duration-300"
    >
      <h3 className="text-xl font-montserrat font-semibold text-white mb-3">{job.title}</h3>
      <p className="text-gray-300 font-opensans mb-4">{job.type} · {job.location}</p>
      <a 
        href="#" 
        className="inline-flex items-center text-[#2DD4BF] hover:text-[#14b8a6] font-montserrat font-medium transition-colors duration-300"
      >
        Apply now
        <ChevronRight className="w-5 h-5 ml-2" />
      </a>
    </motion.div>
  );
};

export default JobCard;
