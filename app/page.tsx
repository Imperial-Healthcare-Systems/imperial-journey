import TopBar from "./components/TopBar";
import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import Moments from "./components/Moments";
import Wonders from "./components/Wonders";
import About from "./components/About";
import Features from "./components/Features";
import Identity from "./components/Identity";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RevealOnScroll from "./components/RevealOnScroll";
import JsonLd from "./components/JsonLd";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <SiteHeader />
      <Hero />
      <Moments />
      <Wonders />
      <About />
      <Features />
      <Identity />
      <Services />
      <Stats />
      <Contact />
      <Footer />
      <RevealOnScroll />
      <JsonLd />
    </>
  );
}
