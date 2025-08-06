import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type ImageSliderProps = {
  images: string[];
  className?: string;
  isDot?: boolean;
};

export function ImageSlider({
  images,
  className,
  isDot = true,
}: ImageSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    mounted
      ? {
          loop: true,
          created(slider) {
            setCurrentSlide(slider.track.details.rel);
          },
          slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
          },
        }
      : undefined
  );
  const sliderInstanceRef = instanceRef;
  return (
    <div className={twMerge(`relative w-full`, className)}>
      <div ref={sliderRef} className='keen-slider overflow-hidden rounded-lg'>
        {images.map((src, i) => (
          <div key={i} className='keen-slider__slide'>
            <img
              src={src}
              alt={`slide-${i}`}
              className='w-full h-full sm:h-96 object-contain'
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => sliderInstanceRef.current?.prev()}
        className='absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded hover:bg-black/70 transition cursor-pointer'
        aria-label='Previous Slide'
      >
        ‹
      </button>
      <button
        onClick={() => sliderInstanceRef.current?.next()}
        className='absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded hover:bg-black/70 transition cursor-pointer'
        aria-label='Next Slide'
      >
        ›
      </button>
      {isDot && (
        <div className='flex justify-center gap-2 mt-4'>
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => sliderInstanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full transition ${
                currentSlide === idx
                  ? 'bg-violet-500 scale-110'
                  : 'bg-zinc-400 hover:bg-violet-400 cursor-pointer'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
