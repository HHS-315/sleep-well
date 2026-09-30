import type { ReactNode } from 'react';
import s from './ds.module.css';

type Props = { children: ReactNode; tone?: 'night' | 'day'; dots?: boolean };

export function Eyebrow({ children, tone = 'night', dots = true }: Props) {
  const dot = <span className={s.eyebrowDot} aria-hidden="true" />;
  return (
    <div className={s.eyebrow} style={{ color: tone === 'night' ? 'var(--cream-100)' : 'var(--blue-700)' }}>
      {dots && dot}
      <span>{children}</span>
      {dots && dot}
    </div>
  );
}
