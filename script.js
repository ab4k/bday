document.getElementById("balloonBtn").addEventListener("click", () => {
  for (let i = 0; i < 12; i++) {
    createBalloon();
  }
});

function createBalloon() {
  const container = document.getElementById("balloonContainer");
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  // Random Position
  balloon.style.left = Math.random() * 90 + "%";

  // Random Color
  balloon.style.background = randomColor();

  container.appendChild(balloon);

  // Remove balloon after animation
  setTimeout(() => {
    balloon.remove();
  }, 4000);
}

function randomColor() {
  const colors = [
    "#ff4d4d",
    "#ff7b00",
    "#ffd000",
    "#00c853",
    "#2979ff",
    "#d500f9",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// COUNTDOWN TIMER
const targetDate = new Date("2025-12-07 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}, 1000);

// // AUTO-SCROLL CAROUSEL
// const track = document.querySelector(".carousel-track");
// const images = track.innerHTML;

// // duplicate content to create infinite scroll
// track.innerHTML += images;


const track = document.getElementById("carouselTrack");
let scrollSpeed = 1; // lower = slower

// Duplicate all images 2 times for seamless looping
track.innerHTML += track.innerHTML + track.innerHTML;

function smoothScroll() {
    track.scrollLeft += scrollSpeed;

    // When we reach 1/3 of scrollable width, reset
    if (track.scrollLeft >= track.scrollWidth / 3) {
        track.scrollLeft = 0;
    }
    requestAnimationFrame(smoothScroll);
}

smoothScroll();



document.getElementById("calendarBtn").addEventListener("click", function () {

    const title = "Birthday Celebration";
    const details = "Join us for the birthday celebration!";
    const start = "20251207T000000";
    const end   = "20251208T235900";

    // Intent URL to launch Google Calendar app (Android only)
    const intentURL =
      "intent://com.google.android.calendar/event?action=TEMPLATE" +
      "&text=" + encodeURIComponent(title) +
      "&details=" + encodeURIComponent(details) +
      "&dates=" + start + "/" + end +
      "#Intent;scheme=com.google.android.calendar;package=com.google.android.calendar;end";

    // Open the Google Calendar app
    window.location.href = intentURL;

    // Fallback for devices that cannot open intent
    setTimeout(() => {
        window.open(
          "https://www.google.com/calendar/render?action=TEMPLATE" +
          "&text=" + encodeURIComponent(title) +
          "&details=" + encodeURIComponent(details) +
          "&dates=" + start + "/" + end,
          "_blank"
        );
    }, 600);

});











