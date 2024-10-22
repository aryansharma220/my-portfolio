import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  const [auraPosition, setAuraPosition] = useState({ x: 0, y: 0 });
  const [showAura, setShowAura] = useState(false);
  const [loading, setLoading] = useState(true); // State for loader
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

        <div className='loaderStyle'>
          <div className="orbital">
            <div className="ringOne"></div>
            <div className="ringTwo"></div>
            <div className="ringThree"></div>
            <div className="core"></div>
            <div className="spin"></div>
          </div>
          <div className="loader">
            <span className="loader-text">Loading...</span>
          </div>
        </div>
      ) : (
        <main style={{ position: 'relative', minHeight: '100vh' }}>
          <div className="bg-mesh" />
          <div className="bg-dots fade-in">
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
            </div>
          </div>
        </main>
      )}
    </>
  );
}


export default App;
