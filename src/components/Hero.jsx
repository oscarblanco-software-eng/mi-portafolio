import { motion } from 'framer-motion'

export default function Hero({ t }) {
  return (
    <section id="inicio" className="flex flex-col items-center justify-center min-h-screen text-center px-4 relative overflow-hidden">
      
      {/* Luces de fondo ambientales */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Saludo (Hello, my name is / Hola, mi nombre es) */}
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-cyan-400 font-mono mb-4 tracking-widest uppercase text-sm md:text-base"
        >
          {t.greeting}
        </motion.h2>

        {/* Nombre con Gradiente */}
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">
          OSCAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">BLANCO</span>
        </h1>

        {/* Descripción (Traducible desde languages.js) */}
        <p className="text-slate-400 text-lg md:text-2xl max-w-2xl leading-relaxed mb-10">
          {t.subtitle}
        </p>
        
        {/* Botones de acción traducidos */}
        <div className="flex flex-col sm:flex-row gap-5">
          <motion.a
            href="#proyectos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-black py-4 px-10 rounded-full transition-colors shadow-lg shadow-cyan-500/20 text-center"
          >
            {t.btnProjects}
          </motion.a>
          
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-slate-700 hover:border-cyan-400 text-white font-bold py-4 px-10 rounded-full transition-all backdrop-blur-sm text-center"
          >
            {t.btnContact}
          </motion.a>
        </div>
      </motion.div>

      {/* Mouse dinámico (Indicador de Scroll) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
          />
        </div>
      </motion.div>

    </section>
  )
}