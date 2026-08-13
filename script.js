const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function openLetter() {
  document.getElementById("letterBtn").classList.add("hidden");
  document.getElementById("letter").classList.remove("hidden");
}

function toggleMusic() {
  if (music.paused) {
    music.play().then(() => {
      musicBtn.textContent = "❚❚";
    }).catch(() => {
      alert("Add your song as music/our-song.mp3 first.");
    });
  } else {
    music.pause();
    musicBtn.textContent = "♫";
  }
}

function showSurprise() {
  document.getElementById("surprise").classList.remove("hidden");
  createHearts(18);
}

const message = "In a world full of people, somehow... I found you.";
let i = 0;

function typeMessage() {
  const target = document.getElementById("typedText");
  if (i < message.length) {
    target.textContent += message.charAt(i);
    i++;
    setTimeout(typeMessage, 55);
  }
}
setTimeout(typeMessage, 900);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

function createHearts(count = 10) {
  const container = document.querySelector(".hearts");
  for (let n = 0; n < count; n++) {
    const heart = document.createElement("div");
    heart.textContent = Math.random() > .5 ? "♥" : "♡";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.color = Math.random() > .5 ? "#ff7cab" : "#ffb4cf";
    heart.style.fontSize = (12 + Math.random() * 18) + "px";
    heart.style.opacity = ".8";
    heart.style.zIndex = "2";
    heart.style.transition = `transform ${4 + Math.random() * 3}s linear, opacity ${4 + Math.random() * 3}s linear`;
    container.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform = `translateY(-${window.innerHeight + 100}px) rotate(${Math.random()*90-45}deg)`;
      heart.style.opacity = "0";
    });

    setTimeout(() => heart.remove(), 7500);
  }
}

setInterval(() => createHearts(2), 5000);
