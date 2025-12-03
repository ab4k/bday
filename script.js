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

// AUTO-SCROLL CAROUSEL
const track = document.querySelector(".carousel-track");
const images = track.innerHTML;

// duplicate content to create infinite scroll
track.innerHTML += images;


document.getElementById("calendarBtn").addEventListener("click", function () {

    const title = "Birthday Celebration";
    const details = "Join us in celebrating the birthday!";
    
    // Set your event time here (Google Calendar needs UTC format without punctuation)
    const start = "20250210T180000"; 
    const end   = "20250210T230000";

    const url =
      "https://www.google.com/calendar/render?action=TEMPLATE" +
      "&text=" + encodeURIComponent(title) +
      "&details=" + encodeURIComponent(details) +
      "&dates=" + start + "/" + end;

    window.open(url, "_blank");
});




