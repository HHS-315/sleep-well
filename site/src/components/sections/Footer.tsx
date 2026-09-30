import lockup from '../../assets/logo-lockup.avif';
import s from './sections.module.css';

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerInner}>
        <div className={s.footerTop}>
          <div className={s.footerLogo}>
            <img src={lockup} alt="Sleep Well" />
          </div>
          <p className={s.footerTagline}>
            하루의 끝을 조금 더 부드럽게.
            <br />
            Sleep Well은 저녁의 리듬을 되찾고 싶은 사람들을 위한 멜라토닌 브랜드입니다.
          </p>
        </div>
        <div className={s.footerBottom}>
          <div className={s.footerLinks}>
            {/* TODO: replace with the brand's Instagram URL */}
            <a href="#" className={s.footerLink}>Instagram</a>
          </div>
          <span className={s.footerCopy}>© SLEEP WELL | 2026</span>
        </div>
      </div>
    </footer>
  );
}
