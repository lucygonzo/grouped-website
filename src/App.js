import Nav from './components/Nav';
import Hero from './sections/Hero';
import Tools from './sections/Tools';
import GrowthEngine from './sections/GrowthEngine';
import Features from './sections/Features';
import MoreFeatures from './sections/MoreFeatures';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Tools />
        <GrowthEngine />
        <Features />
        <MoreFeatures />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
