// Small UX touches layered on top of the al-folio theme.
(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Fade-in on scroll for publication rows, news, and teaching cards.
  var targets = document.querySelectorAll('.publications .row, .teaching-card, .teaching-section, .news-item, .cv-pub, .cv-item, .cv-award');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    targets.forEach(function (el) {
      el.classList.add('reveal');
      io.observe(el);
    });
  }

  // Animated previews: only play the GIFs that are on screen, so a page of
  // large GIFs does not keep decoding frames in the background. Each GIF is
  // frozen to a still frame when off-screen and restarted when visible again.
  var gifs = document.querySelectorAll('img.preview[src$=".webp"]');
  if (!reduceMotion && 'IntersectionObserver' in window && gifs.length) {
    var gifIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var img = e.target;
        if (e.isIntersecting) {
          if (img.dataset.src && img.getAttribute('src') !== img.dataset.src) img.src = img.dataset.src;
        } else if (img.complete && img.naturalWidth) {
          img.dataset.src = img.dataset.src || img.getAttribute('src');
          var c = document.createElement('canvas');
          c.width = img.naturalWidth; c.height = img.naturalHeight;
          try {
            c.getContext('2d').drawImage(img, 0, 0);
            img.src = c.toDataURL('image/jpeg', 0.8);
          } catch (err) { /* cross-origin: leave animating */ }
        }
      });
    }, { threshold: 0 });
    gifs.forEach(function (g) { g.dataset.src = g.getAttribute('src'); gifIo.observe(g); });
  }

  // CV: highlight the section currently in view in the side nav.
  var navLinks = document.querySelectorAll('.cv-nav a');
  if (navLinks.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
        });
      });
    }, { rootMargin: '-15% 0px -70% 0px' });
    document.querySelectorAll('.cv-section').forEach(function (s) { spy.observe(s); });
  }

  // Home: fade the navbar brand in as the big page title scrolls under the bar.
  var homeBrand = document.querySelector('.navbar-brand-home');
  var homeTitle = document.querySelector('.post-title');
  var navbar = document.getElementById('navbar');
  if (homeBrand && homeTitle && navbar) {
    var ticking = false;
    var update = function () {
      var r = homeTitle.getBoundingClientRect();
      var navH = navbar.offsetHeight;
      var p = Math.min(1, Math.max(0, 1 - (r.bottom - navH) / r.height));
      homeBrand.style.opacity = p.toFixed(3);
      homeBrand.style.transform = 'translateY(' + ((1 - p) * 10).toFixed(1) + 'px)';
      homeBrand.style.pointerEvents = p < 0.5 ? 'none' : '';
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  // Page transitions: if the brand is showing when leaving home, morph from it
  // (not from the off-screen title) into the next page's brand.
  window.addEventListener('pageswap', function (e) {
    if (!e.viewTransition || !homeBrand || !homeTitle) return;
    if (parseFloat(homeBrand.style.opacity || '0') > 0.5) {
      homeBrand.style.viewTransitionName = 'site-name';
      homeTitle.style.viewTransitionName = 'none';
    }
  });

  // Protected email links carry the address in data attributes (not in the HTML);
  // rebuild it on click and open the mail client, alongside the plugin's copy-to-clipboard.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('.al-email-protect');
    if (!a || !a.dataset.eu || !a.dataset.ed) return;
    window.location.href = 'mailto:' + a.dataset.eu + '@' + a.dataset.ed;
  });

  // Open external links in a new tab safely.
  document.querySelectorAll('article a[href^="http"]').forEach(function (a) {
    if (a.hostname !== location.hostname) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
  });
})();
