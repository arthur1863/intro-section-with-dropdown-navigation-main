const dropdown = document.querySelector(".dropdown");
const navLinks = document.querySelector(".nav-links");
const iconMenu = document.querySelector(".dropIcon");
const featuresBtn = document.querySelector(".featuresBtn");
const featuresExpand = document.querySelector(".features-expand");
const companyBtn = document.querySelector(".companyBtn");
const companyExpand = document.querySelector(".company-expand");

dropdown.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  dropdown.classList.toggle("opened");
  if (dropdown.classList.contains("opened")) {
    iconMenu.src = "images/icon-close-menu.svg";
  } else {
    iconMenu.src = "images/icon-menu.svg";
  }
});

featuresBtn.addEventListener("click", (e) => {
  e.preventDefault();
  featuresExpand.classList.toggle("show-features");
});

companyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  companyExpand.classList.toggle("show-company");
  console.log("hallo");
});
