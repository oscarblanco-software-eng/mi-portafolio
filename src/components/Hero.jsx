import { motion } from 'framer-motion'

export default function Hero({ t }) {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Luces de fondo ambientales */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* COLUMNA IZQUIERDA: TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400 font-mono mb-4 tracking-[0.3em] uppercase text-sm"
          >
            {t.greeting}
          </motion.h2>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
            OSCAR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              BLANCO
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            {t.subtitle}
          </p>
          
          <div className="flex flex-wrap gap-5">
            <motion.a
              href="#proyectos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-black py-4 px-8 rounded-2xl transition-all shadow-lg shadow-cyan-500/20"
            >
              {t.btnProjects}
            </motion.a>
            
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-slate-800 hover:border-slate-600 text-white font-bold py-4 px-8 rounded-2xl transition-all backdrop-blur-sm"
            >
              {t.btnContact}
            </motion.a>
          </div>
        </motion.div>

        {/* COLUMNA DERECHA: TU FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* Decoración geométrica detrás de la foto */}
          <div className="absolute w-[80%] h-[80%] border-2 border-cyan-500/20 rounded-[2rem] rotate-6 animate-pulse"></div>
          <div className="absolute w-[80%] h-[80%] border-2 border-blue-500/20 rounded-[2rem] -rotate-6"></div>

          {/* Contenedor de la Imagen */}
          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] overflow-hidden rounded-[3rem] border-2 border-slate-800 bg-slate-900/50 backdrop-blur-xl group">
            <img 
              src="/profile_picture.png" // CAMBIA ESTO por el nombre real de tu archivo
              alt="Oscar Blanco"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            />
            
            {/* Overlay de brillo profesional */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          </div>

          {/* Badge de experiencia o stack flotante */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-5 -right-5 md:right-0 bg-slate-900 border border-slate-700 p-4 rounded-2xl shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white font-bold text-sm tracking-tight uppercase">Open to Work</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}