import { FC } from 'react'
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const App: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex flex-col pt-16">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen">
          {/* Content will be added later */}
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20">
          {/* Content will be added later */}
        </section>

        {/* Challenges Section */}
        <section id="challenges" className="py-20">
          {/* Content will be added later */}
        </section>

        {/* About You Section */}
        <section id="about" className="py-20">
          {/* Content will be added later */}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
