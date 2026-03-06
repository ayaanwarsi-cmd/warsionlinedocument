// ============================================================
//  WARSI ONLINE DOCUMENT — script.js (Enterprise Upgrade 2026)
// ============================================================

/* ---- Loading Overlay (first visit only) ---- */
(function() {
  const overlay = document.getElementById("loadingOverlay");
  if (!overlay) return;
  if (sessionStorage.getItem("visited")) {
    overlay.classList.add("hidden");
  } else {
    sessionStorage.setItem("visited", "true");
    window.addEventListener("load", function() {
      setTimeout(function() {
        overlay.classList.add("hidden");
      }, 2500);
    });
  }
})();

/* ---- Sticky Header ---- */
const header = document.querySelector("header");
if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  });
}

/* ---- Hamburger Menu ---- */
(function() {
  const hamburger = document.getElementById("hamburger");
  const navMenu   = document.getElementById("navMenu");
  const navOverlay = document.getElementById("navOverlay");

  if (!hamburger || !navMenu) return;

  function openNav() {
    hamburger.classList.add("active");
    navMenu.classList.add("open");
    if (navOverlay) navOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    hamburger.setAttribute("aria-expanded", "true");
  }

  function closeNav() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("open");
    if (navOverlay) navOverlay.classList.remove("active");
    document.body.style.overflow = "";
    hamburger.setAttribute("aria-expanded", "false");
  }

  hamburger.addEventListener("click", function() {
    if (navMenu.classList.contains("open")) {
      closeNav();
    } else {
      openNav();
    }
  });

  if (navOverlay) {
    navOverlay.addEventListener("click", closeNav);
  }

  window.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && navMenu.classList.contains("open")) {
      closeNav();
    }
  });

  // Close nav when a link is clicked (mobile)
  navMenu.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", closeNav);
  });
})();

/* ---- Scroll Reveal ---- */
function revealOnScroll() {
  const trigger = window.innerHeight * 0.88;
  document.querySelectorAll(
    ".service-card, .why-card, .trust-card, .form-animate, .how-step"
  ).forEach(function(el) {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ---- Stagger card animations ---- */
window.addEventListener("load", function() {
  document.querySelectorAll(".services-grid").forEach(function(grid) {
    grid.querySelectorAll(".service-card").forEach(function(card, i) {
      card.style.transitionDelay = (i * 0.07) + "s";
    });
  });

  document.querySelectorAll(".how-it-works-grid .how-step").forEach(function(step, i) {
    step.style.transitionDelay = (i * 0.12) + "s";
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

/* ---- Modal form → WhatsApp ---- */
(function() {
  const modalForm = document.getElementById("modalForm");
  if (!modalForm) return;

  modalForm.addEventListener("submit", function(e) {
    e.preventDefault();
    var name    = (document.getElementById("modal-name")    || {}).value || "";
    var mobile  = (document.getElementById("modal-mobile")  || {}).value || "";
    var service = (document.getElementById("modal-service") || {}).value || "";
    var details = (document.getElementById("modal-details") || {}).value || "";

    if (!name || !mobile || !service) {
      alert("Please fill in your name, mobile number, and select a service.");
      return;
    }

    var text =
      "New Service Inquiry:%0A%0A" +
      "Name: "    + encodeURIComponent(name)    + "%0A" +
      "Mobile: "  + encodeURIComponent(mobile)  + "%0A" +
      "Service: " + encodeURIComponent(service) + "%0A" +
      "Details: " + encodeURIComponent(details);

    closeModal();
    window.open("https://wa.me/918860153142?text=" + text, "_blank");
  });
})();

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
document.querySelectorAll("nav a").forEach(function(a) {
  const href = a.getAttribute("href");
  if (href === currentPage) a.classList.add("active");
});
