// Number of stars to create
const numberOfStars = 200;

// Delay between star appearance (in milliseconds)
const starAppearanceDelay = 500;

// Create stars
for (let i = 0; i < numberOfStars; i++) {
  createStar();
}

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = `${getRandomPosition()}%`;
  star.style.top = `${getRandomPosition()}%`;
  star.style.animationDelay = `${getRandomDelay()}s`;
  document.getElementById('stars').appendChild(star);
}

function getRandomPosition() {
  return Math.random() * 100;
}

function getRandomDelay() {
  return Math.random() * 10;
}