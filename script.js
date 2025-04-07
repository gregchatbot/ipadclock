
function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  document.getElementById("digital-clock").textContent =
    String(hours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0");

  const hourDeg = (360 / 12) * (hours % 12) + (30 / 60) * minutes;
  const minuteDeg = (360 / 60) * minutes;
  const secondDeg = (360 / 60) * seconds;

  document.getElementById("hour-hand").style.transform = `rotate(${hourDeg}deg)`;
  document.getElementById("minute-hand").style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById("second-hand").style.transform = `rotate(${secondDeg}deg)`;
}

function updateQuote() {
  const quotes = [
    "Inhale confidence. Exhale doubt.",
    "This moment is enough.",
    "Peace is found within.",
    "Breathe in. Breathe out.",
    "Let go. Begin again."
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = quote;
}

function updateWeather() {
  document.getElementById("weather").textContent = "72°F and sunny ☀️";
}

function animateBlob() {
  const canvas = document.getElementById("blob-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let t = 0;
  function draw() {
    t += 0.01;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80 + 10 * Math.sin(t);
    for (let angle = 0; angle <= 2 * Math.PI; angle += 0.05) {
      const x = centerX + radius * Math.cos(angle) * (1 + 0.1 * Math.sin(t + angle * 3));
      const y = centerY + radius * Math.sin(angle) * (1 + 0.1 * Math.cos(t + angle * 2));
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    ctx.fill();
    requestAnimationFrame(draw);
  }
  draw();
}

setInterval(updateTime, 1000);
updateTime();
updateQuote();
updateWeather();
animateBlob();
