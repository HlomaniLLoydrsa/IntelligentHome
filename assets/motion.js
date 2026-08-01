/**
 * Intelligent Home — Motion System
 * Lightweight, performance-first animations.
 * Uses IntersectionObserver, CSS transforms/opacity only.
 * Respects prefers-reduced-motion.
 */

(function () {
  'use strict';

  // Exit early if user prefers reduced motion
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ─── Scroll Progress Bar ───────────────────────────────────────────
  function initScrollProgress() {
    var bar = document.getElementById('scroll-progress');
    if (!bar) return;

    function updateProgress() {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.transform = 'scaleX(' + (progress / 100) + ')';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // ─── Sticky Header Transitions ─────────────────────────────────────
  function initStickyHeader() {
    var header = document.getElementById('site-header');
    if (!header) return;

    var lastScroll = 0;
    var ticking = false;

    function onScroll() {
      var scrollY = window.scrollY;

      if (scrollY > 40) {
        header.classList.add('header--solid');
        header.classList.add('header--shrink');
      } else {
        header.classList.remove('header--solid');
        header.classList.remove('header--shrink');
      }

      if (scrollY > 10) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }

      lastScroll = scrollY;
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });

    onScroll();
  }

  // ─── Intersection Observer — Reveal Animations ─────────────────────
  function initRevealAnimations() {
    if (reducedMotion) {
      // Show everything immediately
      document.querySelectorAll('[data-animate]').forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = el.dataset.animateDelay || 0;

          setTimeout(function () {
            el.classList.add('is-visible');
          }, parseInt(delay));

          observer.unobserve(el);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('[data-animate]').forEach(function (el) {
      observer.observe(el);
    });
  }

  // ─── Stagger Children ──────────────────────────────────────────────
  function initStaggerAnimations() {
    if (reducedMotion) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var children = entry.target.querySelectorAll('[data-stagger-item]');
          children.forEach(function (child, index) {
            child.style.transitionDelay = (index * 100) + 'ms';
            child.classList.add('is-visible');
          });
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('[data-stagger]').forEach(function (el) {
      observer.observe(el);
    });
  }

  // ─── Lazy Image Fade-In ────────────────────────────────────────────
  function initLazyImageFade() {
    if (reducedMotion) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          img.classList.add('img--loaded');
          observer.unobserve(img);
        }
      });
    }, { threshold: 0.01 });

    document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
      if (img.complete) {
        img.classList.add('img--loaded');
      } else {
        observer.observe(img);
        img.addEventListener('load', function () {
          img.classList.add('img--loaded');
        }, { once: true });
      }
    });
  }

  // ─── Cart Badge Bounce ─────────────────────────────────────────────
  function initCartBadgeBounce() {
    var badge = document.querySelector('.header__cart-badge');
    if (!badge || reducedMotion) return;

    // Observe changes to the badge text
    var mo = new MutationObserver(function () {
      badge.classList.remove('bounce');
      void badge.offsetWidth; // reflow
      badge.classList.add('bounce');
    });

    mo.observe(badge, { childList: true, characterData: true, subtree: true });
  }

  // ─── Smooth Scroll ─────────────────────────────────────────────────
  function initSmoothScroll() {
    if (reducedMotion) return;
    document.documentElement.style.scrollBehavior = 'smooth';
  }

  // ─── Hero Parallax ─────────────────────────────────────────────────
  function initHeroParallax() {
    if (reducedMotion) return;

    var heroImage = document.querySelector('.hero-banner__background .hero-banner__image');
    if (!heroImage) return;

    var ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var scrollY = window.scrollY;
          var rate = scrollY * 0.3;
          heroImage.style.transform = 'translateY(' + rate + 'px) scale(1.05)';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ─── Initialize Everything ─────────────────────────────────────────
  function init() {
    initScrollProgress();
    initStickyHeader();
    initRevealAnimations();
    initStaggerAnimations();
    initLazyImageFade();
    initCartBadgeBounce();
    initSmoothScroll();
    initHeroParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
