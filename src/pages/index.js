import React from 'react';
import { Redirect } from 'react-router-dom';

export default function Home() {
  // Getting the current language from the URL
  const currentLanguage = window.location.pathname.split('/')[1];

  const languagePaths = {
    en: '/docs/intro',
    es: '/es/docs/intro',
  };

  // Constructing the redirection URL
  const redirectionURL = languagePaths[currentLanguage] || '/docs/intro';

  // Redirect to the appropriate language-specific URL
  return <Redirect to={redirectionURL} />;
}
