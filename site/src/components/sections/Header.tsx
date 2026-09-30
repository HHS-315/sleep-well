import { useEffect, useState } from 'react';
import { Button } from '../ds/Button';
import { scrollToId, scrollToTop } from '../../lib/scroll';
import logo from '../../assets/logo.svg';
import s from './sections.module.css';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={s.header} style={{ background: scrolled ? 'var(--navy-900)' : 'transparent' }}>
      <nav className={s.headerNav} aria-label="주 메뉴">
        <button type="button" className={s.navLink} aria-current="page" onClick={scrollToTop}>Home</button>
      </nav>
      <button type="button" className={s.logoButton} onClick={scrollToTop} aria-label="Sleep Well 홈으로">
        <img src={logo} alt="Sleep Well" />
      </button>
      <div className={s.headerEnd}>
        <Button variant="outline-night" size="sm" onClick={() => scrollToId('products')}>Shop</Button>
      </div>
    </header>
  );
}
