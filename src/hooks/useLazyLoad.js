import { useEffect } from 'react';

// Hook para lazy loading de imágenes y componentes pesados
export function useLazyLoad(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    if ('loading' in HTMLImageElement.prototype) {
      el.setAttribute('loading', 'lazy');
    } else {
      // Fallback para navegadores antiguos
      const observer = new window.IntersectionObserver(
        ([entry], obs) => {
          if (entry.isIntersecting) {
            if (el.dataset.src) el.src = el.dataset.src;
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }
  }, [ref]);
}
