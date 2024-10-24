import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Marque from "./components/Marquee";
import NavBar from "./components/NavBar";
import WhatWeDo from "./components/WhatWeDo";

export default function App() {
  return (
    <div className="font-libre">
      <NavBar />
      <HeroSection />
      <Marque />
      <AboutUs />
      <WhatWeDo />
      <div className="h-screen z-0">
        <Footer />
      </div>
    </div>
  )
}