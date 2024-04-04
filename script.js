console.log("hello world");
const body = document.querySelector("body");
const header1 = document.querySelector("h1");
const h6 = document.querySelector("h6");
const logo = document.getElementById("logo");
const darkToggle = document.getElementById("toggle-button");
const showNavBtn = document.getElementById("show-nav-btn");
const closeNavBtn = document.getElementById("close-nav-btn");
const nav = document.getElementById("nav");
const navlinks = document.querySelectorAll("header a");
const sidePane = document.getElementById("side-panel");

let darkMode = false;

//DARK MODE ---------------------------------------

function toggleDarkMode() {
  body.classList.toggle("bg-dark");
  header1.classList.toggle("color-body");
  h6.classList.toggle("color-body");
  nav.classList.toggle("bg-dark");
  showNavBtn.classList.toggle("bg-dark");
  showNavBtn.classList.toggle("color-body");
  closeNavBtn.classList.toggle("bg-light-dark");
  closeNavBtn.classList.toggle("color-body");
}

darkToggle.onchange = function (e) {
  if (e.target.checked) {
    logo.src = "res/alarado-icon-homepage-dark.svg";
  } else {
    logo.src = "res/alarado-icon-homepage.svg";
  }
  toggleDarkMode();
};

//DARK MODE ---------------------------------------------------------------------

showNavBtn.onclick = function () {
  nav.classList.toggle("show-nav");
};
closeNavBtn.onclick = function () {
  nav.classList.toggle("show-nav");
};
window.onclick = function (e) {
  if (
    !e.target.matches("nav, nav *, header button, header button div") &&
    nav.classList.contains("show-nav")
  ) {
    nav.classList.remove("show-nav");
  }
};
