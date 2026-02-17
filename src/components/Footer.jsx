export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Lado Izquierdo: Copyright */}
        <div className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} Oscar Blanco. 
          <span className="block md:inline ml-0 md:ml-2">Casi todos los derechos reservados.</span>
        </div>

        {/* Lado Derecho: Redes Sociales */}
        <div className="flex gap-6">
          <a href="https://github.com/oscarblanco-software-eng" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/oscarblanco-software-eng" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            LinkedIn
          </a>
          <a href="mailto:osccarblanco.ing@gmail.com" className="text-slate-400 hover:text-red-400 transition-colors">
            Email
          </a>
        </div>

      </div>
    </footer>
  )
}