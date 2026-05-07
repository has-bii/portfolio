import { useRef } from 'react'
import type { CSSProperties, RefObject } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react'

interface ParallaxImageProps {
  src: string
  alt: string
  /** Scroll distance (px) to animate over */
  scrollRange?: number
  /** Max vertical offset (px) */
  yOffset?: number
  /** Start scale → end scale */
  scaleRange?: [number, number]
  /** Enable animated noise grain overlay */
  noise?: boolean
  /** Noise opacity (0–1) */
  noiseOpacity?: number
  className?: string
  containerRef?: RefObject<HTMLElement | null>
}

function NoiseFilter({ id }: { id: string }) {
  return (
    <svg className="absolute h-0 w-0" aria-hidden="true">
      <filter id={id}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
    </svg>
  )
}

export default function ParallaxImage({
  src,
  alt,
  scrollRange = 500,
  yOffset = 150,
  scaleRange = [1.1, 1],
  noise = false,
  noiseOpacity = 0.15,
  className,
  containerRef,
}: ParallaxImageProps) {
  const filterId = useRef(`noise-${Math.random().toString(36).slice(2, 9)}`)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, containerRef ? 1 : scrollRange], [0, yOffset], {
    clamp: false,
  })
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange, {
    clamp: false,
  })

  const overlayStyle: CSSProperties = {
    position: 'absolute',
    inset: '-50%',
    width: '200%',
    height: '200%',
    filter: `url(#${filterId.current})`,
    opacity: noiseOpacity,
    pointerEvents: 'none',
    mixBlendMode: 'overlay',
    zIndex: 1,
    animation: 'noise-shift 0.5s steps(4) infinite',
  }

  return (
    <>
      {noise && <NoiseFilter id={filterId.current} />}
      <motion.img src={src} alt={alt} style={{ y, scale }} className={className} />
      {noise && (
        <style>{`@keyframes noise-shift {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-5%, -5%); }
          50% { transform: translate(5%, -10%); }
          75% { transform: translate(-10%, 5%); }
          100% { transform: translate(5%, 0); }
        }`}</style>
      )}
      {noise && <div style={overlayStyle} />}
    </>
  )
}
