import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto flex min-h-[90vh] w-full max-w-7xl flex-col items-center justify-center px-6 pt-10">
      <div className="relative grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="relative z-10 space-y-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
          >
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400" />
            Next‑gen AI voice agent platform
          </motion.div>

          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-balance bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-5xl font-semibold leading-tight text-transparent md:text-6xl"
          >
            Conversational AI that feels human.
          </motion.h1>

          <motion.p
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-lg text-white/70"
          >
            Build, deploy, and scale AI voice agents with real‑time latency, crystal audio, and enterprise‑grade analytics.
          </motion.p>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#pricing"
              className="rounded-lg bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.6)] transition hover:brightness-105"
            >
              Start Free
            </a>
            <a
              href="#features"
              className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10"
            >
              Explore Features
            </a>
          </motion.div>
        </div>

        <div className="relative aspect-square w-full rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent" />
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}
