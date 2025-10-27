import React from 'react';
import { Cpu, Activity, ShieldCheck, Zap, Headphones, BarChart3, Code2, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Cpu,
    title: 'Neural Voice Core',
    desc: 'Ultra‑natural TTS + ASR with neural prosody and multilingual support.',
  },
  {
    icon: Activity,
    title: 'Real‑time Streaming',
    desc: 'Sub‑200ms latency pipelines with adaptive noise suppression.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    desc: 'SOC2-ready controls, encryption in transit and at rest.',
  },
  {
    icon: BarChart3,
    title: 'Deep Analytics',
    desc: 'Intent, sentiment, and outcome analytics across conversations.',
  },
];

const solutions = [
  { icon: Headphones, title: 'Contact Centers', desc: 'Automate Tier‑1 with human‑like experiences.' },
  { icon: Code2, title: 'Developer Platforms', desc: 'Drop‑in SDKs and APIs for rapid integration.' },
  { icon: Layers, title: 'Ops & IT', desc: 'Intelligent escalations and workflow automations.' },
  { icon: Zap, title: 'Sales & Growth', desc: 'Qualify leads and drive conversions in real time.' },
];

export default function ContentSections() {
  return (
    <>
      {/* Features */}
      <section id="features" className="mx-auto w-full max-w-7xl px-6 py-24">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold text-white">Powerful features</h2>
          <p className="mt-3 text-white/70">Everything you need to craft delightful AI voice interactions.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 via-indigo-500/20 to-cyan-400/20 ring-1 ring-white/10">
                <f.icon className="text-white" size={18} />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-tr from-fuchsia-500/10 via-indigo-500/10 to-cyan-400/10 blur-2xl transition duration-500 group-hover:scale-150" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="mx-auto w-full max-w-7xl px-6 py-24">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold text-white">Solutions that scale</h2>
          <p className="mt-3 text-white/70">Purpose‑built tooling for modern enterprises and teams.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 via-indigo-500/20 to-cyan-400/20 ring-1 ring-white/10">
                <s.icon className="text-white" size={18} />
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <div className="pointer-events-none absolute -left-10 -bottom-10 h-24 w-24 rounded-full bg-gradient-to-tr from-fuchsia-500/10 via-indigo-500/10 to-cyan-400/10 blur-2xl transition duration-500 group-hover:scale-150" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto w-full max-w-7xl px-6 py-24">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold text-white">Simple pricing</h2>
          <p className="mt-3 text-white/70">Start free, scale as you grow. No surprises.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Free */}
          <Plan
            name="Starter"
            price="$0"
            tagline="For trying things out"
            features={[
              '5k monthly characters',
              'Basic analytics',
              'Community support',
            ]}
            cta="Get Started"
            highlight={false}
          />
          {/* Pro */}
          <Plan
            name="Pro"
            price="$49"
            tagline="For growing teams"
            features={['500k characters', 'Priority support', 'Advanced analytics']}
            cta="Start Pro"
            highlight
          />
          {/* Enterprise */}
          <Plan
            name="Enterprise"
            price="Custom"
            tagline="Security & scale"
            features={[
              'SLA + SSO',
              'Dedicated support',
              'Custom deployment',
            ]}
            cta="Contact Sales"
            highlight={false}
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto w-full max-w-7xl px-6 pb-28">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold text-white">About Auralex</h2>
          <p className="mt-4 text-white/70">
            We are a team of engineers, designers, and audio scientists building the future of conversational computing. Our mission is to make AI interactions feel meaningfully human — fast, secure, and delightful.
          </p>
        </motion.div>
      </section>
    </>
  );
}

function Plan({ name, price, tagline, features, cta, highlight }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-2xl border p-6 ${
        highlight
          ? 'border-fuchsia-400/30 bg-gradient-to-b from-fuchsia-500/10 via-indigo-500/5 to-transparent shadow-[0_20px_80px_-30px_rgba(168,85,247,0.5)]'
          : 'border-white/10 bg-white/5'
      }`}
    >
      {highlight && (
        <div className="pointer-events-none absolute right-4 top-4 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-2 py-1 text-[10px] font-medium text-fuchsia-200">
          Popular
        </div>
      )}
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <div className="mt-2 flex items-end gap-2">
        <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-4xl font-bold text-transparent">
          {price}
        </span>
        <span className="text-sm text-white/60">/mo</span>
      </div>
      <p className="mt-2 text-sm text-white/70">{tagline}</p>
      <ul className="mt-6 space-y-2 text-sm text-white/80">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <button className={`w-full rounded-lg px-4 py-2 text-sm font-semibold transition ${
          highlight
            ? 'bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-white hover:brightness-110'
            : 'border border-white/10 bg-white/5 text-white/90 hover:bg-white/10'
        }`}>
          {cta}
        </button>
      </div>
    </motion.div>
  );
}
