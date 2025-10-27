import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ContentSections from './components/ContentSections.jsx';
import Footer from './components/Footer.jsx';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorDown, setCursorDown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    const handleDown = () => setCursorDown(true);
    const handleUp = () => setCursorDown(false);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, []);

  const cursorStyle = useMemo(
    () => ({
      transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`
    }),
    [cursorPos]
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased selection:bg-fuchsia-500/30 selection:text-white">
      {/* Animated gradient background aura */}
      <div className="fixed inset-0 -z-0 overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[60rem] w-[60rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-600/20 via-indigo-500/10 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[40rem] w-[40rem] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/10 via-purple-500/10 to-transparent blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <ContentSections />
      <Footer />

      {/* Custom cursor */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-50 hidden md:block"
        style={cursorStyle}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-md transition-all duration-150 ${
            cursorDown ? 'h-8 w-8 bg-fuchsia-500/40 ring-2 ring-fuchsia-400/60' : 'h-6 w-6 bg-white/10 ring-1 ring-white/30'
          }`}
        />
        <div className="absolute -left-8 -top-8 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/10 via-indigo-500/10 to-cyan-400/10 blur-xl" />
      </div>

      {/* Page loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-neutral-950"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative flex items-center gap-3"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="h-10 w-10 animate-pulse rounded-full bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-400 shadow-[0_0_40px_rgba(168,85,247,0.6)]" />
              <div className="text-xl font-semibold tracking-wide text-white/90">Loading experience…</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
