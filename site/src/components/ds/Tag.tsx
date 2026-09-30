import type { ReactNode } from 'react';
import s from './ds.module.css';

export type TagVariant = 'outline' | 'solid' | 'night' | 'cream';

const V: Record<TagVariant, { bg: string; fg: string; bd: string }> = {
  outline: { bg: 'transparent', fg: 'var(--blue-700)', bd: 'var(--blue-400)' },
  solid: { bg: 'var(--blue-700)', fg: 'var(--cream-100)', bd: 'var(--blue-700)' },
  night: { bg: 'transparent', fg: 'var(--cream-100)', bd: 'var(--cream-100)' },
  cream: { bg: 'var(--cream-100)', fg: 'var(--blue-700)', bd: 'var(--cream-100)' },
};

export function Tag({ variant = 'outline', children }: { variant?: TagVariant; children: ReactNode }) {
  const v = V[variant];
  return (
    <span className={s.tag} style={{ background: v.bg, color: v.fg, borderColor: v.bd }}>
      {children}
    </span>
  );
}
