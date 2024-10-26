import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import MyApproach from './components/MyApproach/MyApproach';
import Loading from './elements/Loader/Loading';

function App() {
  const [showAura, setShowAura] = useState(false);
  const [loading, setLoading] = useState(true); 
  const auraRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    setShowAura(true);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }

    requestRef.current = requestAnimationFrame(() => {
      if (auraRef.current) {
        auraRef.current.style.top = `${y}px`;
        auraRef.current.style.left = `${x}px`;
      }
    });
  };

  const handleMouseLeave = () => {
    setShowAura(false);
  };

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
              <Hero />
              <Projects />
              <Skills />
              <MyApproach />
              <Education />
              <Contact />
              <Footer />
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default App;
