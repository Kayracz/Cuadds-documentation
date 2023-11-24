import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Si el usuario está en la raíz del sitio, redirigir a /docs/intro
    if (window.location.pathname === '/') {
      window.location.href = '/docs/intro';
    }
  }, []);

  // Mientras se realiza la redirección, puedes mostrar un contenido de carga o dejarlo en blanco
  return <div></div>;
}

