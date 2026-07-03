import { ThemeProvider } from './ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import { useEffect } from 'react'

function App() {
  // Fix for mobile scrolling
  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.height = 'auto';
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-primary text-primary transition-colors duration-300 min-h-screen">
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App