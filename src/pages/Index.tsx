import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Projects from '@/components/Projects';
import FAQ from '@/components/FAQ';
import HireMe from '@/components/HireMe';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Anush Pradhan | Software Developer Portfolio";
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
        <HireMe />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
