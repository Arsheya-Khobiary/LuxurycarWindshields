import { MapPin, Navigation } from 'lucide-react';

export function Coverage() {
  const areas = [
    { name: 'Central London', details: 'Westminster, City, Kensington & Chelsea, Camden' },
    { name: 'West London', details: 'Hammersmith & Fulham, Ealing, Hounslow, Richmond' },
    { name: 'East London', details: 'Tower Hamlets, Hackney, Newham, Greenwich, Barking & Dagenham' },
    { name: 'North London', details: 'Islington, Barnet, Enfield, Haringey, Waltham Forest' },
    { name: 'South London', details: 'Lambeth, Southwark, Lewisham, Croydon, Bromley, Merton' },
    {
      name: 'Greater London & inner M25 belt',
      details: 'Outer boroughs and just beyond — call with your postcode and we’ll confirm same-day coverage',
    },
  ];

  return (
    <section className="relative border-t border-slate-100 bg-slate-50/90 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-black text-slate-900 md:text-6xl">
              WE MOVE
              <br />
              <span className="bg-gradient-to-r from-violet-700 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                WITH YOU
              </span>
            </h2>

            <p className="mb-8 text-xl font-medium text-slate-600">
              London-based <strong>mobile windscreen replacement</strong>. We cover the whole capital and{' '}
              <strong>all around Greater London</strong> — not a national call centre: we know the roads you’re on.
            </p>

            <div className="mb-8 space-y-4">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-violet-200 hover:shadow-md"
                >
                  <div className="mt-1 shrink-0">
                    <MapPin className="h-5 w-5 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{area.name}</h3>
                    <p className="text-sm text-slate-600">{area.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-r-xl border-l-4 border-violet-600 bg-gradient-to-r from-violet-50/90 to-transparent p-6 shadow-md">
              <div className="flex items-start gap-3">
                <Navigation className="mt-1 h-6 w-6 shrink-0 text-violet-700" />
                <div>
                  <h4 className="mb-2 font-bold text-slate-900">London first — always</h4>
                  <p className="text-sm text-slate-600">
                    Our service is built around <strong>London and Greater London</strong>. If you’re right on the edge
                    of our area, send your postcode on the <a href="#quote" className="font-semibold text-violet-700 underline underline-offset-2">quote form</a> or WhatsApp and we’ll confirm straight away.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-violet-200/80 bg-slate-200 p-8 shadow-[0_12px_48px_-12px_rgba(79,70,229,0.15)]">
              <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85"
                  alt="London city skyline at dusk — mobile windscreen service coverage map for Greater London"
                  className="h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-100/95 via-white/55 to-violet-100/35" />
                <div className="absolute inset-0 bg-violet-900/10 mix-blend-multiply" />
              </div>

              <div className="absolute inset-0 z-[1] opacity-[0.18]">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute h-32 w-32 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border-2 border-violet-500" />
                  <div className="absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/50" />
                  <div className="absolute h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/30" />
                </div>
              </div>

              <div className="relative z-[2] flex h-full flex-col justify-between">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute h-4 w-4 animate-ping rounded-full bg-violet-500" />
                    <div className="relative h-4 w-4 rounded-full bg-violet-600 shadow-lg shadow-violet-500/40" />
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="text-sm font-bold text-violet-700">Central London</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-1/4 left-1/4">
                  <div className="relative">
                    <div className="absolute h-3 w-3 animate-ping rounded-full bg-blue-500 animation-delay-300" />
                    <div className="relative h-3 w-3 rounded-full bg-blue-600 shadow-lg shadow-blue-500/40" />
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="text-xs font-bold text-blue-700">Greater London</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 z-[3] text-center">
                  <div className="rounded-xl border border-violet-200/60 bg-white/95 p-6 shadow-lg backdrop-blur-md">
                    <p className="mb-2 text-2xl font-bold text-slate-900">Same-day mobile</p>
                    <p className="text-sm text-slate-600">Where slots allow — London & Greater London</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
