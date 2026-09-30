import { useCallback, useEffect, useRef, useState } from 'react';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { Melatonin } from './components/sections/Melatonin';
import { Products } from './components/sections/Products';
import { Ritual } from './components/sections/Ritual';
import { Quote } from './components/sections/Quote';
import { Footer } from './components/sections/Footer';
import { Toast } from './components/sections/Toast';

const TOAST_MS = 2200;

export default function App() {
  const [toast, setToast] = useState('');
  const timer = useRef<number | undefined>(undefined);

  const showToast = useCallback((msg: string) => {
    window.clearTimeout(timer.current);
    setToast(msg);
    timer.current = window.setTimeout(() => setToast(''), TOAST_MS);
  }, []);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  // TODO: wire to a real cart; for now adding only confirms with a toast.
  const addToCart = useCallback((name: string) => showToast(`${name}을(를) 장바구니에 담았어요.`), [showToast]);

  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Melatonin />
        <Products onAdd={addToCart} />
        <Ritual />
        <Quote />
      </main>
      <Footer />
      <Toast message={toast} />
    </div>
  );
}
