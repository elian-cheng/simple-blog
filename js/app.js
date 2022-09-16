// * Burger handler

document.addEventListener("DOMContentLoaded", () => {
  const menuCloseItem = document.querySelector(".header-nav-close-button");
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header-nav");
  const menuLinks = document.querySelectorAll(".header-link");

  burgerItem.addEventListener("click", () => {
    menu.classList.add("header-nav-active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header-nav-active");
  });
  // if (window.innerWidth > 768) return;
  // for (let i = 0; i < menuLinks.length; i++) {
  //   menuLinks[i].addEventListener("click", () => {
  //     menu.classList.remove("header-nav-active");
  //   });
  // }
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("header-nav-active");
    });
  });
});
