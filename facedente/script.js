// Face e Dente — interactions
(function () {
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  // Header scroll effect
  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.classList.remove('active');
      });
    });
  }
})();
