import { useEffect, useState } from 'react';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [fontReady, setFontReady] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setFontReady(true));
  }, []);

  useEffect(() => {
    if (!fontReady) return;

    const duration = 1000;
    const interval = 30;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step + Math.random() * step * 0.5;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setFadeOut(true), 300);
          setTimeout(() => onComplete(), 800);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [fontReady, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full bg-neon-purple/40"
            style={{
              left: `${Math.random() * 100}%`,
              animation: `particle-float ${6 + Math.random() * 8}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Glitch text — показываем после загрузки шрифта, вместе со стартом анимации */}
      <div
        className={`grid select-none px-2 [&>*]:col-start-1 [&>*]:row-start-1 [&>*]:place-self-center transition-opacity duration-300 ${fontReady ? 'opacity-100' : 'opacity-0'}`}
      >
        <h1 className="font-display text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-foreground text-glow-purple whitespace-nowrap">
          SKELETONFX
        </h1>
        <h1
          className="font-display text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-neon-cyan whitespace-nowrap pointer-events-none"
          style={{ animation: 'glitch-1 3s infinite linear' }}
          aria-hidden
        >
          SKELETONFX
        </h1>
        <h1
          className="font-display text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-neon-pink whitespace-nowrap pointer-events-none"
          style={{ animation: 'glitch-2 3s infinite linear' }}
          aria-hidden
        >
          SKELETONFX
        </h1>
      </div>

      {/* Loading bar */}
      <div className="mt-10 w-64 md:w-80">
        <div className="h-0.5 w-full rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan transition-all duration-100"
            style={{
              width: `${progress}%`,
              boxShadow: '0 0 10px hsl(270 80% 60% / 0.6)',
            }}
          />
        </div>
        <p
          className={`mt-3 text-center font-body text-sm text-muted-foreground tracking-[0.3em] uppercase transition-opacity duration-300 ${fontReady ? 'opacity-100' : 'opacity-0'}`}
        >
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Preloader;
