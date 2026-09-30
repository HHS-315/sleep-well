const HEADER_OFFSET = 80;

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET, behavior: 'smooth' });
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
