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
