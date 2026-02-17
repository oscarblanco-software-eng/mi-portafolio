import { motion } from 'framer-motion' // <-- 1. Importamos la magia

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      
      {/* 2. Envolvemos todo en un motion.div */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Empieza invisible y 50px más abajo
        animate={{ opacity: 1, y: 0 }}  // Termina visible y en su posición original
        transition={{ duration: 0.8 }}  // Tarda 0.8 segundos
        className="flex flex-col items-center"
      >
        <h2 className="text-cyan-400 font-mono mb-4 animate-bounce">
          Hola, mi nombre es
        </h2>
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">
          OSCAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">BLANCO</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-2xl max-w-2xl leading-relaxed">
          Desarrollador Full Stack. Apasionado por crear experiencias digitales 
          modernas, minimalistas y eficientes.
        </p>
        
        <div className="mt-10 flex gap-4">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
            Ver mis proyectos
          </button>
          <button className="border border-slate-700 hover:border-cyan-400 text-white font-bold py-3 px-8 rounded-full transition-all">
            Contactar
          </button>
        </div>
      </motion.div>

    </section>
  )
}