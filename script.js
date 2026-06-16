(function () {
  'use strict';

  const navBrand  = document.getElementById('nav-brand');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu   = document.getElementById('nav-menu');
  const navLinks  = document.querySelectorAll('.nav-link[data-target]');
  const pages     = document.querySelectorAll('.page');

  document.getElementById('copyright-year').textContent = new Date().getFullYear();

  function navigate(targetId) {
    pages.forEach(p => p.classList.remove('active'));
    navLinks.forEach(l => l.classList.remove('active'));

    const target = document.getElementById(targetId);
    if (target) target.classList.add('active');

    const activeLink = document.querySelector(`.nav-link[data-target="${targetId}"]`);
    if (activeLink) activeLink.classList.add('active');

    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');

    window.scrollTo(0, 0);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => navigate(link.dataset.target));
  });

  navBrand.addEventListener('click', () => navigate('page-home'));

  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  });

}());
