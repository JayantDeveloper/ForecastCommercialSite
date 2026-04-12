import Hero from '../components/Hero'
import ProblemSection from '../components/ProblemSection'
import FeaturesSection from '../components/FeaturesSection'
import DemoSection from '../components/DemoSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <DemoSection />
      <CTASection />
      <Footer />
    </main>
  )
}
