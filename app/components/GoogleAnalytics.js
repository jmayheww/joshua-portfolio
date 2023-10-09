import Head from "next/head";
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-W5DKREQDTB"
        strategy="afterInteractive"
        id="ga-script"
      />
      <Script
        strategy="afterInteractive"
        id="ga-inline-script"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W5DKREQDTB');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
