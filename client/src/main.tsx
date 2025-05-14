import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Helmet>
      <title>Infinity Technologies Ltd | Edge to Cloud Inventors & Consultants</title>
      <meta name="description" content="Infinity Technologies Ltd - Edge to cloud inventors and consultants. We develop, supply & integrate cutting-edge technology solutions." />
      <meta property="og:title" content="Infinity Technologies Ltd | Edge to Cloud Inventors & Consultants" />
      <meta property="og:description" content="We develop, supply & integrate cutting-edge technology solutions that drive innovation and business growth." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://infinitytechnologies.com" />
      <meta property="og:image" content="https://infinitytechnologies.com/og-image.jpg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    </Helmet>
    <App />
  </HelmetProvider>
);
