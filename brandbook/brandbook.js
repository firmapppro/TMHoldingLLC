(() => {
 const slides = [...document.querySelectorAll('.slide')], links = [...document.querySelectorAll('[data-goto]')];
 let index = 0, overview = false;
 const prev = document.querySelector('#prev'), next = document.querySelector('#next'), all = document.querySelector('#all');
 function update() {
  slides.forEach((slide, i) => { slide.hidden = !overview && i !== index; });
  links.forEach((link, i) => { if (i === index) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current'); });
  document.querySelector('#page-count').textContent = `${String(index + 1).padStart(2,'0')} / ${slides.length}`;
  prev.disabled = index === 0; next.disabled = index === slides.length - 1;
  all.setAttribute('aria-pressed', String(overview)); all.textContent = overview ? 'Single page' : 'View all';
 }
 function fromHash() { const page = Number(location.hash.replace('#page-', '')); index = Math.min(slides.length - 1, Math.max(0, (Number.isFinite(page) && page > 0 ? page : 1) - 1)); update(); }
 function go(n) { index = Math.max(0, Math.min(slides.length - 1, n)); history.replaceState(null, '', `#page-${index + 1}`); update(); slides[index].scrollIntoView({block:'start'}); }
 links.forEach((link, i) => link.addEventListener('click', event => { event.preventDefault(); go(i); }));
 prev.addEventListener('click', () => go(index - 1)); next.addEventListener('click', () => go(index + 1));
 all.addEventListener('click', () => { overview = !overview; update(); });
 document.querySelector('#print').addEventListener('click', () => window.print());
 document.addEventListener('keydown', event => { if (/INPUT|TEXTAREA|SELECT/.test(event.target.tagName) || event.target.isContentEditable) return; if (event.key === 'ArrowRight' || event.key === 'PageDown') { event.preventDefault(); go(index + 1); } if (event.key === 'ArrowLeft' || event.key === 'PageUp') { event.preventDefault(); go(index - 1); } });
 window.addEventListener('hashchange', fromHash); document.body.classList.add('book-enhanced'); fromHash();
})();