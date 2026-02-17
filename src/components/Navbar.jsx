import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ lang, setLang, t }) {
  
  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Tu Logo Actual */}
        <div className="text-white font-black text-2xl tracking-tighter cursor-pointer">
          OB<span className="text-cyan-400">.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-slate-400 font-medium">
          <a href="#inicio" className="hover:text-cyan-400 transition-colors">{t.home}</a>
          <a href="#proyectos" className="hover:text-cyan-400 transition-colors">{t.projects}</a>
          <a href="#contacto" className="hover:text-cyan-400 transition-colors">{t.contact}</a>
          
          {/* BOTÓN CON ANIMACIÓN DE GIRO */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-3 bg-slate-900 border border-slate-700 hover:border-cyan-500/50 px-4 py-2 rounded-full transition-all group overflow-hidden"
          >
            {/* Contenedor de la bandera con AnimatePresence para suavidad */}
            <div className="relative w-5 h-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={lang} // El key es vital para que Framer sepa cuándo animar
                  initial={{ rotateY: -90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: 90, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full h-full rounded-full overflow-hidden border border-slate-700"
                >
                  {lang === 'en' ? (
                    /* Bandera de España */
                    <svg viewBox="0 0 750 500" className="w-full h-full object-cover">
                      <rect width="750" height="500" fill="#c60b1e"/>
                      <rect width="750" height="250" y="125" fill="#ffc400"/>
                    </svg>
                  ) : (
                    /* Bandera de USA */
                    <svg viewBox="0 0 741 390" className="w-full h-full object-cover">
                      <rect width="741" height="390" fill="#3c3b6e"/>
                      <path d="M0,30h741M0,90h741M0,150h741M0,210h741M0,270h741M0,330h741" stroke="#fff" strokeWidth="30"/>
                      <rect width="296" height="210" fill="#3c3b6e"/>
                    </svg>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-300 group-hover:text-cyan-400 uppercase">
              {lang === 'en' ? 'ES' : 'EN'}
            </span>
          </button>
        </div>

        {/* Botón CV */}
        <a href="/CV_Oscar_Blanco.pdf" download className="bg-slate-100 hover:bg-cyan-500 text-slate-950 px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-cyan-500/20">
          {t.cv}
        </a>
      </div>
    </nav>
  );
}