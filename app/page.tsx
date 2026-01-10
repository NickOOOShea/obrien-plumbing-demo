import Header from '@/components/Header'
import Hero from '@/components/Hero'
import EmergencyBanner from '@/components/EmergencyBanner'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import ServiceAreas from '@/components/ServiceAreas'
import Certifications from '@/components/Certifications'
import Reviews from '@/components/Reviews'
import Gallery from '@/components/Gallery'
import QuoteForm from '@/components/QuoteForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <EmergencyBanner />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <ServiceAreas />
        <Certifications />
        <Reviews />
        <Gallery />
        <QuoteForm />
      </main>
      <Footer />
    </>
  )
}
