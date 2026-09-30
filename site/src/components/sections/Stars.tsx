import { memo } from 'react';

// Deterministic twinkling starfield laid over the night gradient.
export const Stars = memo(function Stars({ count }: { count: number }) {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {Array.from({ length: count }, (_, i) => {
        const size = i % 5 === 0 ? 4 : 2;
        return (
          <span
            key={i}
            style={{
              position: 'absolute',
              left: ((i * 37.3) % 100) + '%',
              top: ((i * 53.7) % 72) + '%',
              width: size,
              height: size,
              borderRadius: '50%',
              background: i % 7 === 0 ? 'var(--blue-400)' : 'var(--star)',
              animation: `flash ${2 + (i % 3)}s infinite ${(i % 4) * 0.4}s`,
            }}
          />
        );
      })}
    </div>
  );
});
