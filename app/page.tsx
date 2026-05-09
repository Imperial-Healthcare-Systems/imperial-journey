import TopBar from "./components/TopBar";
import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Features from "./components/Features";
import Identity from "./components/Identity";
import Services from "./components/Services";
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
      <Showcase />
      <About />
      <Features />
      <Identity />
      <Services />
      <Contact />
      <Footer />
      <RevealOnScroll />
      <JsonLd />
    </>
  );
}
