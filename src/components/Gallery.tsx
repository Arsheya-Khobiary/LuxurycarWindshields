import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import galleryImg1 from 'figma:asset/6ba745b558c7790b0907e078571f8bee67d9d447.png';
import galleryImg2 from 'figma:asset/bbc161bc1fc31390f15c0a3cc65937f8aa24a5a4.png';
import galleryImg3 from 'figma:asset/a4d8ef0d87474662cd76e7630a7f78504b069b4d.png';

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: galleryImg1,
      alt: 'VW van windscreen replacement — before and after'
    },
    {
      src: galleryImg2,
      alt: 'VW van windscreen crack — full replacement'
    },
    {
      src: galleryImg3,
      alt: 'Toyota Rear Windscreen Replacement'
    },
    {
      src: 'https://images.unsplash.com/photo-1666612509064-a129921cda6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW1ib3JnaGluaSUyMHNwb3J0cyUyMGNhcnxlbnwxfHx8fDE3NzQ4ODM5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Luxury sports car windscreen and glass work — mobile service London',
    },
    {
      src: 'https://images.unsplash.com/photo-1661098970259-d89ea2105d72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJjZWRlcyUyMGclMjB3YWdvbiUyMGx1eHVyeXxlbnwxfHx8fDE3NzQ5NzE2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Mercedes G-Wagon windscreen replacement and premium car glass London',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-50/90 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-slate-900">
            OUR{' '}
            <span className="bg-gradient-to-r from-violet-700 to-blue-600 bg-clip-text text-transparent">WORK</span>
          </h2>
          <p className="text-xl text-slate-600">Replacement work across every type of vehicle we cover in London</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Image Display */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border-2 border-violet-200 bg-slate-200 shadow-[0_12px_48px_-12px_rgba(79,70,229,0.2)]">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            
            {/* Image Caption */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-lg font-semibold bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                {images[currentIndex].alt}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border-2 border-slate-200 bg-white/95 p-3 text-slate-900 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:border-violet-300 hover:bg-violet-600 hover:text-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border-2 border-slate-200 bg-white/95 p-3 text-slate-900 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:border-violet-300 hover:bg-violet-600 hover:text-white"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
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

        {/* Thumbnail Preview */}
        <div className="mt-8 grid grid-cols-3 md:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? 'scale-105 border-violet-500 shadow-lg shadow-violet-500/15'
                  : 'border-slate-300 hover:border-violet-300'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 bg-violet-600/15" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}