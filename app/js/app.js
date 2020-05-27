import "../sass/index.scss";
// import "../about.html";

//select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNavUl = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//Set initial State Of Menu
let showMenu = false;

const toggleMenu = () => {
  //   console.log(this);
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNavUl.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));
    showMenu = !showMenu;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNavUl.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));
    showMenu = !showMenu;
  }
};
menuBtn.addEventListener("click", toggleMenu);

// function toggleMenu() {
//   //   console.log(this);
//   if (!showMenu) {
//     menuBtn.classList.add("close");
//     menu.classList.add("show");
//     menuNavUl.classList.add("show");
//     menuBranding.classList.add("show");
//     navItems.forEach((item) => item.classList.add("show"));
//     showMenu = !showMenu;
//   } else {
//     menuBtn.classList.remove("close");
//     menu.classList.remove("show");
//     menuNavUl.classList.remove("show");
//     menuBranding.classList.remove("show");
//     navItems.forEach((item) => item.classList.remove("show"));
//     showMenu = !showMenu;
//   }
// }
