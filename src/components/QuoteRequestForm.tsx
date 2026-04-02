import { useMemo, useState, type FormEvent } from 'react';
import { MessageCircle, Send, Smartphone } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { UK_CAR_GLASS_OPTIONS } from '../data/ukCarGlass';
import { buildQuoteWhatsAppMessage } from '../lib/buildQuoteMessage';
import { smsHref, whatsappDigits } from '../lib/phone';

interface QuoteRequestFormProps {
  whatsappNumber: string;
}

export function QuoteRequestForm({ whatsappNumber }: QuoteRequestFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [registration, setRegistration] = useState('');
  const [glassId, setGlassId] = useState('');
  const [error, setError] = useState<string | null>(null);

  const waDigits = whatsappDigits(whatsappNumber);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !phone.trim() || !registration.trim() || !glassId) {
      setError('Please fill in every field, including which glass you need.');
      return;
    }

    const message = buildQuoteWhatsAppMessage({
      name: name.trim(),
      phone: phone.trim(),
      registration: registration.replace(/\s/g, ''),
      glassId,
    });

    const url = `https://wa.me/${waDigits}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  const smsLink = useMemo(() => {
    if (!name.trim() || !phone.trim() || !registration.trim() || !glassId) return null;
    const plain = buildQuoteWhatsAppMessage({
      name: name.trim(),
      phone: phone.trim(),
      registration: registration.replace(/\s/g, ''),
      glassId,
    }).replace(/\*/g, '');
    return smsHref(whatsappNumber, plain);
  }, [name, phone, registration, glassId, whatsappNumber]);

  return (
    <section
      id="quote"
      className="relative scroll-mt-24 border-t border-slate-200 bg-gradient-to-b from-white via-violet-50/30 to-white py-20 md:py-24"
      aria-labelledby="quote-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/60 to-transparent" />

      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-12">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-violet-700">
            Instant quote
          </p>
          <h2
            id="quote-heading"
            className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
          >
            Request a{' '}
            <span className="bg-gradient-to-r from-violet-700 to-blue-600 bg-clip-text text-transparent">
              quote
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Same-day appointments where possible. <strong className="text-red-600">24/7</strong> for emergencies.
            Tell us your vehicle and postcode — we&apos;ll respond quickly.
          </p>
          <p className="mt-3 text-sm font-semibold text-red-600">24/7 available</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200/90 bg-white/95 p-6 shadow-[0_20px_50px_-20px_rgba(79,70,229,0.15)] backdrop-blur-sm sm:p-8 md:p-10"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="quote-name" className="text-slate-800">
                Full name
              </Label>
              <Input
                id="quote-name"
                name="name"
                autoComplete="name"
                placeholder="e.g. Alex Taylor"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-11 border-slate-200 bg-white text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="quote-phone" className="text-slate-800">
                Phone number
              </Label>
              <Input
                id="quote-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="e.g. 07868 000226"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-11 border-slate-200 bg-white text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="quote-reg" className="text-slate-800">
                Vehicle registration <span className="font-normal text-slate-500">(number plate)</span>
              </Label>
              <Input
                id="quote-reg"
                name="registration"
                autoComplete="off"
                placeholder="e.g. AB12 CDE"
                value={registration}
                onChange={(e) => setRegistration(e.target.value.toUpperCase())}
                className="h-11 border-slate-200 bg-white font-mono text-base uppercase tracking-wider"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="quote-glass" className="text-slate-800">
                Which glass?
              </Label>
              <select
                id="quote-glass"
                name="glass"
                value={glassId}
                onChange={(e) => setGlassId(e.target.value)}
                className="border-input bg-input-background focus-visible:ring-ring/50 h-11 w-full rounded-md border px-3 text-base text-slate-900 shadow-none outline-none focus-visible:ring-[3px] md:text-sm"
              >
                <option value="">Select the glass you need (UK terms)</option>
                {UK_CAR_GLASS_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {glassId ? (
                <p className="text-sm leading-snug text-slate-500">
                  {UK_CAR_GLASS_OPTIONS.find((g) => g.id === glassId)?.ukDescription}
                </p>
              ) : null}
            </div>

            {error ? (
              <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
                {error}
              </p>
            ) : null}

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <Button
                type="submit"
                size="lg"
                className="h-12 flex-1 gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-base font-bold text-white hover:from-emerald-700 hover:to-emerald-800 sm:min-w-[200px]"
              >
                <Send className="h-5 w-5" />
                Get quote — WhatsApp
              </Button>
              {smsLink ? (
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="h-12 gap-2 rounded-xl border-slate-300 text-base font-semibold"
                  asChild
                >
                  <a href={smsLink}>
                    <Smartphone className="h-5 w-5 text-slate-600" />
                    Send by text (SMS)
                  </a>
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  disabled
                  className="h-12 gap-2 rounded-xl border-slate-200 text-base font-semibold text-slate-400"
                >
                  <Smartphone className="h-5 w-5" />
                  Send by text (SMS)
                </Button>
              )}
            </div>

            <p className="flex items-start gap-2 text-xs leading-relaxed text-slate-500">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              <span>
                <strong>Get quote — WhatsApp</strong> opens WhatsApp with your details ready to send. Use{' '}
                <strong>Send by text</strong> on your phone if you prefer SMS (same message). Standard message
                rates may apply.
              </span>
            </p>

            <ul className="border-t border-slate-100 pt-6 text-sm text-slate-600">
              <li className="flex gap-2 py-1">
                <span className="text-violet-600">✓</span>
                OEM-quality and pattern glass to UK standards
              </li>
              <li className="flex gap-2 py-1">
                <span className="text-violet-600">✓</span>
                ADAS camera recalibration where required after windscreen work
              </li>
              <li className="flex gap-2 py-1">
                <span className="text-violet-600">✓</span>
                Mobile fitting — home, work, or roadside in London &amp; Greater London
              </li>
            </ul>
          </div>
        </form>
      </div>
    </section>
  );
}
