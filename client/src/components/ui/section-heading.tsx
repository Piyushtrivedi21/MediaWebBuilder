import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeIn } from '@/lib/animations';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  delay?: number;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  center = true,
  className,
  delay = 0
}) => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeIn(delay)}
      className={cn(
        "mb-16",
        center ? "text-center" : "",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">{title}</h2>
      <div className={cn("w-20 h-1 bg-[#2DD4BF] mb-8", center ? "mx-auto" : "")}></div>
      {subtitle && (
        <p className={cn(
          "text-gray-300 font-opensans",
          center ? "max-w-3xl mx-auto" : ""
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
