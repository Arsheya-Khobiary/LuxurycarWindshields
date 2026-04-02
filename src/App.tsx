import { Hero } from './components/Hero';
import { TrustMetrics } from './components/TrustMetrics';
import { Features } from './components/Features';
import { QuoteRequestForm } from './components/QuoteRequestForm';
import { VehicleTypes } from './components/VehicleTypes';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Coverage } from './components/Coverage';
import { Testimonials } from './components/Testimonials';
import { SeoFaqSection } from './components/SeoFaqSection';
import { formatUkMobileNational } from './lib/phone';

export default function App() {
  const whatsappNumber = '+447868000226';
  const phoneNumber = '+447868000226';
  const displayPhone = formatUkMobileNational(phoneNumber);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50/30 to-white text-slate-900 antialiased">
      <main id="main-content">
        <Hero
          whatsappNumber={whatsappNumber}
          phoneNumber={phoneNumber}
          displayPhone={displayPhone}
        />
        <TrustMetrics />
        <Features />
        <QuoteRequestForm whatsappNumber={whatsappNumber} />
        <VehicleTypes />
        <Services />
        <Gallery />
        <Coverage />
        <SeoFaqSection />
        <Testimonials />
      </main>
    </div>
  );
}
