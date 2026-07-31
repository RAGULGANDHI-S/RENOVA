import React from 'react';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { FloatingParticles } from '../components/three/FloatingParticles';
import { Hero } from '../components/hero/Hero';
import { About } from '../components/about/About';
import { DetectionDemo } from '../components/detection/DetectionDemo';
import { Workflow } from '../components/workflow/Workflow';
import { Impact } from '../components/impact/Impact';
import { Partners } from '../components/partners/Partners';
import { Testimonials } from '../components/testimonials/Testimonials';
import { FAQ } from '../components/faq/FAQ';
import { Contact } from '../components/contact/Contact';

export const Home = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#090d16' }}>
      <FloatingParticles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <DetectionDemo />
        <Workflow />
        <Impact />
        <Partners />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
