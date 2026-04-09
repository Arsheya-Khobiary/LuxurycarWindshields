import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gallery31 from '../assets/Image (31).jpg';
import gallery32 from '../assets/Image (32).jpg';
import gallery33 from '../assets/Image (33).jpg';
import gallery34 from '../assets/Image (34).jpg';
import gallery35 from '../assets/Image (35).jpg';
import gallery36 from '../assets/Image (36).jpg';
import gallery37 from '../assets/Image (37).jpg';
import gallery38 from '../assets/Image (38).jpg';
import gallery39 from '../assets/Image (39).jpg';
import gallery40 from '../assets/Image (40).jpg';
import gallery41 from '../assets/Image (41).jpg';
import gallery42 from '../assets/Image (42).jpg';

const GALLERY_SRC = [
  gallery31,
  gallery32,
  gallery33,
  gallery34,
  gallery35,
  gallery36,
  gallery37,
  gallery38,
  gallery39,
  gallery40,
  gallery41,
  gallery42,
];

const GALLERY_CAPTION = 'VIP Windscreens mobile glass replacement in London';

const images = GALLERY_SRC.map((src) => ({
  src,
  alt: GALLERY_CAPTION,
}));

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-50/90 to-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black text-slate-900 md:text-6xl">
            OUR{' '}
            <span className="bg-gradient-to-r from-violet-700 to-blue-600 bg-clip-text text-transparent">WORK</span>
          </h2>
          <p className="text-xl text-slate-600">Replacement work across every type of vehicle we cover in London</p>
        </div>

        <div className="relative">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border-2 border-violet-200 bg-slate-200 shadow-[0_12px_48px_-12px_rgba(79,70,229,0.2)]">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <p className="inline-block rounded-lg bg-black/70 px-4 py-2 text-lg font-semibold text-white backdrop-blur-sm">
                {GALLERY_CAPTION}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border-2 border-slate-200 bg-white/95 p-3 text-slate-900 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:border-violet-300 hover:bg-violet-600 hover:text-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border-2 border-slate-200 bg-white/95 p-3 text-slate-900 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:border-violet-300 hover:bg-violet-600 hover:text-white"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-violet-600 to-blue-600'
                    : 'w-2 bg-slate-400 hover:bg-slate-600'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 md:gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-video overflow-hidden rounded-lg border-2 transition-all ${
                index === currentIndex
                  ? 'scale-[1.02] border-violet-500 shadow-lg shadow-violet-500/15'
                  : 'border-slate-300 hover:border-violet-300'
              }`}
            >
              <img src={image.src} alt="" className="h-full w-full object-cover" />
              {index === currentIndex ? <div className="absolute inset-0 bg-violet-600/15" /> : null}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
