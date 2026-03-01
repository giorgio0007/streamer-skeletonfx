import { useState, useCallback } from 'react';

interface MetroTileProps {
  image: string;
  label: string;
  href: string;
  copyValue?: string;
  delay: number;
  size?: 'normal' | 'wide';
  visible: boolean;
}

const MetroTile = ({
  image,
  label,
  href,
  copyValue,
  delay,
  size = 'normal',
  visible,
}: MetroTileProps) => {
  const [copied, setCopied] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (copyValue) {
        e.preventDefault();
        navigator.clipboard.writeText(copyValue).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        });
      }
    },
    [copyValue]
  );

  const baseClasses = `glass-tile group relative flex flex-col items-center justify-center rounded-lg p-2 cursor-pointer
    transition-all duration-300 hover:scale-105 animate-glow-pulse overflow-hidden
    w-full min-w-0 aspect-[1/2] sm:w-[100px] sm:aspect-auto sm:h-[200px]
    ${size === 'wide' ? 'col-span-2' : ''}
    ${visible ? 'animate-tile-in' : 'opacity-0'}`;

  const content = (
    <>
      <img
        src={image}
        alt={label}
        className="absolute inset-0 w-full h-full object-contain transition-all duration-300 group-hover:scale-105 rounded-lg opacity-80 hover:opacity-100"
      />
      {copied && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center bg-background/95 backdrop-blur-sm rounded-lg animate-copy-tooltip"
          role="status"
          aria-live="polite"
        >
          <span className="font-display text-xs font-bold text-neon-cyan drop-shadow-[0_0_10px_hsl(185_80%_50%_/_0.9)]">
            Номер скопирован
          </span>
        </div>
      )}
    </>
  );

  if (copyValue) {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={baseClasses}
        style={{
          animationDelay: visible ? `${delay}ms` : '0ms',
          animationFillMode: 'forwards',
        }}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClasses}
      style={{
        animationDelay: visible ? `${delay}ms` : '0ms',
        animationFillMode: 'forwards',
      }}
    >
      {content}
    </a>
  );
};

export default MetroTile;
