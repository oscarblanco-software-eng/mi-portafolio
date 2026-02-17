import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact' // <-- Importar
import Footer from './components/Footer'

function App() {
  return (
    <main className="bg-slate-950 min-h-screen selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact /> {/* <-- Agregar aquí */}
      <Footer />
    </main>
  )
}

export default App