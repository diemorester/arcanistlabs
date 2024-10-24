import { useState, useEffect } from 'react';
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Marquee from "./components/Marquee";
import NavBar from "./components/NavBar";
import WhatWeDo from "./components/WhatWeDo";
import { PreLoader } from './components/PreLoader';
import backgroundimage from './assets/hero-image.webp'

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloadImages = () => {
      const images = [backgroundimage];
      const loadPromises = images.map((src) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        })
      );

      Promise.all(loadPromises)
        .then(() => {
          setTimeout(() => setLoading(false), 2000);
        })
        .catch((error) => {
          console.error('Image loading failed:', error);
          setLoading(false);
        });
    };

    preloadImages();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); 

    return () => {
      clearTimeout(timer);
    };
  }, [backgroundimage]);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <div className="font-libre">
          <NavBar />
          <HeroSection />
          <Marquee />
          <AboutUs />
          <WhatWeDo />
          <div className="h-screen">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}