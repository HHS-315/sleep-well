import { Card, type CardTone } from '../ds/Card';
import { SectionHeader } from '../ds/SectionHeader';
import dim from '../../assets/illustrations/ritual-dim.svg';
import take from '../../assets/illustrations/ritual-take.svg';
import rest from '../../assets/illustrations/ritual-rest.svg';
import s from './sections.module.css';

const steps: { image: string; alt: string; kicker: string; title: string; body: string; tone: CardTone }[] = [
  { image: dim, alt: '스탠드 조명의 불빛을 낮추는 여성', kicker: '21:30 — Dim', title: '불빛을 낮추세요.', body: '조명을 한 단계 어둡게, 화면은 잠시 내려두세요. 몸이 밤을 느낄 수 있도록.', tone: 'day' },
  { image: take, alt: '침대에 앉아 물과 함께 영양제를 먹는 여성', kicker: '22:00 — Take', title: '한 알, 물 한 잔.', body: '잠들기 30분 전쯤, 미지근한 물과 함께 천천히 섭취하세요.', tone: 'night' },
  { image: rest, alt: '밤에 매트 위에서 스트레칭하는 여성', kicker: '22:30 — Rest', title: '생각에 착지를.', body: '짧은 스트레칭이나 몇 페이지의 책. 하루를 부드럽게 닫아주세요.', tone: 'blue' },
];

export function Ritual() {
  return (
    <section className={s.ritual} aria-labelledby="ritual-title">
      <SectionHeader id="ritual-title" number="03" kicker="A small evening ritual" title="Slowly," subtitle="into the Night." align="center" />
      <div className={s.ritualGrid}>
        {steps.map((st) => (
          <Card key={st.kicker} image={st.image} imageAlt={st.alt} kicker={st.kicker} title={st.title} tone={st.tone} padding={36}>
            {st.body}
          </Card>
        ))}
      </div>
    </section>
  );
}
