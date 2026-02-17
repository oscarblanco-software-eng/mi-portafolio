export default function Footer({ t }) {
  return (
    <footer className="py-12 border-t border-slate-800 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Lado Izquierdo: Info de Marca y Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-white font-black text-xl mb-2 tracking-tighter">
              OSCAR BLANCO<span className="text-cyan-400">.</span>
            </div>
            <div className="text-slate-500 text-sm">
              © {new Date().getFullYear()} — {t.rights}
            </div>
          </div>

          {/* Centro: Estado de disponibilidad (Remote Work) */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-slate-300 text-xs font-medium tracking-wide uppercase">
                {t.remote}
              </span>
            </div>
            <p className="text-slate-600 text-[10px] mt-3 font-mono">
              {t.code}
            </p>
          </div>

          {/* Lado Derecho: Social Links & Email */}
          <div className="flex gap-6 md:gap-8">
            <a 
              href="https://github.com/TU_USUARIO" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-white transition-all transform hover:-translate-y-1"
            >
              <span className="text-sm font-bold tracking-widest uppercase">Github</span>
            </a>
            <a 
              href="https://linkedin.com/in/TU_USUARIO" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-cyan-400 transition-all transform hover:-translate-y-1"
            >
              <span className="text-sm font-bold tracking-widest uppercase">LinkedIn</span>
            </a>
            {/* NUEVO: Enlace de Correo */}
            <a 
              href="mailto:tu_correo@ejemplo.com" 
              className="text-slate-400 hover:text-cyan-400 transition-all transform hover:-translate-y-1"
            >
              <span className="text-sm font-bold tracking-widest uppercase">Email</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}