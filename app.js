/* ==========================================================================
   TRIANZA OBRAS Y SERVICIOS S.L. - JAVASCRIPT APP ENGINE
   Mobile Menu Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-active');
    });
  }

  if (navMenu) {
    navMenu.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-active');
      });
    });
  }

  document.querySelectorAll('a.js-email').forEach((link) => {
    const address = `${link.dataset.user}@${link.dataset.domain}`;
    link.href = `mailto:${address}`;
    const textSlot = link.querySelector('.js-email-text');
    if (textSlot) textSlot.textContent = address;
  });
});
