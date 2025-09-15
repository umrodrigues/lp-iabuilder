import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import VideoSection from '@/components/VideoSection'
import BenefitsSection from '@/components/BenefitsSection'
import CourseDetailsSection from '@/components/CourseDetailsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VideoSection />
      <BenefitsSection />
      <CourseDetailsSection />
      <CTASection />
      <Footer />
    </main>
  )
}