// 🟦 Skills Section Scroll Animation
document.querySelectorAll(".skill-progress").forEach(skill => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const percent = skill.dataset.percent || "0%";
        skill.style.width = percent;
        skill.style.opacity = 1;
        obs.unobserve(skill);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(skill);
});

// ✅ Typing Effect (Looped TypeWriter)
const phrases = [
  "Final Year CSE Student",
  "AI/ML Researcher",
  "Compiler Explorer",
  "Creative Thinker 💡",
  "Future Innovator 🚀"
];

const typewriter = document.querySelector(".typewriter-text");
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];
  const displayText = currentPhrase.slice(0, charIndex);
  typewriter.innerHTML = displayText + "<span class='cursor'>|</span>";

  if (!deleting && charIndex < currentPhrase.length) {
    charIndex++;
    setTimeout(typeLoop, 100);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeLoop, 60);
  } else {
    deleting = !deleting;
    if (!deleting) phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeLoop, 1500);
  }
}
document.addEventListener("DOMContentLoaded", typeLoop);

// ✅ Scroll-to-top Button Logic
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  scrollBtn.style.display = (document.documentElement.scrollTop > 300) ? "block" : "none";
};

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ✅ Dark Mode Toggle
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
