// قطع/وصل موزیک
function toggleMusic() {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// افکت پارتیکل‌ها
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 60 },
    "color": { "value": "#ff69b4" },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.6,
      "random": true
    },
    "size": {
      "value": 6,
      "random": true
    },
    "move": {
      "enable": true,
      "speed": 2
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "repulse" }
    }
  }
});
