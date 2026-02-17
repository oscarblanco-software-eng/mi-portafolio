import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ lang, setLang, t }) {
  
  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LADO IZQUIERDO: ISOTIPO */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10">
            <svg viewBox="0 0 100 100" className="w-full h-full transform group-hover:rotate-[15deg] transition-transform duration-500">
              <path d="M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 Z" fill="none" stroke="#1e293b" strokeWidth="2"/>
              <path d="M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 Z" fill="none" stroke="url(#logo-gradient)" strokeWidth="4"/>
              <defs>
                <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
              <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="fill-white font-black text-[26px] tracking-tighter">OB</text>
            </svg>
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-white font-bold text-lg tracking-tight">OSCAR BLANCO</span>
            <span className="text-slate-500 font-mono text-[10px] tracking-[0.2em] uppercase">Full Stack Dev</span>
          </div>
        </div>
        
        {/* CENTRO: NAVEGACIÓN (Desktop solamente) */}
        <div className="hidden md:flex items-center gap-8 text-slate-400 font-medium">
          <a href="#inicio" className="hover:text-cyan-400 transition-colors text-sm uppercase tracking-widest">{t.home}</a>
          <a href="#proyectos" className="hover:text-cyan-400 transition-colors text-sm uppercase tracking-widest">{t.projects}</a>
          <a href="#contacto" className="hover:text-cyan-400 transition-colors text-sm uppercase tracking-widest">{t.contact}</a>
        </div>

        {/* LADO DERECHO: SELECTOR (Mobile + Desktop) Y BOTÓN CV */}
        <div className="flex items-center gap-4">
          
          {/* BOTÓN DE IDIOMA - Ahora visible en todas las pantallas */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 px-3 py-1.5 rounded-full transition-all group"
          >
            <div className="relative w-5 h-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={lang}
                  initial={{ rotateY: -90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full rounded-full overflow-hidden border border-slate-700"
                >
                  {lang === 'en' ? (
                    <svg viewBox="0 0 750 500" className="w-full h-full object-cover">
                      <rect width="750" height="500" fill="#c60b1e"/><rect width="750" height="250" y="125" fill="#ffc400"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 741 390" className="w-full h-full object-cover">
                      <rect width="741" height="390" fill="#3c3b6e"/><path d="M0,30h741M0,90h741M0,150h741M0,210h741M0,270h741M0,330h741" stroke="#fff" strokeWidth="30"/><rect width="296" height="210" fill="#3c3b6e"/>
                    </svg>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            <span className="text-[10px] font-bold text-slate-300 group-hover:text-cyan-400">
              {lang === 'en' ? 'ES' : 'EN'}
            </span>
          </button>

          {/* BOTÓN CV */}
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/CV_Oscar_Blanco.pdf" 
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-tighter transition-all"
          >
            {t.cv}
          </motion.a>
        </div>

      </div>
    </nav>
  );
}