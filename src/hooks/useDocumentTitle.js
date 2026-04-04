import { useEffect } from 'react';

// Hook para cambiar el título de la página dinámicamente
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
