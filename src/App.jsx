import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <main className="bg-slate-950 min-h-screen selection:bg-cyan-500/30">
      <Navbar /> {/* <-- La Navbar va aquí */}
      <Hero />
      {/* Aquí iremos agregando las demás secciones (Proyectos, etc) */}
    </main>
  )
}

export default App