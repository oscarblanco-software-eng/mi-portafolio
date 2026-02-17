import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills' // <-- Importar
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <main className="bg-slate-950 min-h-screen selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <Skills /> {/* <-- Agregar aquí */}
      <Projects />
      <Footer />
    </main>
  )
}

export default App