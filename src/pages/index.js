import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Getting the current language from the URL on the client-side
    const currentLanguage = window.location.pathname.split('/')[1];

    const languagePaths = {
      en: '/docs/intro',
      es: '/es/docs/intro',
    };

    // Constructing the redirection URL
    const redirectionURL = languagePaths[currentLanguage] || '/docs/intro';

    // Redirect to the appropriate language-specific URL
    if (window.location.pathname !== redirectionURL) {
      window.location.href = redirectionURL;
    }
  }, []);

  // Server-side fallback to prevent any rendering errors
  return <div></div>;
}
