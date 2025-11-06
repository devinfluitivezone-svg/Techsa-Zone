import "../styles/bootstrap.min.css";
import "../styles/fontawesome.min.css";
import "../styles/flaticon.css";
import "animate.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Layouts/GoTop";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Techsa Zone" />
        <meta name="copyright" content="Techsa Zone" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="MmVbKXmLIaFfViDV6jxoe6aUJMl_C5bjmYGHVaVjYzQ" />
        
        {/* Title and Description */}
        <title>Techsa Zone - SEO Digital Marketing & IT Solutions Agency</title>
        <meta name="title" content="Techsa Zone - SEO Digital Marketing & IT Solutions Agency" />
        <meta name="description" content="Techsa Zone is a leading digital marketing agency specializing in SEO, social media marketing, and comprehensive online solutions. We help businesses achieve digital growth." />
        
        {/* Keywords */}
        <meta name="keywords" content="Techsa Zone, SEO agency, digital marketing, web development, mobile app development, UI/UX design, graphic design, branding, software testing, IT solutions, digital transformation, search engine optimization, social media marketing, PPC advertising, content marketing, responsive web design, e-commerce development, React development, Next.js development, custom software development, Pakistan digital agency, digital marketing services, online marketing, website development, app development, brand identity design, user experience design, quality assurance testing" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.techsazone.com/" />
        <meta property="og:title" content="Techsa Zone - SEO Digital Marketing & IT Solutions Agency" />
        <meta property="og:description" content="Techsa Zone is a leading digital marketing agency specializing in SEO, social media marketing, and comprehensive online solutions. We help businesses achieve digital growth." />
        <meta property="og:image" content="https://www.techsazone.com/images/og-image.jpg" />
        <meta property="og:site_name" content="Techsa Zone" />
        <meta property="og:locale" content="en_US" />
        
      
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#5e72e4" />
        <meta name="msapplication-TileColor" content="#5e72e4" />
        <meta name="application-name" content="Techsa Zone" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.techsazone.com/" />
        
        {/* Favicon and Icons - SVG prioritized for modern browsers */}
        <link rel="icon" type="image/svg+xml" href="/Techszone Favicon.svg" />
        <link rel="alternate icon" type="image/png" href="/images/favicon.png" />
        <link rel="shortcut icon" href="/Techszone Favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.techsazone.com" />
        
        {/* Navigation Links for Search Engines */}
        <link rel="alternate" href="https://www.techsazone.com/" hreflang="en" />
        <link rel="alternate" href="https://www.techsazone.com/about-us/" hreflang="en" />
        <link rel="alternate" href="https://www.techsazone.com/services/" hreflang="en" />
        <link rel="alternate" href="https://www.techsazone.com/portfolio" hreflang="en" />
        <link rel="alternate" href="https://www.techsazone.com/blog/" hreflang="en" />
        <link rel="alternate" href="https://www.techsazone.com/pricing/" hreflang="en" />
        <link rel="alternate" href="https://www.techsazone.com/contact/" hreflang="en" />
        
        {/* Site Navigation Meta */}
        <meta name="navigation" content="Home, About us, Services, Portfolio, Blog, Pricing, Contact" />
        <meta name="site-structure" content="Home: /, About us: /about-us/, Services: /services/, Portfolio: /portfolio, Blog: /blog/, Pricing: /pricing/, Contact: /contact/" />
        
        {/* Structured Data for Sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Techsa Zone",
              "url": "https://www.techsazone.com",
              "description": "Techsa Zone is a leading digital marketing agency specializing in SEO, social media marketing, and comprehensive online solutions.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.techsazone.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Techsa Zone",
              "url": "https://www.techsazone.com",
              "logo": "https://www.techsazone.com/images/Logo-01.png",
              "description": "Techsa Zone is a leading digital marketing agency specializing in SEO, social media marketing, and comprehensive online solutions.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2nd Floor, Shahra-e-Faisal",
                "addressLocality": "Shah Faisal Town",
                "addressRegion": "Karachi",
                "addressCountry": "PK"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+92-3391252535",
                "contactType": "Customer Service",
                "email": "info@techsazone.com"
              }
            })
          }}
        />
      </Head>

      <Component {...pageProps} />

      {/* Go Top Button */}
      <GoTop scrollStepInPx="100" delayInMs="15.50" />
    </>
  );
}

export default MyApp;
