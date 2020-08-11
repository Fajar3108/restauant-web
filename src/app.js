const menuToggle = document.querySelector("nav .menu-toggle");
const menu = document.querySelector("nav .menu");
const navbar = document.querySelector("nav");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("slide");
  menuToggle.classList.toggle("close");
});

function stickyNavbar() {
  if (window.pageYOffset > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onscroll = function () {
  stickyNavbar();
};
