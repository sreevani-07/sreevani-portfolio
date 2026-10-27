
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

// Toggle navigation on mobile devices
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");

  const isOpen = nav.classList.contains("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
  menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close navigation after clicking a menu link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

// Automatically update the copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();