import Header from './components/Header'
import HeroSection from './components/HeroSection'
import NorthStarSection from './components/NorthStarSection'
import LeadershipSection from './components/LeadershipSection'
import StatisticsSection from './components/StatisticsSection'
import TransformSection from './components/TransformSection'
import Footer from './components/ImpactSection'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <NorthStarSection />
      <LeadershipSection />
      <StatisticsSection />
      <TransformSection />
      <Footer />
    </div>
  )
}

export default App