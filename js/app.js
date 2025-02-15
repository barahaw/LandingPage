const sectionsElements = document.querySelectorAll("section");
const navbarUl = document.getElementById("navbar__list");
const title = document.getElementById("landing-title");
const navToggle = document.getElementById("navToggle");
const navbarMenu = document.querySelector(".navbar__menu");
const mybutton = document.getElementById("myBtn");

let nav = "";

function generateNav() {
  sectionsElements.forEach((section) => {
    nav += `
      <li>
        <a class="nav__link menu__link" href="#${section.id}">
          ${section.dataset.nav}
        </a>
      </li>`;
  });
  navbarUl.innerHTML = nav;
}
generateNav();

function setActive() {
  sectionsElements.forEach((section) => {
    const elementOffset = section.getBoundingClientRect();
    const navbarLink = document.querySelector(
      `.menu__link[href="#${section.id}"]`
    );

    if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
      section.classList.add("your-active-class");
      navbarLink.classList.add("active-nav");
    } else {
      section.classList.remove("your-active-class");
      navbarLink.classList.remove("active-nav");
    }
  });
}
document.addEventListener("scroll", setActive);

function toggleBackToTopButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
window.onscroll = toggleBackToTopButton;

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
mybutton.addEventListener("click", scrollToTop);

const navbarItems = document.querySelectorAll("#navbar__list li a");

navbarItems.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

navToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("menu-open");
});

setActive();
