import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Projects from '@/components/Projects';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SocialLinks from '@/components/SocialLinks';

const Index = () => {
  useEffect(() => {
    document.title = "Dipak Mourya | Software Developer Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Projects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <SocialLinks />
    </div>
  );
};

export default Index;
