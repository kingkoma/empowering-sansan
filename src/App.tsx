import { FC } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Achievements from './components/sections/Achievements'
import Challenges from './components/sections/Challenges'
import AboutYou from './components/sections/AboutYou'
import Contributions from './components/sections/Contributions'

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

        <section id="challenges" className="w-full">
          <Challenges />
        </section>

        <section id="contributions" className="w-full bg-gray-50">
          <Contributions />
        </section>

        <section id="about" className="w-full">
          <AboutYou />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
