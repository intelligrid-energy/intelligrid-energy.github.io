/* ============================================================
   IntelliGrid Energy Dynamic — Shared site behavior
   ============================================================ */

const WHATSAPP_NUMBER = "919433379717"; // +91 94333 79717

// Image paths in data/content.js are stored root-relative (e.g. "images/logo.svg").
// Pages inside /pages/ need a "../" prefix to reach them; the homepage doesn't.
// Use `${ASSET_PREFIX}${path}` whenever rendering an image src from SITE_DATA.
const ASSET_PREFIX = window.location.pathname.includes("/pages/") ? "../" : "";

/* ---------- Mobile nav + dropdowns ---------- */
function initNav() {
  const toggle = document.querySelector(".mobile-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("mobile-open"));
  }
  document.querySelectorAll(".nav-links > li").forEach((li) => {
    const btn = li.querySelector(":scope > button");
    if (!btn) return;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const wasOpen = li.classList.contains("open");
      document.querySelectorAll(".nav-links > li.open").forEach((o) => o.classList.remove("open"));
      if (!wasOpen) li.classList.add("open");
    });
  });
  document.addEventListener("click", () => {
    document.querySelectorAll(".nav-links > li.open").forEach((o) => o.classList.remove("open"));
  });
}

/* ---------- Theme toggle (light / dark) ---------- */
function initTheme() {
  const root = document.documentElement;
  const saved = localStorageSafeGet("igd-theme");
  if (saved) root.setAttribute("data-theme", saved);
  const btn = document.querySelector("#themeToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorageSafeSet("igd-theme", next);
    });
  }
}
// Artifacts environments can't use localStorage — guard for that, degrade gracefully on real hosting too.
function localStorageSafeGet(key) { try { return window.localStorage.getItem(key); } catch (e) { return null; } }
function localStorageSafeSet(key, val) { try { window.localStorage.setItem(key, val); } catch (e) { /* no-op */ } }

/* ---------- Back to top ---------- */
function initBackToTop() {
  const btn = document.querySelector(".back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 480);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- Reveal-on-scroll ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal-on-scroll");
  if (!("IntersectionObserver" in window) || !els.length) {
    els.forEach((el) => el.classList.add("reveal"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach((el) => io.observe(el));
}

/* ============================================================
   WhatsApp Buy Now / Enquiry workflow
   ============================================================ */

/**
 * Opens the enquiry modal for a given product.
 * product: { id, name, price, image, availability }
 */
function openEnquiryModal(product) {
  const overlay = document.querySelector("#enquiryModal");
  if (!overlay) return;
  overlay.dataset.productId = product.id;
  overlay.dataset.productName = product.name;
  overlay.dataset.productPrice = product.price || "Request a Quote";
  overlay.dataset.productAvailability = product.availability || "Contact for availability";

  const previewName = overlay.querySelector(".modal-product-preview .p-name");
  const previewMeta = overlay.querySelector(".modal-product-preview .p-meta");
  const previewImgWrap = overlay.querySelector(".modal-product-preview .p-image");
  if (previewName) previewName.textContent = product.name;
  if (previewMeta) previewMeta.textContent = `ID: ${product.id} • ${product.price || "Request a Quote"}`;
  if (previewImgWrap) {
    previewImgWrap.innerHTML = product.image
      ? `<img src="${product.image}" alt="${product.name}">`
      : `<div class="ph placeholder-photo" style="display:flex;align-items:center;justify-content:center;background:var(--surface-alt);border:1px dashed var(--border);">IMG</div>`;
  }

  const form = overlay.querySelector("#enquiryForm");
  if (form) form.reset();
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeEnquiryModal() {
  const overlay = document.querySelector("#enquiryModal");
  if (!overlay) return;
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

function buildWhatsAppMessage(overlay, formData) {
  const productName = overlay.dataset.productName || "[Product Name]";
  const productId = overlay.dataset.productId || "[Product ID]";
  const price = overlay.dataset.productPrice || "[Price]";
  const quantity = formData.get("quantity") || "1";
  const name = formData.get("customerName") || "[Customer Name]";
  const institution = formData.get("institution") || "[Institution/Organization]";
  const email = formData.get("email") || "[Email Address]";
  const message = formData.get("message") || "None";

  return (
`Hello IntelliGrid Energy Dynamic Laboratory,

I am interested in purchasing the following product:

Product Name: ${productName}
Product ID: ${productId}
Quantity: ${quantity}
Listed Price: ${price}

Name: ${name}
Institution/Organization: ${institution}
Email: ${email}

Additional Requirements: ${message}

Kindly provide the product details, availability, payment procedure, delivery information, and quotation.

Thank you.`
  );
}

function initEnquiryForm() {
  const form = document.querySelector("#enquiryForm");
  const overlay = document.querySelector("#enquiryModal");
  if (!form || !overlay) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll("[required]").forEach((field) => {
      const errorEl = field.closest(".form-field")?.querySelector(".form-error");
      if (!field.value.trim()) {
        valid = false;
        if (errorEl) errorEl.style.display = "block";
      } else if (errorEl) {
        errorEl.style.display = "none";
      }
    });
    if (!valid) return;

    const formData = new FormData(form);
    const text = buildWhatsAppMessage(overlay, formData);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    const confirmBox = overlay.querySelector("#enquiryConfirm");
    if (confirmBox) confirmBox.style.display = "block";

    const win = window.open(url, "_blank");
    const fallback = overlay.querySelector("#enquiryFallbackLink");
    if (fallback) fallback.href = url;

    if (!win) {
      // Popup blocked — show the fallback link explicitly.
      if (fallback) fallback.style.display = "inline-flex";
    }
  });

  overlay.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", closeEnquiryModal);
  });
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeEnquiryModal();
  });
}

/* Generic direct WhatsApp enquiry (no product context, e.g. Contact page) */
function initGeneralWhatsAppLinks() {
  document.querySelectorAll("[data-whatsapp-general]").forEach((el) => {
    const text = el.dataset.whatsappGeneral ||
      "Hello IntelliGrid Energy Dynamic Laboratory, I would like to enquire about your research laboratory.";
    el.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    el.target = "_blank";
    el.rel = "noopener";
  });
}

/* ---------- Filter chip helper (used on Projects / Publications / Products pages) ---------- */
function initFilterChips(containerSelector, itemSelector, dataAttr) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  container.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      container.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const value = chip.dataset.filter;
      document.querySelectorAll(itemSelector).forEach((item) => {
        const show = value === "all" || item.dataset[dataAttr] === value;
        item.style.display = show ? "" : "none";
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initTheme();
  initBackToTop();
  initReveal();
  initEnquiryForm();
  initGeneralWhatsAppLinks();
});
