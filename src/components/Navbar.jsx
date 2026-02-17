export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-black text-2xl tracking-tighter">
          OB<span className="text-cyan-400">.</span>
        </div>

        {/* Enlaces de navegación */}
        <div className="hidden md:flex gap-8 text-slate-400 font-medium">
          <a href="#inicio" className="hover:text-cyan-400 transition-colors">Inicio</a>
          <a href="#proyectos" className="hover:text-cyan-400 transition-colors">Proyectos</a>
          <a href="#sobre-mi" className="hover:text-cyan-400 transition-colors">Sobre mí</a>
          <a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</a>
        </div>

        {/* Botón de CV o Acción */}
        <button className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all border border-slate-700">
          Descargar CV
        </button>
      </div>
    </nav>
  )
}