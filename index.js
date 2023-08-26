function myFunction(x) {
    x.classList.toggle("change");
  }

const mobile_nav = document.querySelector(".menu1");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());