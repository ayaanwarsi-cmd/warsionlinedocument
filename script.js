// ============================================================
//  WARSI ONLINE DOCUMENT — script.js
// ============================================================

/* ---- Sticky Header ---- */
const header = document.querySelector("header");
if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  });
}

/* ---- Scroll Reveal (service-card & why-card) ---- */
function revealOnScroll() {
  const trigger = window.innerHeight * 0.88;
  document.querySelectorAll(".service-card, .why-card, .trust-card, .form-animate").forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ---- Stagger card animations ---- */
window.addEventListener("load", () => {
  document.querySelectorAll(".services-grid").forEach(grid => {
    grid.querySelectorAll(".service-card").forEach((card, i) => {
      card.style.transitionDelay = (i * 0.07) + "s";
    });
  });
});

/* ---- Modal ---- */
function openModal() {
  const modal = document.getElementById("serviceModal");
  if (modal) modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("serviceModal");
  if (modal) modal.style.display = "none";
}

window.addEventListener("click", function(e) {
  const modal = document.getElementById("serviceModal");
  if (modal && e.target === modal) modal.style.display = "none";
});

window.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closeModal();
});

/* ---- Typing Animation ---- */
const typingEl = document.getElementById("typing-text");
if (typingEl) {
  const words = [
    "Aadhaar & PAN Services",
    "Passport & Visa Assistance",
    "Licensed Currency Exchange",
    "GST & Income Tax Filing",
    "Business Registration Services",
    "DSC, IEC & Trademark Services"
  ];

  let wordIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const word = words[wordIdx];
    typingEl.textContent = deleting
      ? word.substring(0, charIdx--)
      : word.substring(0, charIdx++);

    let speed = deleting ? 45 : 75;

    if (!deleting && charIdx === word.length + 1) {
      speed = 1400;
      deleting = true;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      wordIdx = (wordIdx + 1) % words.length;
      speed = 350;
    }

    setTimeout(type, speed);
  }

  type();
}

/* ---- Active nav link ---- */
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("nav a").forEach(a => {
  const href = a.getAttribute("href");
  if (href === currentPage) a.classList.add("active");
});
