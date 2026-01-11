import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-beige-50 min-h-screen text-stone-800 font-sans selection:bg-gold-400 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;