import s from './sections.module.css';

export function Toast({ message }: { message: string }) {
  return (
    <div role="status" aria-live="polite" className={s.toastRegion}>
      {message && <div key={message} className={s.toast}>{message}</div>}
    </div>
  );
}
