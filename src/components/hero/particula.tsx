import { lazy, Suspense, useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';

const Particles = lazy(() => import('react-tsparticles'));
export function Particula() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Suspense fallback={<></>}>
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: 'transparent' },
          fpsLimit: 60,
          particles: {
            number: {
              value: 80,
              density: { enable: true, area: 800 },
            },
            color: { value: '#38bdf8' },
            shape: { type: 'circle' },
            opacity: {
              value: 0.2,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: { min: 1, max: 4 },
              anim: { enable: true, speed: 4, size_min: 0.3, sync: false },
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'none',
              random: false,
              straight: false,
              outModes: { default: 'out' },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              resize: true,
            },
            modes: {
              repulse: { distance: 80, duration: 0.4 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      />
    </Suspense>
  );
}
