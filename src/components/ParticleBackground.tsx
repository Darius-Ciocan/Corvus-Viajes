const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  x: `${(index * 37) % 100}%`,
  y: `${(index * 53) % 100}%`,
  size: `${6 + (index % 5) * 3}px`,
  duration: `${8 + (index % 7)}s`,
  delay: `${-(index % 9)}s`,
}))

export function ParticleBackground() {
  return (
    <div className="particles" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={
            {
              '--x': particle.x,
              '--y': particle.y,
              '--size': particle.size,
              '--duration': particle.duration,
              '--delay': particle.delay,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
import type { CSSProperties } from 'react'
