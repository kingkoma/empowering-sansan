import { FC } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Achievements from './components/sections/Achievements'

const App: FC = () => {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <main className="w-full">
        <section id="hero" className="w-full">
          <Hero />
        </section>

        <section id="achievements" className="w-full bg-gray-50">
          <Achievements />
        </section>

        <section id="challenges" className="w-full py-20">
          {/* Content will be added later */}
        </section>

        <section id="about" className="w-full py-20">
          {/* Content will be added later */}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
