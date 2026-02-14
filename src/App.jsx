function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-900">
      <div className="p-10 border-4 border-cyan-400 rounded-3xl text-center shadow-lg">
        <h1 className="text-5xl font-black text-white uppercase">
          ¡Diseño <span className="text-cyan-400">Activado</span>!
        </h1>
        <p className="text-slate-400 mt-4 text-xl">
          Si ves esto centrado y con borde azul, ya ganamos.
        </p>
      </div>
    </div>
  )
}

export default App