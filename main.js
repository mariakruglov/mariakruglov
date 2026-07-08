/* ============================================================
   Maria K — minimal vanilla JS. No dependencies.
     1. Theme toggle (respects system, remembers choice)
     2. Mobile nav drawer
     3. Active page highlight in nav
     4. Footer year
   ============================================================ */
(function () {
  "use strict";

  /* 1. THEME ------------------------------------------------ */
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem("theme"); } catch (e) {}

  var prefersDark = window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  function applyTheme(theme) { root.setAttribute("data-theme", theme); }
  applyTheme(stored || (prefersDark ? "dark" : "light"));

  var toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* 2. MOBILE NAV ------------------------------------------- */
  var menuToggle = document.getElementById("menuToggle");
  var mobileNav = document.getElementById("mobileNav");

  function closeMenu() {
    if (!mobileNav) return;
    mobileNav.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
  }

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function () {
      var open = mobileNav.hidden;
      mobileNav.hidden = !open;
      menuToggle.setAttribute("aria-expanded", String(open));
    });
    mobileNav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeMenu();
    });
  }

  /* 3. ACTIVE PAGE ------------------------------------------
     Marks the nav link matching the current file. Works for
     both the desktop nav and the mobile drawer. */
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a[href], .mobile-nav a[href]").forEach(function (a) {
    var target = a.getAttribute("href").split("/").pop();
    if (target === here) a.setAttribute("aria-current", "page");
  });

  /* 4. YEAR ------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
