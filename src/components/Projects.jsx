import { motion } from 'framer-motion'

export default function Projects({ t }) {
  // Nota: Los datos de los proyectos ahora vienen de 't.list' 
  // que definiremos en el archivo de idiomas.
  
  return (
    <section id="proyectos" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-12 text-center"
      >
        {t.title} <span className="text-cyan-400">{t.subtitle}</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.list.map((proy, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
          >
            {/* Contenedor de Imagen */}
            <div className="h-48 mb-6 overflow-hidden rounded-xl relative z-10">
              <img 
                src={proy.imagen} 
                alt={proy.titulo} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Brillo de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            
            <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                {proy.titulo}
            </h3>
            <p className="text-slate-400 mb-6 relative z-10 flex-grow">
                {proy.descripcion}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6 relative z-10">
              {proy.tecnologias.map((tech, i) => (
                <span key={i} className="text-xs font-mono bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">
                  {tech}
                </span>
              ))}
            </div>
            
            <a href={proy.link} className="inline-flex items-center text-white font-bold hover:text-cyan-400 transition-colors relative z-10 mt-auto">
              {t.view} 
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}