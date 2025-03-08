import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <FAQ />
      <Contact />
    </>
  );
}

export default HomePage;