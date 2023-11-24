import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const currentPath = window.location.pathname;

    // Asumiendo que '/docs/intro' es la página de inicio para inglés
    // y '/es/docs/intro' para español
    const shouldBeEnglishHome = currentPath === '/' || currentPath === '/docs/intro';
    const shouldBeSpanishHome = currentPath === '/es/' || currentPath === '/es/docs/intro';

    // Si no estamos en una de las páginas de inicio, redirigir y recargar
    if (!shouldBeEnglishHome && !shouldBeSpanishHome) {
      const newPath = currentPath.startsWith('/es/') ? '/es/docs/intro' : '/docs/intro';
      window.location.href = newPath;
      window.location.reload();
    }
  }, []);

  return <div></div>;
}
