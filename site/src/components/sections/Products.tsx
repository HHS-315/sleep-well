import { useCallback, useEffect, useLayoutEffect, useRef, useState, type FocusEvent } from 'react';
import { ProductCard } from '../ds/ProductCard';
import { SectionHeader } from '../ds/SectionHeader';
import { products } from '../../data/products';
import s from './sections.module.css';

type Metrics = {
  /** horizontal distance the track can travel */
  maxX: number;
  /** height of the sticky panel */
  panelH: number;
  /** sticky `top`; negative when the panel is taller than the viewport so its bottom stays visible */
  top: number;
};

const pad2 = (n: number) => String(n).padStart(2, '0');

/**
 * 02 — The night collection.
 * The section is made (panel height + track overflow) tall; while it scrolls past, the panel
 * sticks and vertical scroll progress is mapped onto a horizontal translate of the card track.
 */
export function Products({ onAdd }: { onAdd: (name: string) => void }) {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [m, setM] = useState<Metrics>({ maxX: 0, panelH: 900, top: 0 });
  const [prog, setProg] = useState(0);
  const mRef = useRef(m);
  mRef.current = m;

  const update = useCallback(() => {
    const section = sectionRef.current;
    const { maxX, top } = mRef.current;
    if (!section || maxX <= 0) return setProg(0);
    const r = section.getBoundingClientRect();
    setProg(Math.min(1, Math.max(0, (top - r.top) / maxX)));
  }, []);

  const measure = useCallback(() => {
    const panel = panelRef.current;
    const track = trackRef.current;
    if (!panel || !track) return;
    const panelH = panel.offsetHeight;
    const next: Metrics = {
      panelH,
      top: Math.min(0, window.innerHeight - panelH),
      maxX: Math.max(0, track.scrollWidth - document.documentElement.clientWidth),
    };
    const cur = mRef.current;
    if (next.maxX !== cur.maxX || next.panelH !== cur.panelH || next.top !== cur.top) {
      mRef.current = next;
      setM(next);
    }
    update();
  }, [update]);

  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (panelRef.current) ro.observe(panelRef.current);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener('resize', measure);
    document.fonts?.ready.then(measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, [update]);

  // Keyboard users: when focus lands on a card that's translated off-screen,
  // scroll the page to the point where that card is in view.
  const onTrackFocus = (e: FocusEvent<HTMLDivElement>) => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const { maxX, top } = mRef.current;
    if (!section || !track || maxX <= 0) return;
    const card = (e.target as HTMLElement).closest<HTMLElement>('[data-card]');
    if (!card) return;
    const vw = document.documentElement.clientWidth;
    const x = -prog * maxX;
    const left = card.offsetLeft + x;
    if (left >= 0 && left + card.offsetWidth <= vw) return;
    const padX = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    const target = Math.min(1, Math.max(0, (card.offsetLeft - padX) / maxX));
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: sectionTop - top + target * maxX, behavior: 'auto' });
  };

  const total = products.length;
  const idx = Math.min(total, 1 + Math.round(prog * (total - 1)));
  const pct = Math.max(prog, 1 / total) * 100;

  return (
    <section
      id="products"
      ref={sectionRef}
      className={s.products}
      style={{ height: m.panelH + m.maxX }}
      aria-labelledby="products-title"
    >
      <div ref={panelRef} className={s.productsPanel} style={{ top: m.top }}>
        <div className={s.productsHead}>
          <SectionHeader id="products-title" number="02" kicker="The night collection" title="Choose your" subtitle="quiet Night." tone="night" />
          <div className={s.productsMeter} aria-hidden="true">
            <div className={s.productsCount}>
              {pad2(idx)}
              <span> / {pad2(total)}</span>
            </div>
            <div className={s.productsBar}>
              <div style={{ width: pct + '%' }} />
            </div>
            <span className={s.productsHint}>Scroll to swipe</span>
          </div>
        </div>
        <div
          ref={trackRef}
          className={s.productsTrack}
          style={{ transform: `translate3d(${-prog * m.maxX}px,0,0)` }}
          onFocus={onTrackFocus}
        >
          {products.map((p) => (
            <div key={p.name} data-card className={s.productsItem}>
              <ProductCard
                image={p.image}
                name={p.name}
                description={p.desc}
                price={p.price}
                originalPrice={p.originalPrice}
                tags={p.tags}
                cta="담기"
                tone="day"
                onAdd={() => onAdd(p.name)}
              />
            </div>
          ))}
        </div>
        <p className={s.productsNotice}>
          건강기능식품이 아닌 일반 식품이며, 질병의 예방 및 치료를 위한 의약품이 아닙니다. 임산부, 수유부, 복용 중인 약이 있는 분은 전문가와 상담 후 섭취하세요.
        </p>
      </div>
    </section>
  );
}
