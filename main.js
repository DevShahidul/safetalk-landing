let hamburgerIcon = document.getElementById("hamburger-icon");
let closeIcon = document.getElementById("close-icon");
let mainMenu = document.getElementById("menu");

hamburgerIcon.addEventListener("click", () => {
  mainMenu.classList.toggle("hidden");
});
closeIcon.addEventListener("click", () => {
  mainMenu.classList.toggle("hidden");
});
