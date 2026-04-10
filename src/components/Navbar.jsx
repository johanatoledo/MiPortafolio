import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { FormattedMessage } from 'react-intl';
import { NavHashLink } from 'react-router-hash-link'; 

export default function Navbar({ setLocale, locale }) {
  const { darkMode, setDarkMode } = useDarkMode();
  useSmoothScroll();

  const navLinks = [
    { name: 'navbar.home', href: '/#home' },
    { name: 'navbar.about', href: '/about' },
    { name: 'navbar.services', href: '/#services' },
    { name: 'navbar.contact', href: '/#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center px-4 sm:px-6 py-3 sm:py-4 bg-transparent text-primary dark:text-primary transition-colors duration-300 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="font-bold text-2xl font-mono select-none" style={{ fontFamily: 'JetBrains Mono, Fira Code, Space Mono, monospace' }}>
        <span className="text-accent">&#60;</span>
        <span className="text-primary">Toledana</span>
        <span className="text-primary">Dev</span>
        <span className="text-accent">&#47;&#62;</span>
      </div>
      <div className="flex-1"></div>
      <ul className="flex gap-4 sm:gap-6 text-sm sm:text-base items-center">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavHashLink
              smooth 
              to={link.href}
              className="hover:text-accent transition-colors duration-200 text-gray-700 dark:text-primary"
            >
              <FormattedMessage id={link.name} />
            </NavHashLink>
          </li>
        ))}
        {/* Language selector */}
        <li>
          <select
            value={locale}
            onChange={e => setLocale(e.target.value)}
            className="ml-2 px-2 py-1 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#222] text-xs"
            aria-label="Select language"
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </li>
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