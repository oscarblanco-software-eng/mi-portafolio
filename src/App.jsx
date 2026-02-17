import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects' // <-- Importar

function App() {
  return (
    <main className="bg-slate-950 min-h-screen selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <Projects /> {/* <-- Agregar aquí */}
    </main>
  )
}

export default App