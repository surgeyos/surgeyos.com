import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Link from 'next/link';
import { motion } from 'framer-motion';


export default function HeroSection() {
  // Initialize the tsparticles engine
  const particlesInit = useCallback(async (engine) => {
    // Loads the tsparticles package
    await loadFull(engine);
  }, []);

  // Optional: custom callback when particles are loaded
  const particlesLoaded = useCallback(async (container) => {
    // console.log(container);
  }, []);

  return (
    <header className="relative flex items-center justify-center h-screen overflow-hidden text-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 opacity-90" />

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0"
        options={{
          fullScreen: false,  // Very important to let Particles fill the hero only
          background: {
            color: 'transparent',
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.8,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Hero Content (z-index above particles) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Surgeyos
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto drop-shadow-sm">
          Open-source innovations for surgery robotics, medical simulation, VR, and more!
        </p>
        <div className="mt-8 space-x-4">
          <Link href="/projects" className="inline-block px-6 py-3 bg-white text-pink-600 font-semibold rounded-md hover:bg-gray-100 transition">
            View Projects
          </Link>
          <Link href="/docs" className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition">
            Documentation
          </Link>
        </div>
      </motion.div>
    </header>
  );
}