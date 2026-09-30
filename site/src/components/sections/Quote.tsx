import { Stars } from './Stars';
import s from './sections.module.css';

export function Quote() {
  return (
    <section className={s.quote} aria-label="Sleep isn’t rest. It’s maintenance.">
      <Stars count={24} />
      <div className={s.quoteText}>
        “Sleep isn’t rest.
        <br />
        <i>It’s maintenance.</i>”
      </div>
      <p className={s.quoteLead}>잘 자는 밤이 쌓이면, 좋은 아침이 됩니다.</p>
    </section>
  );
}
