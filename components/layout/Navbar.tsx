'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, BarChart, FileText, Users, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BookConsultation } from '@/components/shared/BookConsultation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300',
          scrolled
            ? 'bg-white dark:bg-gray-900 shadow-md py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <BarChart className="h-8 w-8 text-blue-600" />
                <span className="font-bold text-xl text-blue-900 dark:text-white">
                  Conceptinero
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-blue-600',
                    pathname === link.href
                      ? 'text-blue-600'
                      : scrolled
                      ? 'text-gray-900 dark:text-gray-100'
                      : 'text-gray-800 dark:text-gray-200'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                onClick={() => setConsultationOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Book Free Consultation
              </Button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-gray-200"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
            <div className="pt-2 pb-4 space-y-1 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'block py-3 text-base font-medium',
                    pathname === link.href
                      ? 'text-blue-600'
                      : 'text-gray-900 dark:text-gray-100'
                  )}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                onClick={() => {
                  setConsultationOpen(true);
                  closeMenu();
                }}
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        )}
      </header>
      <div className="h-16 md:h-20"></div> {/* Spacer for fixed header */}
      
      <BookConsultation 
        open={consultationOpen} 
        setOpen={setConsultationOpen} 
      />
    </>
  );
}