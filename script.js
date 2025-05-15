const dropdown = document.querySelector(".dropdown");
const navLinks = document.querySelector(".nav-links");
const iconMenu = document.querySelector(".dropIcon");

dropdown.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
