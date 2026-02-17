import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contacto" className="py-20 px-6 max-w-3xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-slate-900 border border-slate-800 p-10 rounded-3xl shadow-2xl text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          ¿Hablamos de tu <span className="text-cyan-400">próximo proyecto</span>?
        </h2>
        <p className="text-slate-400 mb-10 text-lg">
          Estoy disponible para nuevas oportunidades y colaboraciones.
        </p>

        {/* REEMPLAZA "tu_codigo_unico" con el que te dio Formspree */}
        <form 
          action="https://formspree.io/f/xnjbvbrd" 
          method="POST"
          className="flex flex-col gap-4 text-left"
        >
          <div>
            <label className="text-slate-400 text-sm mb-2 block ml-2">Nombre completo</label>
            <input 
              type="text" 
              name="name"
              required
              placeholder="¿Cómo te llamas?" 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          <div>
            <label className="text-slate-400 text-sm mb-2 block ml-2">Correo electrónico</label>
            <input 
              type="email" 
              name="email"
              required
              placeholder="tu@correo.com" 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          <div>
            <label className="text-slate-400 text-sm mb-2 block ml-2">Mensaje</label>
            <textarea 
              name="message"
              required
              rows="4" 
              placeholder="Cuéntame sobre tu idea..." 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-black py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-95"
          >
            Enviar Mensaje
          </button>
        </form>
      </motion.div>
    </section>
  )
}