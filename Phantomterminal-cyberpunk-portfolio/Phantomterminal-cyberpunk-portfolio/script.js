// Personalize these values before publishing.
const CONFIG = {
  email: "", // Example: "hello@example.com"
};

const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");
let stars = [];
let width = 0, height = 0, dpr = 1;
function resizeCanvas() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth; height = window.innerHeight;
  canvas.width = width * dpr; canvas.height = height * dpr;
  canvas.style.width = width + "px"; canvas.style.height = height + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  stars = Array.from({ length: Math.min(115, Math.floor(width / 10)) }, () => ({
    x: Math.random() * width, y: Math.random() * height,
    r: Math.random() * 1.3 + .25, speed: Math.random() * .18 + .035,
    phase: Math.random() * Math.PI * 2
  }));
}
function drawStars(t = 0) {
  ctx.clearRect(0, 0, width, height);
  stars.forEach(s => {
    s.y -= s.speed;
    if (s.y < -3) { s.y = height + 3; s.x = Math.random() * width; }
    const alpha = .25 + (Math.sin(t * .001 + s.phase) + 1) * .22;
    ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(142, 231, 236, ${alpha})`; ctx.fill();
  });
  requestAnimationFrame(drawStars);
}
resizeCanvas(); requestAnimationFrame(drawStars);
window.addEventListener("resize", resizeCanvas);

// Subtle cursor glow and mouse-responsive card tilt.
const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  if (glow) { glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px"; }
});
if (window.matchMedia("(pointer:fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".tilt").forEach(card => {
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(900px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg) translateY(-2px)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

// Reveal content as it enters the viewport.
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Mobile navigation.
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle?.addEventListener("click", () => nav.classList.toggle("open"));
nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

// Footer year and optional email copy.
document.getElementById("year").textContent = new Date().getFullYear();
const copyButton = document.getElementById("copyEmail");
const copyStatus = document.getElementById("copyStatus");
copyButton?.addEventListener("click", async () => {
  if (!CONFIG.email) {
    copyStatus.textContent = "Email isn't configured yet — add your email in script.js.";
    return;
  }
  try {
    await navigator.clipboard.writeText(CONFIG.email);
    copyStatus.textContent = "Email copied. Let's make something useful.";
  } catch {
    copyStatus.textContent = `Email: ${CONFIG.email}`;
  }
});
