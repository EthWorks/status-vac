"use strict";

const burger = document.querySelector(".burger");
const burgerOpen = document.querySelector(".burger__button--open");
const burgerClose = document.querySelector(".burger__button--close");
const menuMobile = document.querySelector(".nav-mobile");
const menuLinks = document.querySelectorAll(".nav__link");
const overlay = document.querySelector(".overlay");

const closeMobileMenu = () => {
  burgerOpen.classList.toggle("hidden");
  burgerClose.classList.toggle("hidden");
  menuMobile.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

burger.addEventListener("click", function (e) {
  e.preventDefault();
  closeMobileMenu();
});

menuLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    closeMobileMenu();
    const id = e.target.getAttribute("href").slice(1);
    console.log(document.querySelector(id));
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  });
});
