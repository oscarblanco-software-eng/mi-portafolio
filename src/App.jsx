import { useState } from 'react'
import { translations } from './constants/languages'

// Importación de componentes
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Estado para el idioma (Inglés por defecto)
  const [lang, setLang] = useState('en')

  // Variable de acceso directo a las traducciones actuales
  const t = translations[lang]

  return (
    <main className="bg-slate-950 min-h-screen selection:bg-cyan-500/30 text-slate-200">
      
      {/* Pasamos el idioma actual, la función para cambiarlo y los textos de la Nav */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        t={t.nav} 
      />

      {/* Cada componente recibe su parte correspondiente del diccionario 't' */}
      <Hero t={t.hero} />
      
      {/* Skills puede recibir el idioma si necesitas traducir nombres de categorías */}
      <Skills t={t.skills} />
      
      <Projects t={t.projects} />
      
      <Contact t={t.contact} />
      
      <Footer t={t.footer}/>
      
    </main>
  )
}

export default App