import { Button } from '../ds/Button';
import { Eyebrow } from '../ds/Eyebrow';
import { Stars } from './Stars';
import { scrollToId } from '../../lib/scroll';
import floorLamp from '../../assets/textures/floor_lamp_texture.webp';
import s from './sections.module.css';

export function Hero({ starCount = 44 }: { starCount?: number }) {
  return (
    <section className={s.hero} aria-labelledby="hero-title">
      <Stars count={starCount} />
      <div className={s.heroContent}>
        <Eyebrow tone="night">Melatonin for a softer night</Eyebrow>
        <h1 id="hero-title" className={s.heroTitle}>SLEEP WELL</h1>
        <p className={s.heroLead}>
          불이 꺼진 뒤에도 마음이 켜져 있는 밤이 있어요.
          <br />
          하루의 마무리를 위한 작은 한 알을 준비했습니다.
        </p>
        <div className={s.heroActions}>
          <Button variant="cream" onClick={() => scrollToId('products')}>제품 보기</Button>
        </div>
      </div>
      <img className={s.heroHill} src={floorLamp} alt="" fetchPriority="high" />
      <div className={s.scrollHint} aria-hidden="true">Scroll to Explore</div>
    </section>
  );
}
