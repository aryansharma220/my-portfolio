import React, { useState, useEffect, useRef, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import Loading from './elements/Loader/Loading';
import { Analytics } from "@vercel/analytics/react"
// import Hackathon from './components/Hackathons/Hackathon';

// Lazy load components
const Hero = React.lazy(() => import('./components/Hero/Hero'));
const Projects = React.lazy(() => import('./components/Projects/Projects'));
const Skills = React.lazy(() => import('./components/Skills/Skills'));
const Education = React.lazy(() => import('./components/Education/Education'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));
const MyApproach = React.lazy(() => import('./components/MyApproach/MyApproach'));
const Certificates = React.lazy(() => import('./components/Certificates/Certificates'));

function App() {
  const [loading, setLoading] = useState(true);
  const [showAura, setShowAura] = useState(false);
  const auraRef = useRef(null);

  // Simulate a loading screen delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => setShowAura(true);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (auraRef.current) {
      auraRef.current.style.top = `${y}px`;
      auraRef.current.style.left = `${x}px`;
    }
  };

  const handleMouseLeave = () => setShowAura(false);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main style={{ position: 'relative', minHeight: '100vh' }}>
          <div className="fade-in">
            <div
              className="bg-aura-effect"
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ position: 'relative', width: '100%', height: '100%' }}
            >
              {showAura && (
                <div
                  ref={auraRef}
                  className="aura-element"
                  style={{
                    position: 'absolute',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    pointerEvents: 'none',
                    transform: 'translate(-50%, -50%)',
                    filter: 'blur(60px)',
                    zIndex: 4
                  }}
                />
              )}
              <Navbar />
              <Suspense fallback={<div>Loading content...</div>}>
                <Hero />
                <Projects />
                <Skills />
                <MyApproach />
                <Certificates />
                {/* <Hackathon /> */}
                <Education />
                <Contact />
                <Footer />
              </Suspense>
            </div>
          </div>
          <Analytics />
        </main>
      )}
    </>
  );
}

export default App;
