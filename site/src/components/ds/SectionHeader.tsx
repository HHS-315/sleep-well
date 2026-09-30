import s from './ds.module.css';

type Props = {
  number?: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  tone?: 'day' | 'night';
  align?: 'left' | 'center';
  id?: string;
};

export function SectionHeader({ number, kicker, title, subtitle, tone = 'day', align = 'left', id }: Props) {
  return (
    <header
      className={s.sectionHeader}
      style={{
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        color: tone === 'night' ? 'var(--cream-100)' : 'var(--blue-700)',
      }}
    >
      {(number || kicker) && (
        <div className={s.sectionKicker}>
          {number && <span className={s.sectionNumber}>{number}</span>}
          {kicker && <span>{kicker}</span>}
        </div>
      )}
      <h2 className={s.sectionTitle} id={id}>
        {title}
        {subtitle && (
          <>
            <br />
            <em>{subtitle}</em>
          </>
        )}
      </h2>
    </header>
  );
}
