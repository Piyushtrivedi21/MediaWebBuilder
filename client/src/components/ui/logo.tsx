import React from 'react';
import { Link } from 'wouter';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className, size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <Link href="/">
      <div className={cn("font-montserrat font-bold cursor-pointer", sizeClasses[size], className)}>
        <span className="text-white">MAIDEN</span>
        <span className="text-[#2DD4BF]">MEDIA</span>
      </div>
    </Link>
  );
};

export default Logo;