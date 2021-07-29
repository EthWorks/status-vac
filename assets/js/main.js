"use strict";

document.querySelectorAll(".nav__link").forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("data-href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  })
);

const burger = document.querySelector(".burger");
const burgerOpen = document.querySelector(".burger__button--open");
const burgerClose = document.querySelector(".burger__button--close");
const menuMobile = document.querySelector(".nav-mobile");
const overlay = document.querySelector(".overlay");

burger.addEventListener("click", function (e) {
  e.preventDefault();
  burgerOpen.classList.toggle("hidden");
  burgerClose.classList.toggle("hidden");
  menuMobile.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});
