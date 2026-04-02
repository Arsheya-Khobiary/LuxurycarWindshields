import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS, type Testimonial } from '../data/testimonials';

const REVIEWS_ROW_1 = TESTIMONIALS.slice(0, 25);
const REVIEWS_ROW_2 = TESTIMONIALS.slice(25, 50);

function ReviewCard({ testimonial: { name, vehicle, rating, text, location } }: { testimonial: Testimonial }) {
  return (
    <article
      className="w-[min(100vw-2rem,22rem)] shrink-0 rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-md sm:w-[22rem]"
      aria-label={`Review from ${name}`}
    >
      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
        ))}
      </div>
      <div className="relative mb-4">
        <Quote className="absolute -left-1 -top-1 h-10 w-10 text-violet-200" aria-hidden />
        <p className="relative z-10 text-sm leading-relaxed text-slate-700">&ldquo;{text}&rdquo;</p>
      </div>
      <div className="border-t border-slate-100 pt-4">
        <p className="font-bold text-slate-900">{name}</p>
        <p className="text-sm font-semibold text-violet-700">{vehicle}</p>
        <p className="text-xs text-slate-500">{location}</p>
      </div>
    </article>
  );
}

function MarqueeRow({
  items,
  rowId,
  reverse,
}: {
  items: Testimonial[];
  rowId: '1' | '2';
  reverse?: boolean;
}) {
  return (
    <div className="relative overflow-hidden py-1">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-white via-white/90 to-transparent md:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-white via-white/90 to-transparent md:w-24"
        aria-hidden
      />
      <div className={reverse ? 'reviews-marquee reviews-marquee--reverse flex w-max' : 'reviews-marquee flex w-max'}>
        <div className="reviews-marquee-track flex shrink-0 items-stretch gap-5 pr-5">
          {items.map((t, index) => (
            <div key={`${rowId}-a-${index}`} className="shrink-0">
              <ReviewCard testimonial={t} />
            </div>
          ))}
        </div>
        <div className="reviews-marquee-track flex shrink-0 items-stretch gap-5 pr-5">
          {items.map((t, index) => (
            <div key={`${rowId}-b-${index}`} className="shrink-0">
              <ReviewCard testimonial={t} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const count = TESTIMONIALS.length;

  return (
    <section
      className="relative border-t border-slate-100 bg-gradient-to-b from-white to-slate-50/80 py-16 md:py-20"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto mb-10 max-w-7xl px-6 text-center md:mb-12">
        <h2 id="reviews-heading" className="mb-4 text-4xl font-black text-slate-900 md:text-6xl">
          CLIENT{' '}
          <span className="bg-gradient-to-r from-violet-700 to-blue-600 bg-clip-text text-transparent">
            REVIEWS
          </span>
        </h2>
        <div className="mb-3 flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-7 w-7 fill-amber-400 text-amber-400 md:h-8 md:w-8" aria-hidden />
          ))}
        </div>
        <p className="text-lg text-slate-600 md:text-xl">
          {count} five-star reviews from drivers across London &amp; Greater London
        </p>
      </div>

      <div className="flex flex-col gap-8 md:gap-10">
        <MarqueeRow items={REVIEWS_ROW_1} rowId="1" />
        <MarqueeRow items={REVIEWS_ROW_2} rowId="2" reverse />
      </div>
    </section>
  );
}
