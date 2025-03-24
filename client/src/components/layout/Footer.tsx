import React from 'react';
import { Link } from 'wouter';
import Logo from '@/components/ui/logo';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Logo className="mb-6" />
            <p className="text-gray-300 font-opensans mb-8">
              Transforming digital presence with strategic marketing solutions that drive growth and engagement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#2DD4BF] transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2DD4BF] transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2DD4BF] transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2DD4BF] transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-montserrat font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/">
                  <span className="text-gray-300 hover:text-[#2DD4BF] font-opensans transition-colors duration-300 cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-gray-300 hover:text-[#2DD4BF] font-opensans transition-colors duration-300 cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-gray-300 hover:text-[#2DD4BF] font-opensans transition-colors duration-300 cursor-pointer">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <span className="text-gray-300 hover:text-[#2DD4BF] font-opensans transition-colors duration-300 cursor-pointer">Portfolio</span>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <span className="text-gray-300 hover:text-[#2DD4BF] font-opensans transition-colors duration-300 cursor-pointer">Careers</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-300 hover:text-[#2DD4BF] font-opensans transition-colors duration-300 cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-montserrat font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services">
                  <span className="text-gray-300 hover:text-[#2DD4BF] font-opensans transition-colors duration-300 cursor-pointer">SEO Optimization</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-gray-300 hover:text-[#2DD4BF] font-opensans transition-colors duration-300 cursor-pointer">Social Media Marketing</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-gray-300 hover:text-[#2DD4BF] font-opensans transition-colors duration-300 cursor-pointer">Content Marketing</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-gray-300 hover:text-[#2DD4BF] font-opensans transition-colors duration-300 cursor-pointer">PPC Advertising</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-gray-300 hover:text-[#2DD4BF] font-opensans transition-colors duration-300 cursor-pointer">Website Design</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-gray-300 hover:text-[#2DD4BF] font-opensans transition-colors duration-300 cursor-pointer">Data Analytics</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-montserrat font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2DD4BF] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-300 font-opensans">123 Innovation Drive<br/>San Francisco, CA 94103</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2DD4BF] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span className="text-gray-300 font-opensans">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#2DD4BF] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span className="text-gray-300 font-opensans">info@maidenmedia.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#2A2A2A] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-opensans text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Maiden Media. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#">
                <span className="text-gray-400 hover:text-[#2DD4BF] text-sm font-opensans transition-colors duration-300 cursor-pointer">Privacy Policy</span>
              </Link>
              <Link href="#">
                <span className="text-gray-400 hover:text-[#2DD4BF] text-sm font-opensans transition-colors duration-300 cursor-pointer">Terms of Service</span>
              </Link>
              <Link href="#">
                <span className="text-gray-400 hover:text-[#2DD4BF] text-sm font-opensans transition-colors duration-300 cursor-pointer">Cookie Policy</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
