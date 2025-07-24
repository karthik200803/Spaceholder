var sidenav = document.querySelector(".side-nav");

function opennav() {
    sidenav.style.left = "0";
}

function closenav() {
    sidenav.style.left = "-100%";
}

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
