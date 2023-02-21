document.addEventListener("DOMContentLoaded", function () {
  var main = new Splide("#image-carousel", {
    type: "fade",
    rewind: true,
    pagination: false,
    arrows: false,
  });

  var thumbnails = new Splide("#thumbnail-carousel", {
    fixedWidth: 100,
    fixedHeight: 60,
    gap: 10,
    rewind: true,
    pagination: false,
    isNavigation: true,
    breakpoints: {
      600: {
        fixedWidth: 60,
        fixedHeight: 44,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
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
