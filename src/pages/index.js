import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {

    // Constructing the redirection URL
    const redirectionURL = '/docs/intro';

    // Redirect to the appropriate language-specific URL
    if (window.location.pathname !== redirectionURL) {
      window.location.href = redirectionURL;
    }
  }, []);

  // Server-side fallback to prevent any rendering errors
  return <div></div>;
}
