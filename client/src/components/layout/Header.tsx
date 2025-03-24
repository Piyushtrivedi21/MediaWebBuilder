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
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/careers', label: 'Careers' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScrollTo = (href: string) => {
    const element = document.querySelector(`[data-scroll-to="${href}"]`);
    if (element) {
      scrollToElement(element);
    } else {
      // Handle cases where the element isn't found (e.g., log an error or use a default behavior)
      console.warn(`Element with data-scroll-to="${href}" not found.`);
    }
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-[#121212]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div onClick={() => {
              scrollToTop();
              return false;
            }}>
              <Logo className="w-40 h-auto cursor-pointer" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  handleScrollTo(link.href);
                  return false; // Prevent default link behavior
                }}
                className={cn(
                  'text-gray-300 hover:text-white transition-colors cursor-pointer',
                  location === link.href && 'text-white font-semibold'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => {
              handleScrollTo('/contact');
              return false; // Prevent default link behavior
            }}>
              <Button>Contact Us</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#121212] border-t border-gray-800"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    handleScrollTo(link.href);
                    setIsOpen(false);
                    return false; // Prevent default link behavior
                  }}
                  className={cn(
                    'text-gray-300 hover:text-white transition-colors py-2 cursor-pointer',
                    location === link.href && 'text-white font-semibold'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => {
                handleScrollTo('/contact');
                setIsOpen(false);
                return false; // Prevent default link behavior
              }}>
                <Button className="w-full">Contact Us</Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;