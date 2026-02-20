// Sticky Navbar effect
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Reveal animation
const cards = document.querySelectorAll('.service-card');

function revealCards() {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);

// Animated Counter
const counters = document.querySelectorAll(".counter");

function runCounter() {
  counters.forEach(counter => {
    const update = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = Math.ceil(target / 100);

      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(update, 20);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
}

let counterStarted = false;

window.addEventListener("scroll", () => {
  const statsSection = document.querySelector(".stat-card");
  if (!statsSection) return;

  const top = statsSection.getBoundingClientRect().top;
  if (top < window.innerHeight && !counterStarted) {
    runCounter();
    counterStarted = true;
  }
});
// Modal Control
function openModal() {
  document.getElementById("serviceModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("serviceModal").style.display = "none";
}

window.addEventListener("click", function(e) {
  const modal = document.getElementById("serviceModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
// Contact form animation
const formElement = document.querySelector(".form-animate");

function revealForm() {
  if (!formElement) return;

  const top = formElement.getBoundingClientRect().top;
  if (top < window.innerHeight - 100) {
    formElement.classList.add("show");
  }
}

window.addEventListener("scroll", revealForm);
window.addEventListener("load", revealForm);
// Typing Animation
const typingElement = document.getElementById("typing-text");

if (typingElement) {

  const words = [
    "Aadhaar & PAN Services",
    "Passport & Visa Assistance",
    "Licensed Currency Exchange",
    "GST & Income Tax Filing",
    "Business Registration Services"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex--);
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex++);
    }

    let typingSpeed = isDeleting ? 50 : 80;

    if (!isDeleting && charIndex === currentWord.length) {
      typingSpeed = 1200; // pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 300;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();
}

