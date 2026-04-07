import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export default function Navbar() {
  const { darkMode, setDarkMode } = useDarkMode();
  useSmoothScroll(); 

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '/services' },
    { name: 'Contacto', href: '/contact' },
  ];

  return (
    
    <nav className="fixed top-0 w-full z-50 flex items-center px-6 py-4 bg-white dark:bg-background/90 text-primary dark:text-primary transition-colors duration-300 backdrop-blur-sm">
      
      <div className="font-bold text-2xl font-mono select-none" style={{ fontFamily: 'JetBrains Mono, Fira Code, Space Mono, monospace' }}>
        <span className="text-accent">&#60;</span>
        <span className="text-primary">Toledana</span>
        <span className="text-primary">Dev</span>
        <span className="text-accent">&#47;&#62;</span>
      </div>

      <div className="flex-1"></div>

    
      <ul className="flex gap-6 text-lg items-center">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href} 
              className="hover:text-accent transition-colors duration-200"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

    
      <button
        aria-label="Toggle dark mode"
        className="ml-4 p-2 rounded-full bg-transparent text-accent dark:text-primary border-2 border-accent dark:border-primary hover:bg-accent/10 dark:hover:bg-primary/10 transition"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}