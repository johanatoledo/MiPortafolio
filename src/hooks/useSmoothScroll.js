import { useEffect } from 'react';

// Hook para scroll suave al navegar a secciones
export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = e => {
      if (e.target.tagName === 'A' && e.target.hash) {
        const el = document.querySelector(e.target.hash);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
}
