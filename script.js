let navBar = document.querySelector("nav");
let menulink = document.getElementById("menu-link");
function toogleMenu() {
  menulink.classList.toggle("show-menu");
}

window.onscroll = function () {
  if (this.scrollY > 0) {
    navBar.style.background = "#eefff9";
  } else {
    navBar.style.background = "transparent";
  }
};

