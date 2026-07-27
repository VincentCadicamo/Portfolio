import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CursorGrid from './components/CursorGrid'
import Home from './pages/Home'
import Projects from './pages/Projects'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <CursorGrid
        fixed
        cellSize={40}
        color="#ffffff"
        radius={80}
        falloff="smooth"
        gridOpacity={0.04}
        holdTime={300}
        fadeDuration={700}
        lineWidth={1.0}
        maxOpacity={0.2}
        clickPulse
        pulseSpeed={1100}
      />
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}
