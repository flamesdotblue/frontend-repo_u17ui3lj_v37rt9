import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-3">
          <span className="inline-block h-7 w-7 rounded-md bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-400" />
          <span className="text-sm text-white/70">© {new Date().getFullYear()} Auralex AI. All rights reserved.</span>
        </div>
        <div className="text-sm text-white/60">
          Built with love — modern, minimal, and fast.
        </div>
      </div>
    </footer>
  );
}
