export default function Projects() {
  const misProyectos = [
    {
      titulo: "E-Commerce Tech",
      descripcion: "Tienda online con carrito de compras y pagos integrados.",
      tecnologias: ["React", "Tailwind", "Firebase"],
      link: "#"
    },
    {
      titulo: "Dashboard Admin",
      descripcion: "Panel de control con gráficas en tiempo real y gestión de usuarios.",
      tecnologias: ["Vite", "Chart.js", "Tailwind"],
      link: "#"
    },
    {
      titulo: "App de Clima",
      descripcion: "Consulta el clima de cualquier ciudad usando una API externa.",
      tecnologias: ["JavaScript", "Tailwind", "API"],
      link: "#"
    },
  ];

  return (
    <section id="proyectos" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Proyectos <span className="text-cyan-400">Destacados</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {misProyectos.map((proy, index) => (
          <div key={index} className="group relative bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all duration-300">
            {/* Efecto de brillo al fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            
            <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{proy.titulo}</h3>
            <p className="text-slate-400 mb-6 relative z-10">{proy.descripcion}</p>
            
            <div className="flex flex-wrap gap-2 mb-6 relative z-10">
              {proy.tecnologias.map((tech, i) => (
                <span key={i} className="text-xs font-mono bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">
                  {tech}
                </span>
              ))}
            </div>
            
            <a href={proy.link} className="inline-flex items-center text-white font-bold hover:text-cyan-400 transition-colors relative z-10">
              Ver Proyecto 
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="Path 17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}