import type { ReactNode } from 'react';
import s from './ds.module.css';

export type CardTone = 'day' | 'night' | 'blue';

const T: Record<CardTone, { bg: string; fg: string; bd: string }> = {
  day: { bg: 'var(--cream-100)', fg: 'var(--text-body)', bd: 'var(--blue-700)' },
  night: { bg: 'var(--navy-900)', fg: 'var(--cream-100)', bd: 'var(--blue-600)' },
  blue: { bg: 'var(--blue-700)', fg: 'var(--cream-100)', bd: 'var(--blue-700)' },
};

type Props = {
  tone?: CardTone;
  image?: string;
  imageAlt?: string;
  kicker?: string;
  title?: string;
  children?: ReactNode;
  footer?: ReactNode;
  padding?: number;
};

export function Card({ tone = 'day', image, imageAlt = '', kicker, title, children, footer, padding = 30 }: Props) {
  const t = T[tone];
  return (
    <article className={s.card} style={{ background: t.bg, color: t.fg, borderColor: t.bd }}>
      {image && <img className={s.cardImage} src={image} alt={imageAlt} loading="lazy" decoding="async" />}
      <div className={s.cardBody} style={{ padding }}>
        {kicker && <div className={s.cardKicker}>{kicker}</div>}
        {title && (
          <h3 className={s.cardTitle} style={{ color: tone === 'day' ? 'var(--blue-700)' : 'var(--cream-100)' }}>{title}</h3>
        )}
        {children && <div className={s.cardText}>{children}</div>}
        {footer}
      </div>
    </article>
  );
}
