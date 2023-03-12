const barsMenu = document.querySelector(".menuIcon.d-flex.justify-content-end");
const menuBox = document.querySelector(".menuBox");
const openIcon = document.querySelector(
  ".menuIcon.d-flex.justify-content-end .fa-bars"
);
const closeIcon = document.querySelector(
  ".menuIcon.d-flex.justify-content-end .fa-xmark"
);

barsMenu &&
  openIcon.addEventListener("click", () => {
    menuBox.classList.add("active");
    openIcon.classList.remove("show");
    closeIcon.classList.add("show");
  });
barsMenu &&
  closeIcon.addEventListener("click", () => {
    menuBox.classList.remove("active");
    openIcon.classList.add("show");
    closeIcon.classList.remove("show");
  });

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#new-product", {
    perPage: 2,
    perMove: 1,
    gap: "30px",
    breakpoints: {
      1024: {
        perPage: 2,
      },
      767: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
    },
    pagination: false,
  }).mount();
});
