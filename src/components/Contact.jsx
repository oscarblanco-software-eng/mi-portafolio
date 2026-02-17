import { motion } from 'framer-motion'

export default function Contact({ t }) {
  return (
    <section id="contacto" className="py-20 px-6 max-w-3xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl text-center relative overflow-hidden"
      >
        {/* Adorno visual de fondo */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-[80px] rounded-full"></div>

        <h2 className="text-4xl font-bold text-white mb-4 relative z-10">
          {t.title} <span className="text-cyan-400">{t.accent}</span>
        </h2>
        <p className="text-slate-400 mb-10 text-lg relative z-10">
          {t.desc}
        </p>

        {/* REEMPLAZA "tu_codigo_unico" con el de Formspree */}
        <form 
          action="https://formspree.io/f/tu_codigo_unico" 
          method="POST"
          className="flex flex-col gap-5 text-left relative z-10"
        >
          <div>
            <label className="text-slate-400 text-sm mb-2 block ml-2 font-medium">
              {t.labelName}
            </label>
            <input 
              type="text" 
              name="name"
              required
              placeholder={t.placeholderName} 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all"
            />
          </div>

          <div>
            <label className="text-slate-400 text-sm mb-2 block ml-2 font-medium">
              {t.labelEmail}
            </label>
            <input 
              type="email" 
              name="email"
              required
              placeholder={t.placeholderEmail} 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all"
            />
          </div>

          <div>
            <label className="text-slate-400 text-sm mb-2 block ml-2 font-medium">
              {t.labelMessage}
            </label>
            <textarea 
              name="message"
              required
              rows="4" 
              placeholder={t.placeholderMessage} 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all resize-none"
            ></textarea>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-black py-4 rounded-xl transition-colors shadow-lg shadow-cyan-500/20"
          >
            {t.send}
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
}