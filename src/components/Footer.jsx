import React from 'react';
import Skills from './Skills'; 

export default function Footer() {
  return (
    <footer className="py-12 px-8 bg-white dark:bg-[#0a0a0a] text-black dark:text-white mt-12 transition-colors duration-300 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        
        <div className="flex gap-6 order-2 md:order-1">
          <a 
            href="https://www.linkedin.com/in/johana-toledo-87a939222" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-bold hover:text-primary transition-colors duration-300 uppercase text-sm tracking-widest"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/johanatoledo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-bold hover:text-primary transition-colors duration-300 uppercase text-sm tracking-widest"
          >
            GitHub
          </a>
        </div>

        {/* Componente Skills - Centro */}
        <div className="w-full md:w-auto order-1 md:order-2 flex justify-center">
          <Skills />
        </div>

        
          <div className="text-2xl font-mono select-none order-3" style={{ fontFamily: 'JetBrains Mono, Fira Code, Space Mono, monospace' }}>
             <span className="text-accent">&#60;</span>
             <span className="text-primary">Toledana</span>
             <span className="text-primary">Dev</span>
             <span className="text-accent">&#47;&#62;</span>
         </div>
        </div>

    </footer>
  );
}