export default function Skills() {
  const habilidades = [
    { nombre: "React", color: "text-cyan-400", bg: "bg-cyan-400/10" },
    { nombre: "JavaScript", color: "text-yellow-400", bg: "bg-yellow-400/10" },
    { nombre: "Tailwind CSS", color: "text-sky-400", bg: "bg-sky-400/10" },
    { nombre: "Node.js", color: "text-green-400", bg: "bg-green-400/10" },
    { nombre: "Git & GitHub", color: "text-orange-400", bg: "bg-orange-400/10" },
    { nombre: "Vite", color: "text-purple-400", bg: "bg-purple-400/10" },
  ];

  return (
    <section id="sobre-mi" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        Mi Stack <span className="text-cyan-400">Tecnológico</span>
      </h2>
      <p className="text-slate-400 mb-10">
        Estas son las herramientas que utilizo para dar vida a mis proyectos.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {habilidades.map((skill, index) => (
          <div 
            key={index} 
            className={`px-6 py-3 rounded-xl border border-slate-800 ${skill.bg} ${skill.color} font-bold text-lg transition-all hover:scale-110 hover:border-slate-700`}
          >
            {skill.nombre}
          </div>
        ))}
      </div>
    </section>
  )
}
