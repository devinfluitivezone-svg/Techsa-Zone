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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Techsa Zone - SEO Digital & IT Agency React Next Template</title>
        <meta name="description" content="Techsa Zone is a leading digital marketing agency specializing in SEO, social media marketing, and comprehensive online solutions. We help businesses achieve their digital goals through innovative strategies, cutting-edge technology, and proven expertise that delivers measurable results." />
        <meta name="keywords" content="Techsa Zone, SEO, social media marketing, comprehensive online solutions, digital marketing agency, innovative strategies, cutting-edge technology, measurable results" />
        <meta name="author" content="Techsa Zone" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="notranslate" />
      </Head>

      <Component {...pageProps} />

      {/* Go Top Button */}
      <GoTop scrollStepInPx="100" delayInMs="15.50" />
    </>
  );
}

export default MyApp;
