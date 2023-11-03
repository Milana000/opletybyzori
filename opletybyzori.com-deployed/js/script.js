"use strict";

const sideMenu = document.getElementsByClassName("side-menu");
const navClose = document.querySelectorAll(".links a");
const mobileMenu = document.getElementById("mobile-menu");
const hamMenu = document.getElementsByClassName("ham-menu-dropdown");

function openNav() {
  mobileMenu.style.width = "100vw";
}

function closeNav() {
  mobileMenu.style.width = "0";
}

for (const close of navClose) {
  close.addEventListener("click", function (ev) {
    if (ev.target.tagName.toLowerCase() === "a") {
      mobileMenu.style.width = "0";
    }
  });
}
