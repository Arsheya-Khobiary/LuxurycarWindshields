import type { LucideIcon } from 'lucide-react';
import { Car, CarFront, Cpu, RefreshCcw } from 'lucide-react';
import imgCrackRepair from 'figma:asset/bbc161bc1fc31390f15c0a3cc65937f8aa24a5a4.png';
import imgRearReplacement from 'figma:asset/a4d8ef0d87474662cd76e7630a7f78504b069b4d.png';
import imgVanGlass from 'figma:asset/6ba745b558c7790b0907e078571f8bee67d9d447.png';
import imgSideGlass from '../assets/service-side-glass.jpg';

/** Bundled assets — avoids broken Unsplash / hotlink blocks. */
const services: {
  Icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
}[] = [
  {
    Icon: CarFront,
    title: 'Cracked & damaged windscreens',
    description:
      'Cracks, line-of-sight damage, or failed seals — we replace the screen with the right glass and bonding, mobile to you in London.',
    image: imgCrackRepair,
    imageAlt: 'Windscreen damage — mobile replacement work',
    objectPosition: 'center center',
  },
  {
    Icon: RefreshCcw,
    title: 'Full windscreen replacement',
    description:
      'OEM or same-specification glass, bonded to manufacturer standards — fitted at your home, workplace, or roadside in Greater London.',
    image: imgVanGlass,
    imageAlt: 'Mobile windscreen replacement — vehicle on site in Greater London',
    objectPosition: 'center 42%',
  },
  {
    Icon: Cpu,
    title: 'ADAS recalibration',
    description:
      'Cameras and sensors behind the glass must be recalibrated after many windscreen replacements — we arrange what your vehicle needs.',
    image: imgRearReplacement,
    imageAlt: 'Precision automotive glass work — OEM specification and sensor-safe fitting',
    objectPosition: 'center 38%',
  },
  {
    Icon: Car,
    title: 'Side, rear & quarter glass',
    description:
      'Door windows, rear windscreen, quarter lights, and tailgate glass — correct UK glazing terminology, one mobile team.',
    image: imgSideGlass,
    imageAlt: 'Sports car side profile — door glass and body glazing context',
    objectPosition: 'center 45%',
  },
];

export function Services() {
  return (
    <section className="relative border-t border-slate-100 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black text-slate-900 md:text-6xl">
            MOBILE{' '}
            <span className="bg-gradient-to-r from-violet-700 to-blue-600 bg-clip-text text-transparent">
              REPLACEMENT
            </span>
          </h2>
          <p className="text-xl text-slate-600">
            Professional car glass replacement where you are — London & Greater London
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl border-2 border-slate-200 transition-all shadow-lg hover:border-violet-300 hover:shadow-xl"
            >
              <img
                src={service.image}
                alt={service.imageAlt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ objectPosition: service.objectPosition ?? 'center' }}
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent" />

              <div className="relative flex h-full flex-col justify-end p-6">
                <div className="mb-4 inline-flex w-fit rounded-xl border border-white/50 bg-gradient-to-br from-violet-600 to-blue-600 p-3.5 shadow-lg backdrop-blur-sm">
                  <service.Icon className="h-8 w-8 text-white" strokeWidth={2} aria-hidden />
                </div>

                <h3 className="mb-2 text-2xl font-bold text-slate-900 [text-shadow:0_0_12px_rgba(255,255,255,0.9),0_1px_2px_rgba(255,255,255,0.8)]">
                  {service.title}
                </h3>

                <p className="text-sm font-medium leading-relaxed text-slate-700 [text-shadow:0_0_10px_rgba(255,255,255,0.85)]">
                  {service.description}
                </p>

                <div className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 transform bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-600 transition-transform group-hover:scale-x-100" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-slate-700 md:text-2xl">
            No garages. No waiting.{' '}
            <span className="font-bold text-red-600">We come to you — 24/7 when you need us.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
