import type { LucideIcon } from 'lucide-react';
import { Shield, Zap, BadgePercent, Wrench } from 'lucide-react';

type FeatureAccent = {
  disc: string;
  glow: string;
  ring: string;
};

const ACCENTS: FeatureAccent[] = [
  {
    disc: 'bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600',
    glow: 'shadow-[0_12px_40px_-8px_rgba(234,88,12,0.55)]',
    ring: 'ring-2 ring-amber-300/60',
  },
  {
    disc: 'bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-700',
    glow: 'shadow-[0_12px_40px_-8px_rgba(5,150,105,0.5)]',
    ring: 'ring-2 ring-emerald-300/50',
  },
  {
    disc: 'bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600',
    glow: 'shadow-[0_12px_40px_-8px_rgba(37,99,235,0.45)]',
    ring: 'ring-2 ring-sky-300/50',
  },
  {
    disc: 'bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700',
    glow: 'shadow-[0_12px_40px_-8px_rgba(109,40,217,0.5)]',
    ring: 'ring-2 ring-violet-300/50',
  },
];

export function Features() {
  const features: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[] = [
    {
      icon: Zap,
      title: 'Fast response',
      description: 'Quick replies and mobile bookings — we move when you need glass sorted',
    },
    {
      icon: BadgePercent,
      title: 'Competitive pricing',
      description: 'Straightforward quotes with transparent, fair pricing on replacement glass',
    },
    {
      icon: Wrench,
      title: 'Expert installation',
      description: 'Trained automotive glaziers — bonded fittings to professional standards',
    },
    {
      icon: Shield,
      title: '5-year warranty',
      description: 'Workmanship guarantee on replacement glass we supply and fit',
    },
  ];

  return (
    <section
      className="relative overflow-hidden border-t border-slate-200/90 bg-gradient-to-b from-white via-violet-50/40 to-slate-50/90 py-24 md:py-28"
      aria-labelledby="features-intro-heading"
    >
      <h2 id="features-intro-heading" className="sr-only">
        Why choose VIP Windscreens
      </h2>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-1/4 top-0 h-[380px] w-[380px] rounded-full bg-violet-400/25 blur-[100px]" />
        <div className="absolute -right-1/4 bottom-0 h-[320px] w-[320px] rounded-full bg-blue-400/20 blur-[90px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mx-auto mb-14 max-w-3xl text-center text-base font-medium leading-relaxed text-slate-600 sm:text-lg md:mb-16">
          We specialise in full windscreen and car glass replacement only, delivering high-quality results with a
          convenient mobile service — at your <strong className="font-semibold text-slate-900">home</strong>,{' '}
          <strong className="font-semibold text-slate-900">workplace</strong>, or{' '}
          <strong className="font-semibold text-slate-900">roadside</strong>.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {features.map((feature, index) => {
            const a = ACCENTS[index]!;
            return (
              <article
                key={feature.title}
                className="group relative flex flex-col rounded-3xl border border-slate-200/90 bg-white/95 p-8 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)] ring-1 ring-slate-100/80 backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-violet-200/90 hover:shadow-[0_20px_50px_-12px_rgba(109,40,217,0.18)] md:p-9"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div
                  className={`mb-7 flex h-[5.5rem] w-[5.5rem] shrink-0 items-center justify-center rounded-2xl ${a.disc} ${a.glow} ${a.ring} md:h-28 md:w-28`}
                >
                  <feature.icon
                    className="h-12 w-12 text-white md:h-14 md:w-14"
                    strokeWidth={2.25}
                    aria-hidden
                  />
                </div>

                <h3 className="mb-3 text-2xl font-black tracking-tight text-slate-900 md:text-[1.65rem]">
                  {feature.title}
                </h3>

                <p className="text-base font-medium leading-relaxed text-slate-600 md:text-[1.05rem]">
                  {feature.description}
                </p>

                <div
                  className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
