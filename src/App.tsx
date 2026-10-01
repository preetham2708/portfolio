import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <Navbar />
      <h1 className="text-5xl font-bold text-white">
        Preetham <span className="text-sky-400">Portfolio</span>
      </h1>
    </div>
  )
}

export default App