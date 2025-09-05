// efeito digitação
const typewriter = document.getElementById("typewriter");
const msg = "Oi... tenho algo pra te contar.";
let i = 0;
function typing() {
  if (i < msg.length) {
    typewriter.textContent += msg.charAt(i);
    i++;
    setTimeout(typing, 70);
  }
}
typing();

// botões e seções
const startBtn = document.getElementById("start");
const quizSection = document.getElementById("quiz-section");
const codeSection = document.getElementById("code-section");
const gameSection = document.getElementById("game-section");
const revealSection = document.getElementById("reveal-section");
const moreSection = document.getElementById("more-section");

startBtn.onclick = () => {
  quizSection.classList.remove("hidden");
  startBtn.style.display = "none";
};

document.getElementById("quiz-next").onclick = () => {
  quizSection.classList.add("hidden");
  codeSection.classList.remove("hidden");
};

document.getElementById("code-check").onclick = () => {
  codeSection.classList.add("hidden");
  gameSection.classList.remove("hidden");
};

// minigame coração
const heart = document.getElementById("heart");
heart.addEventListener("mouseover", () => {
  heart.style.position = "absolute";
  heart.style.top = Math.random() * 200 + "px";
  heart.style.left = Math.random() * 200 + "px";
});
heart.addEventListener("click", () => {
  gameSection.classList.add("hidden");
  revealSection.classList.remove("hidden");
});

// botões finais
document.getElementById("btn-more").onclick = () => {
  revealSection.classList.add("hidden");
  moreSection.classList.remove("hidden");
};

document.getElementById("btn-back").onclick = () => {
  moreSection.classList.add("hidden");
  revealSection.classList.remove("hidden");
};
