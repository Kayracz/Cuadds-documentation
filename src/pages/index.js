import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const path = window.location.pathname;

    // Verifica si la URL ya contiene el código de idioma
    if (path.startsWith('/es/')) {
      // Si estamos en español pero no en la página de introducción, redirigir allí
      if (path !== '/es/docs/intro') {
        window.location.href = '/es/docs/intro';
      }
    } else if (path === '/') {
      // Si estamos en la raíz (idioma inglés por defecto), redirigir a la página de introducción en inglés
      window.location.href = '/docs/intro';
    }
    // No se necesita un else aquí, porque si ya estamos en /docs/intro (en inglés), no queremos hacer nada
  }, []);

  return <div></div>;
}

