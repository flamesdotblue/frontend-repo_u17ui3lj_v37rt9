import React from 'react';
import { Rocket, Cpu, Layers, DollarSign, Info } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home', icon: Rocket },
  { label: 'Features', href: '#features', icon: Cpu },
  { label: 'Solutions', href: '#solutions', icon: Layers },
  { label: 'Pricing', href: '#pricing', icon: DollarSign },
  { label: 'About', href: '#about', icon: Info },
];

export default function Navbar() {
  const onClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="group inline-flex items-center gap-3" onClick={(e) => onClick(e, '#home')}>
          <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-400 shadow-[0_0_28px_rgba(99,102,241,0.6)]" />
          <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-xl font-semibold tracking-tight text-transparent">
            Auralex AI
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => onClick(e, href)}
              className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
            >
              <Icon size={16} className="text-white/60 transition group-hover:text-white" />
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            onClick={(e) => onClick(e, '#pricing')}
            className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
