import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App