// Theme toggle (works on all pages)
function toggleTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
}

// Load saved theme
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
});

// Language toggle
function switchLang() {
    document.querySelectorAll("[data-en]").forEach(el => {
        el.innerText =
            el.innerText === el.dataset.en
                ? el.dataset.hi
                : el.dataset.en;
    });
}
function filterServices() {
    let input = document.getElementById("serviceSearch").value.toLowerCase();
    let cards = document.querySelectorAll(".service-item");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(input) ? "block" : "none";
    });
}
const counters = document.querySelectorAll('.count');
let counterStarted = false;

window.addEventListener('scroll', () => {
  if (counterStarted) return;

  counters.forEach(counter => {
    const update = () => {
      const target = +counter.getAttribute('data-target');
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

  counterStarted = true;
});
// COUNT UP (ONCE)
let started = false;

window.addEventListener("scroll", () => {
  const stats = document.querySelector(".stats");
  if (!stats) return;

  const top = stats.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (top < screenHeight && !started) {
    document.querySelectorAll(".count").forEach(counter => {
      const target = +counter.dataset.target;
      let current = 0;
      const increment = Math.ceil(target / 100);

      const update = () => {
        current += increment;
        if (current < target) {
          counter.innerText = current;
          setTimeout(update, 20);
        } else {
          counter.innerText = target;
        }
      };
      update();
    });
    started = true;
  }
});
