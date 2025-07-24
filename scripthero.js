var sidenav = document.querySelector(".side-nav");

function opennav() {
    sidenav.style.left = "0";
}

function closenav() {
    sidenav.style.left = "-100%";
}

/* ───────── SLIDER WITH FADE ───────── */
let currentSlide = 0;
const slides = document.querySelectorAll('.book-slide');
const dots   = document.querySelectorAll('.dot');
const FADE_MS = 500;                       // match CSS 0.5 s

function showSlide(index) {
  if (index === currentSlide) return;       // nothing to do

  const current = slides[currentSlide];
  const next    = slides[index];

  /* 1. start fading the current slide out */
  current.classList.add('fade-out');

  /* 2. after fade‑out ends, hide current & show next */
  setTimeout(() => {
    current.classList.remove('active', 'fade-out');

    next.classList.add('active');           // fades in via CSS
    dots.forEach((d, i) =>
      d.classList.toggle('active-dot', i === index)
    );

    currentSlide = index;
  }, FADE_MS);
}

function nextSlide() {
  const nxt = (currentSlide + 1) % slides.length;
  showSlide(nxt);
}

function prevSlide() {
  const prv = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prv);
}

function goToSlide(i) {
  showSlide(i);
}
/* ───────── end slider section ───────── */

var buttons = document.querySelectorAll(".butn");

buttons.forEach(function(btn) {
  btn.addEventListener("mouseover", function () {
    btn.style.opacity = "1";
  });

  btn.addEventListener("mouseout", function () {
    btn.style.opacity = "0.6";
  });
});
var searchinput  = document.querySelector(".search-input")

  searchinput.addEventListener("mouseover", function () {
    searchinput.style.opacity = "1";
  });

  searchinput.addEventListener("mouseout", function () {
    searchinput.style.opacity = "0.7";
  });
const searchInput = document.querySelector(".search-input");
const searchResults = document.querySelector(".search-results");
const latestAnimeSection = document.querySelector(".latest-animes");
const popularAnimeSection = document.querySelector(".popular-anime");
const allAnimeCards = document.querySelectorAll(".latest-container, .popular-container");

searchInput.addEventListener("input", function () {
    const keyword = searchInput.value.trim().toLowerCase();

    if (keyword === "") {
        // Reset view
        searchResults.style.display = "none";
        latestAnimeSection.style.display = "flex";
        popularAnimeSection.style.display = "flex";
        allAnimeCards.forEach(card => card.style.display = "block");
    } else {
        searchResults.innerHTML = ""; // Clear previous results
        searchResults.style.display = "flex";
        latestAnimeSection.style.display = "none";
        popularAnimeSection.style.display = "none";

        allAnimeCards.forEach(card => {
            const title = card.querySelector(".title").textContent.toLowerCase();
            const author = card.querySelector(".author").textContent.toLowerCase();
            const searchableText = title + " " + author;

            if (searchableText.includes(keyword)) {
                const clone = card.cloneNode(true); // clone card
                searchResults.appendChild(clone);
            }
        });
    }
});
