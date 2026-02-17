import { motion } from 'framer-motion';

export default function Contact({ t }) {
  // 🛡️ Validación de seguridad para evitar que la app se rompa si t no llega
  if (!t) return null;

  return (
    <section id="contacto" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900/50 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-sm relative overflow-hidden"
      >
       <div className="text-center mb-10 relative z-10 flex flex-col items-center">
        {/* Subtítulo pequeño arriba */}
        <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-2">
         {t.subtitle}
        </span>
  
         {/* Título principal más grande abajo */}
         <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
         {t.title}
          </h2>
  
  <p className="text-slate-400 text-lg max-w-2xl mx-auto">
    {t.description}
  </p>
</div>
        {/* Formulario conectado a Formspree */}
        <form 
          action="https://formspree.io/f/tu_codigo_unico" 
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
        >
          <div className="flex flex-col gap-2">
            <label className="text-slate-300 text-sm font-medium ml-1">
              {t.labelName || "Nombre"}
            </label>
            <input 
              type="text" 
              name="name"
              required
              placeholder={t.placeholderName || "Tu nombre..."} 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-300 text-sm font-medium ml-1">
              {t.labelEmail || "Correo Electrónico"}
            </label>
            <input 
              type="email" 
              name="email"
              required
              placeholder={t.placeholderEmail || "tu@email.com"} 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-slate-300 text-sm font-medium ml-1">
              {t.labelMessage || "Mensaje"}
            </label>
            <textarea 
              name="message"
              required
              rows="4" 
              placeholder={t.placeholderMessage || "Cuéntame sobre tu proyecto..."} 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all resize-none"
            ></textarea>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="md:col-span-2 mt-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/20 uppercase tracking-wider"
          >
            {t.send || "Enviar Mensaje"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}