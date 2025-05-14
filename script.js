const dropdown = document.querySelector(".dropdown");
const navLinks = document.querySelector(".nav-links");

dropdown.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
