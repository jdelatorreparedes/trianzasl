/* ==========================================================================
   TRIANZA OBRAS Y SERVICIOS S.L. - JAVASCRIPT APP ENGINE
   Mobile Menu Logic
   ========================================================================== */

function toggleMobileMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('mobile-active');
}

function closeMobileMenu() {
  const navMenu = document.getElementById('nav-menu');
  if (navMenu) navMenu.classList.remove('mobile-active');
}
