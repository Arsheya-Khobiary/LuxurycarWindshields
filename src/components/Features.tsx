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
    glow: 'shadow-lg shadow-amber-500/25 md:shadow-[0_12px_40px_-8px_rgba(234,88,12,0.5)]',
    ring: 'ring-2 ring-amber-300/50',
  },
  {
    disc: 'bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-700',
    glow: 'shadow-lg shadow-emerald-500/20 md:shadow-[0_12px_40px_-8px_rgba(5,150,105,0.45)]',
    ring: 'ring-2 ring-emerald-300/45',
  },
  {
    disc: 'bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600',
    glow: 'shadow-lg shadow-blue-500/20 md:shadow-[0_12px_40px_-8px_rgba(37,99,235,0.4)]',
    ring: 'ring-2 ring-sky-300/45',
  },
  {
    disc: 'bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700',
    glow: 'shadow-lg shadow-violet-500/25 md:shadow-[0_12px_40px_-8px_rgba(109,40,217,0.45)]',
    ring: 'ring-2 ring-violet-300/45',
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
      aria-labelledby="features-heading"
    >
      <h2 id="features-heading" className="sr-only">
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
        {/* 2×2 on small screens for readable line lengths; single row from md */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const a = ACCENTS[index]!;
            return (
              <article
                key={feature.title}
                className="group relative flex min-h-0 min-w-0 flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] ring-1 ring-slate-100/90 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-violet-200/80 hover:shadow-[0_20px_44px_-14px_rgba(109,40,217,0.15)] sm:p-6 md:rounded-3xl md:p-8 lg:p-9"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div
                  className={`mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl md:mb-6 md:h-[5.5rem] md:w-[5.5rem] md:rounded-2xl lg:h-28 lg:w-28 ${a.disc} ${a.glow} ${a.ring}`}
                >
                  <feature.icon
                    className="h-7 w-7 text-white md:h-12 md:w-12 lg:h-14 lg:w-14"
                    strokeWidth={2.25}
                    aria-hidden
                  />
                </div>

                <h3 className="mb-2 text-base font-black leading-snug tracking-tight text-slate-900 sm:text-lg md:mb-3 md:text-xl lg:text-2xl">
                  {feature.title}
                </h3>

                <p className="text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
                  {feature.description}
                </p>

                <div
                  className="pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:inset-x-8"
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
