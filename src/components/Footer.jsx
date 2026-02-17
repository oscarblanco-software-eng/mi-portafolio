import React from 'react';
import { motion } from 'framer-motion';

export default function Footer({ t }) {
  const currentYear = new Date().getFullYear();

  // Validación de seguridad
  if (!t) return null;

  return (
    <footer className="py-16 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Efecto de luz ambiental en el fondo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          
          {/* Isotipo animado en el Footer */}
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
            className="w-12 h-12 mb-6"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path 
                d="M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 Z" 
                fill="none" 
                stroke="url(#footer-gradient)" 
                strokeWidth="4"
              />
              <defs>
                <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
              <text 
                x="50%" y="50%" textAnchor="middle" dy=".3em" 
                className="fill-white font-black text-[24px]"
              >
                OB
              </text>
            </svg>
          </motion.div>

          {/* Redes Sociales (Opcional pero recomendado) */}
          <div className="flex gap-6 mb-8">
            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>

          {/* Textos legales y créditos */}
          <div className="text-center space-y-2">
            <p className="text-slate-400 font-medium">
              © {currentYear} <span className="text-white">Oscar Blanco</span>. {t.rights}
            </p>
            <p className="text-slate-600 text-[10px] uppercase tracking-[0.4em] font-bold">
              {t.developed}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}