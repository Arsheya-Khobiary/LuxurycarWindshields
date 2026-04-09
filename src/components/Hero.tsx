import { Phone, MessageCircle, ClipboardList } from 'lucide-react';
import logo from '../assets/Image (46).jpg';
import heroBackground from '../assets/Image (45).jpg';
import { HeroTopMarquee } from './HeroTopMarquee';

interface HeroProps {
  whatsappNumber: string;
  phoneNumber: string;
  /** Formatted for display e.g. 07868 000226 */
  displayPhone: string;
}

export function Hero({ whatsappNumber, phoneNumber, displayPhone }: HeroProps) {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/60 pt-[48px] sm:pt-[52px]">
      <HeroTopMarquee />

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-20 right-[15%] h-72 w-72 rounded-full bg-violet-300/16 blur-[100px]" />
        <div className="absolute bottom-0 left-[10%] h-80 w-80 rounded-full bg-blue-300/12 blur-[110px]" />
      </div>

      <div className="absolute inset-0" aria-hidden>
        <img
          src={heroBackground}
          alt=""
          className="h-full w-full object-cover"
        />
        {/* White/slate wash — photo still visible but softened */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/82 via-white/68 to-blue-50/72" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center">
        <div className="mb-8 flex justify-center">
          <div className="rounded-3xl border border-violet-200/80 bg-white/95 p-6 shadow-[0_8px_40px_-8px_rgba(109,40,217,0.15)] ring-1 ring-slate-100 backdrop-blur-sm sm:p-8 md:p-10">
            <img
              src={logo}
              alt="VIP Windscreens London"
              className="h-32 w-auto object-contain sm:h-40 md:h-48 lg:h-52"
            />
          </div>
        </div>

        <h1
          id="vip-windscreens-headline"
          className="mb-4 text-4xl font-black leading-tight text-slate-900 sm:text-5xl md:text-7xl lg:text-8xl"
        >
          PREMIUM MOBILE
          <br />
          <span className="bg-gradient-to-r from-violet-700 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
            WINDSCREEN REPLACEMENT
          </span>
        </h1>

        <p
          id="speakable-summary"
          className="mx-auto mb-10 max-w-3xl text-lg font-semibold text-slate-800 md:text-2xl"
        >
          Car glass and windscreen replacement in London —{' '}
          <strong>complete glass replacement for all vehicle types.</strong>
        </p>

        <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={handleCallClick}
            className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-red-700 px-7 py-4 text-lg font-bold text-white transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-red-500/25 sm:w-auto"
          >
            <div className="absolute inset-0 translate-y-full bg-white/15 transition-transform duration-300 group-hover:translate-y-0" />
            <span className="relative flex items-center justify-center gap-2">
              <Phone className="h-5 w-5 shrink-0" />
              <span className="tracking-tight">{displayPhone}</span>
            </span>
          </button>

          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="w-full rounded-full bg-gradient-to-b from-[#25D366] to-[#128C7E] px-7 py-4 text-lg font-bold text-white shadow-md shadow-green-900/25 transition-all hover:scale-[1.02] hover:brightness-110 sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              <MessageCircle className="h-5 w-5 shrink-0 text-white" />
              WhatsApp us
            </span>
          </button>

          <button
            type="button"
            onClick={scrollToQuote}
            className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-4 text-lg font-bold text-white shadow-lg shadow-violet-500/25 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/30 sm:w-auto"
          >
            <div className="absolute inset-0 translate-y-full bg-white/15 transition-transform duration-300 group-hover:translate-y-0" />
            <span className="relative flex items-center justify-center gap-2">
              <ClipboardList className="h-5 w-5 shrink-0" />
              Request a quote
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-violet-400/80 p-2">
          <div className="h-2 w-1 rounded-full bg-gradient-to-b from-violet-600 to-blue-600" />
        </div>
      </div>
    </section>
  );
}
