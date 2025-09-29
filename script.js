const $ = (s)=>document.querySelector(s);
const el = (t,c)=>{const e=document.createElement(t); if(c) e.className=c; return e;};

function renderCards() {
  const data = window.PORTFOLIO_DATA;
  const pc = $("#project-cards");
  const bc = null;

  // Do not auto-inject projects; cards are statically authored in HTML to keep a 3–3 split

  // blog removed from layout
}
document.addEventListener('DOMContentLoaded', ()=>{
  renderCards();
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', ()=>{
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Cycle heading font demo
  // Heading font: keep Cabin Sketch as default; old option commented in HTML

  // Theme toggle with preference persistence
  const themeBtn = document.querySelector('.theme-toggle');
  const applyTheme = (t)=>{
    if (t === 'light') {
      document.documentElement.setAttribute('data-theme','light');
      localStorage.setItem('pref-theme','light');
      if (themeBtn) themeBtn.textContent = '☾';
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('pref-theme','dark');
      if (themeBtn) themeBtn.textContent = '☼';
    }
  };

  const saved = localStorage.getItem('pref-theme');
  if (saved) applyTheme(saved);
  if (themeBtn) {
    themeBtn.addEventListener('click', ()=>{
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      applyTheme(isLight ? 'dark' : 'light');
    });
  }
});
