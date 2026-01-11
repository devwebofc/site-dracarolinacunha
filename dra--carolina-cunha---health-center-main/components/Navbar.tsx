import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Método', href: '#metodo' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className={`text-2xl font-serif tracking-widest uppercase border-2 p-2 border-double transition-colors duration-300 ${isScrolled ? 'border-brown-800 text-brown-800' : 'border-white/40 text-white'}`}>
          HC <span className="text-xs ml-1 font-sans font-normal tracking-normal normal-case block sm:inline sm:normal-case">Health Center</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm tracking-wide uppercase hover:text-gold-400 transition-colors ${isScrolled ? 'text-brown-800' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <Button variant={isScrolled ? 'primary' : 'white'} onClick={() => window.location.href = '#contato'}>
            Agendar Consulta
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-brown-800' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-brown-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-8 px-6 flex flex-col space-y-6 animate-fade-in">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-brown-800 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button onClick={() => setIsMobileMenuOpen(false)}>
            Agendar Consulta
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;