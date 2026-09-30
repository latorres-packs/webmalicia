// Menú móvil
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// Año dinámico en el footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Transición (fundido) al cambiar de página del menú
document.querySelectorAll('a[href$=".html"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    // No interceptar si se abre en pestaña nueva o con teclas modificadoras
    if (link.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey) return;

    const href = link.getAttribute('href');
    if (!href) return;

    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = href;
    }, 220);
  });
});
