import { motion } from 'framer-motion';

export default function Projects({ t }) {
  // Validación de seguridad para evitar el error "Cannot read properties of undefined (reading 'map')"
  if (!t || !t.list) {
    return (
      <div className="py-20 text-center text-slate-500 font-mono">
        Loading projects...
      </div>
    );
  }

  return (
    <section id="proyectos" className="py-24 bg-slate-950 relative">
      {/* Decoración de fondo (Luz sutil) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Encabezado de Sección */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">{t.subtitle}</span>
          </motion.h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Grilla de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.list.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 rounded-3xl overflow-hidden backdrop-blur-sm transition-all duration-500"
            >
              {/* Contenedor de Imagen / Placeholder Visual */}
              <div className="h-52 bg-slate-800 relative overflow-hidden">
                {/* Overlay Gradiente al hacer hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                
                {/* Aquí puedes poner una <img src={project.image} /> más adelante */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-slate-700 font-black text-5xl group-hover:scale-110 transition-transform duration-700">
                    {project.title.charAt(0)}
                   </span>
                </div>
                
                {/* Tags de tecnología sobre la imagen */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 2).map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold text-white bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded-lg border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-7">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 h-12 line-clamp-2">
                  {project.description}
                </p>

                {/* Enlaces con iconos o estilo botón */}
                <div className="flex items-center justify-between mt-auto border-t border-slate-800 pt-5">
                  <a 
                    href={project.repo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
                  >
                    <span>GitHub</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-800 group-hover:bg-cyan-500 text-white group-hover:text-slate-950 px-4 py-2 rounded-xl text-xs font-black transition-all"
                  >
                    DEMO
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}