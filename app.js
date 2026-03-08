(function () {
  'use strict';

  // Mobile menu toggle (WP-style hamburger)
  var menuBtn = document.getElementById('menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('hidden');
      menuBtn.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Header search toggle
  var searchToggle = document.getElementById('search-toggle');
  var searchform = document.getElementById('searchform');
  if (searchToggle && searchform) {
    searchToggle.addEventListener('click', function () {
      searchform.classList.toggle('hidden');
      if (!searchform.classList.contains('hidden')) {
        document.getElementById('s').focus();
      }
    });
    document.addEventListener('click', function (e) {
      if (!searchform.contains(e.target) && !searchToggle.contains(e.target)) {
        searchform.classList.add('hidden');
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Prevent form submit on demo (optional; remove when you have a backend)
  document.querySelectorAll('#searchform, .search-form, .site-footer form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      var q = form.querySelector('input[type="search"], input[name="s"]');
      if (q && !q.value.trim()) e.preventDefault();
    });
  });
})();
