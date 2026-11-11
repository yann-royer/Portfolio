const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const lightbox = document.querySelector("#lightbox");
const lightboxImg = lightbox ? lightbox.querySelector("img") : null;
const lightboxCaption = lightbox ? lightbox.querySelector(".lightbox-caption") : null;
const langButtons = document.querySelectorAll("[data-lang]");
const metaDesc = document.querySelector('meta[name="description"]');
const year = document.querySelector("#year");

const supportedLangs = ["en", "fr", "de"];
let currentLang = "en";
let lightboxCaptionKey = "";

if (year) year.textContent = new Date().getFullYear();

function t(key) {
  return translations[currentLang][key] || translations.en[key] || key;
}

function applyLanguage(lang) {
  currentLang = supportedLangs.includes(lang) ? lang : "en";
  document.documentElement.lang = currentLang;
  localStorage.setItem("lang", currentLang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    el.alt = t(el.dataset.i18nAlt);
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.setAttribute("title", t(el.dataset.i18nTitle));
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
  document.querySelectorAll("[data-caption-key]").forEach((el) => {
    el.dataset.caption = t(el.dataset.captionKey);
  });

  const titleKey = document.body.dataset.titleKey || "meta.title";
  const descKey = document.body.dataset.descKey || "meta.desc";
  document.title = t(titleKey);
  if (metaDesc) metaDesc.setAttribute("content", t(descKey));

  langButtons.forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.lang === currentLang)
    );
  });

  if (lightbox && lightbox.open && lightboxCaptionKey && lightboxCaption) {
    lightboxCaption.textContent = t(lightboxCaptionKey);
  }

  // Skill index (home) and skills.html, defined in skills.js.
  if (typeof renderSkills === "function") renderSkills();
}

function initAutoHeader() {
  if (!header) return;

  let lastY = window.scrollY;
  let hidden = false;

  function menuOpen() {
    return Boolean(nav && nav.classList.contains("is-open"));
  }

  function setHidden(next) {
    if (hidden === next) return;
    hidden = next;
    header.classList.toggle("is-hidden", next);
  }

  function sync() {
    const y = Math.max(0, window.scrollY);
    header.classList.toggle("is-scrolled", y > 8);

    if (menuOpen() || (lightbox && lightbox.open)) {
      setHidden(false);
      lastY = y;
      return;
    }

    const delta = y - lastY;
    lastY = y;

    if (y < 48) {
      setHidden(false);
      return;
    }

    if (delta > 8) setHidden(true);
    else if (delta < -8) setHidden(false);
  }

  window.addEventListener("scroll", sync, { passive: true });
  header.addEventListener("focusin", () => setHidden(false));
  sync();
}

initAutoHeader();

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

if (lightbox && lightboxImg && lightboxCaption) {
  document.querySelectorAll(".shot").forEach((button) => {
    button.addEventListener("click", () => {
      lightboxCaptionKey = button.dataset.captionKey || "";
      lightboxImg.src = button.dataset.full;
      lightboxImg.alt = button.querySelector("img").alt;
      lightboxCaption.textContent = button.dataset.caption || "";
      lightbox.showModal();
    });
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });

  const closeBtn = document.querySelector(".lightbox-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => lightbox.close());
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.open) lightbox.close();
  });

  lightbox.addEventListener("close", () => {
    lightboxImg.src = "";
    lightboxCaptionKey = "";
  });
}

document.querySelectorAll('a[href="#haut"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const instant = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: instant ? "auto" : "smooth" });
    history.replaceState(null, "", "#haut");
  });
});

// Old links such as personal.html#gorider now point to the project's own page.
const legacyProjects = ["rc-car", "gorider", "lap-timer", "alarm"];
const legacyHash = location.hash.slice(1);
if (/personal\.html$/.test(location.pathname) && legacyProjects.includes(legacyHash)) {
  location.replace(`${legacyHash}.html`);
}

const saved = localStorage.getItem("lang");
applyLanguage(supportedLangs.includes(saved) ? saved : "en");
