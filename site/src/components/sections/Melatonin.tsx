import { SectionHeader } from '../ds/SectionHeader';
import tunnel from '../../assets/textures/tunnel_texture.webp';
import s from './sections.module.css';

export function Melatonin() {
  return (
    <section className={s.melatonin} aria-labelledby="melatonin-title">
      <div className={s.melatoninText}>
        <SectionHeader id="melatonin-title" number="01" kicker="What is melatonin" title="The hormone" subtitle="of the dark." />
        <p className={s.melatoninLead}>
          멜라토닌은 해가 지고 주변이 어두워질 때 몸이 스스로 만들어내는 호르몬이에요.
          <br />
          몸에게 '이제 쉴 시간'이라고 알려주는 조용한 신호죠.
        </p>
        <p className={s.melatoninBody}>
          늦은 밤의 화면 빛, 불규칙한 일정은 그 신호를 흐리게 만들기도 해요. Sleep Well은 저녁의 리듬을 되찾고 싶은 분들을 위해 만들었습니다.
        </p>
        <blockquote className={s.melatoninQuote}>“You can’t dream in daylight.”</blockquote>
      </div>
      <img className={s.melatoninImage} src={tunnel} alt="" loading="lazy" decoding="async" />
    </section>
  );
}
