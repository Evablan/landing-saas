import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Features from './components/Features'
import PricingSection from './components/Pricing/PricingSection'
import FAQ from './components/FAQ'
import Logos from './components/Logos'


function App() {


  return (

    <div className="relative min-h-dvh w-full bg-gradient-hero text-white">

      {/* Capas de fondo (no interfieren) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/10 to-transparent"></div>
      <div className="absolute inset-0 bg-particles"></div>
      <Navbar />
      <main className="relative"> {/* relative para estar sobre las capas */}
        <Hero />
        <Logos />
        <Features />
        <PricingSection />
        <FAQ />
      </main>
    </div>
  )
}

export default App
