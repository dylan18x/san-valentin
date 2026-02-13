const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const music = document.getElementById("music");

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
    const padding = 10;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    x = Math.max(padding, x);
    y = Math.max(padding, y);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

yesBtn.addEventListener("click", () => {
    music.play();
    message.innerHTML =
        "Sabía que dirías que sí 💖 Te amo mucho mi Helensita preciosa 🥰";
});

const heartsContainer = document.querySelector(".hearts");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";

    const emojis = ["💖","💕","💗","💓","💞"];
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 22) + "px";
    heart.style.animationDuration = (6 + Math.random() * 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 500);