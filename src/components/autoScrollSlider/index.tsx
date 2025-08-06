import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import type { KeenSliderInstance } from 'keen-slider'
import { useRef, useEffect } from 'react'

type AutoScrollSliderProps = {
  items: React.ReactNode[]
  className?: string
  interval?: number // tempo entre os slides (em ms)
}

export default function AutoScrollSlider({
  items,
  className = '',
  interval = 3000,
}: AutoScrollSliderProps) {
  const sliderInstanceRef = useRef<KeenSliderInstance | null>(null)

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
    loop: true,
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
    },
    created(slider) {
      sliderInstanceRef.current = slider
    },
  },
  []
  )

  useEffect(() => {
    const intervalId = setInterval(() => {
      sliderInstanceRef.current?.next()
    }, interval)

    return () => clearInterval(intervalId)
  }, [interval])

  return (
    <div className={`relative w-full ${className}`}>
      <div ref={sliderRef} className="keen-slider">
        {items.map((item, i) => (
          <div key={i} className="keen-slider__slide flex justify-center">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
