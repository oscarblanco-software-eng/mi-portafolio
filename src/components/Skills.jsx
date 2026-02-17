import { motion } from 'framer-motion';

export default function Skills({ t }) {
  // Configuración de la animación del contenedor (padre)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Tiempo entre la aparición de cada skill
      },
    },
  };

  // Configuración de la animación de cada skill (hijo)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const stack = [
    { name: "React", color: "text-cyan-400", border: "hover:border-cyan-400/50" },
    { name: "JavaScript", color: "text-yellow-500", border: "hover:border-yellow-500/50" },
    { name: "Tailwind CSS", color: "text-blue-400", border: "hover:border-blue-400/50" },
    { name: "Node.js", color: "text-green-500", border: "hover:border-green-500/50" },
    { name: "Git & GitHub", color: "text-orange-600", border: "hover:border-orange-600/50" },
    { name: "Vite", color: "text-purple-400", border: "hover:border-purple-400/50" },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">{t.subtitle}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            {t.description}
          </motion.p>
        </div>

        {/* Grilla de Skills con Animación Stagger */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {stack.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`px-8 py-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800 ${skill.border} rounded-2xl transition-all duration-300 shadow-xl shadow-black/20 group`}
            >
              <span className={`text-lg font-bold ${skill.color} filter brightness-90 group-hover:brightness-110 transition-all`}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}