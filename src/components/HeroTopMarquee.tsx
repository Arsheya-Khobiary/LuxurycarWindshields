import { useState } from 'react';
import { UK_POPULAR_CAR_BRANDS } from '../data/ukPopularCarBrands';
import { MARQUEE_LOCAL_SVG_PATH } from '../data/marqueeLocalSvgPaths';

const ACCENT_HEX = '6d28d9';

function BrandPill({ name, slug }: { name: string; slug: string | null }) {
  const [broken, setBroken] = useState(false);
  const localPath = MARQUEE_LOCAL_SVG_PATH[name];
  const showCdn = Boolean(slug) && !localPath && !broken;

  return (
    <span
      title={name}
      className="inline-flex h-9 shrink-0 items-center justify-center rounded-full border border-violet-200/90 bg-white/95 px-2.5 shadow-sm backdrop-blur-sm"
    >
      {localPath ? (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          width={24}
          height={24}
          className="h-6 w-6 shrink-0"
        >
          <title>{name}</title>
          <path fill={`#${ACCENT_HEX}`} d={localPath} />
        </svg>
      ) : showCdn ? (
        <img
          src={`https://cdn.simpleicons.org/${slug}/${ACCENT_HEX}`}
          alt=""
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
          loading="lazy"
          decoding="async"
          onError={() => setBroken(true)}
        />
      ) : (
        <span className="max-w-[4.75rem] truncate text-center text-[9px] font-extrabold uppercase leading-tight tracking-wide text-slate-800 sm:max-w-[6rem] sm:text-[10px]">
          {name}
        </span>
      )}
      <span className="sr-only">{name}</span>
    </span>
  );
}

function Track() {
  const count = UK_POPULAR_CAR_BRANDS.length;
  return (
    <div className="hero-marquee-track flex shrink-0 items-center gap-2.5 pr-8">
      <span className="inline-flex shrink-0 items-center rounded-full bg-gradient-to-r from-red-500 to-red-600 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-sm sm:text-xs">
        24/7
      </span>
      <span className="inline-flex shrink-0 items-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-sm sm:text-xs">
        {count} UK marques
      </span>
      <span className="inline-flex shrink-0 items-center rounded-full border border-violet-200 bg-violet-50/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-violet-800 sm:text-xs">
        London &amp; Greater London
      </span>
      {UK_POPULAR_CAR_BRANDS.map((brand) => (
        <BrandPill key={brand.name} name={brand.name} slug={brand.simpleIconSlug} />
      ))}
    </div>
  );
}

export function HeroTopMarquee() {
  return (
    <div className="absolute inset-x-0 top-0 z-20 border-b border-violet-100/80 bg-gradient-to-r from-violet-50/95 via-white/95 to-blue-50/95 shadow-sm backdrop-blur-md">
      <div className="relative overflow-hidden py-2">
        <span className="sr-only">
          Scrolling car manufacturer logos popular in the UK, plus 24/7 and London service areas
        </span>
        <div className="hero-marquee flex w-max max-w-none">
          <Track />
          <Track />
        </div>
      </div>
    </div>
  );
}
