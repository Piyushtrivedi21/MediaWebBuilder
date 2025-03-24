import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/logo';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToElement } from '@/lib/utils';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'CAREERS', path: '/careers' }
  ];

  const handleNavClick = (path: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (path.startsWith('#') && location === '/') {
      e.preventDefault();
      scrollToElement(path.substring(1));
    } else {
      // Scroll to top when navigating to new pages
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      scrolled ? "py-2 shadow-lg" : "py-4",
      "bg-[#1A1A1A] bg-opacity-95"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <Link key={link.path} href={link.path}>
                <a
                  className={cn(
                    "nav-link text-white font-montserrat font-medium tracking-wide relative hover:text-[#2DD4BF] transition-colors duration-300",
                    location === link.path ? "after:absolute after:w-full after:h-0.5 after:bg-[#2DD4BF] after:bottom-[-5px] after:left-0" : ""
                  )}
                  onClick={(e) => handleNavClick(link.path, e)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Button 
                  className="bg-[#2DD4BF] hover:bg-[#14b8a6] text-[#121212] px-6 py-2 rounded-md font-montserrat font-medium transition-all duration-300"
                >
                  CONTACT US
                </Button>
              </a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pt-4 pb-2"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map(link => (
                  <Link key={link.path} href={link.path}>
                    <a 
                      className="text-white font-montserrat font-medium py-2 hover:text-[#2DD4BF] transition-colors duration-300"
                      onClick={(e) => handleNavClick(link.path, e)}
                    >
                      {link.name}
                    </a>
                  </Link>
                ))}
                <Link href="/contact">
                  <a 
                    className="bg-[#2DD4BF] hover:bg-[#14b8a6] text-[#121212] px-4 py-2 rounded-md font-montserrat font-medium text-center transition-all duration-300"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    CONTACT US
                  </a>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
