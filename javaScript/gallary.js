// selctor
const buttonGallery = document.querySelectorAll(".g_content .g_button");
const GallerySection = document.querySelector(".gallary");
const gallarySilder = document.querySelector(".gallarySilder");
// event
// open gallery section
buttonGallery.forEach((item, index) => {
  item.addEventListener("click", () => {
    GallerySection.classList.add("show");
  });
});
// onclick enywhere close gallery section
window.addEventListener("click", (e) => {
  // if (e.target !== collbuttom &&
  // 	e.target !== textCollBack &&
  // 	e.target !== imageColl &&
  // 	e.target !== inpuColl &&
  // 	e.target !== selectedColl &&
  // 	e.target !== inputNumber &&
  // 	e.target !== imgSelected &&
  // 	e.target !== numberCollInBox  &&
  // 	  !e.target.contains(cellControl)
  // 	  ) {
  // 	cellControl.classList.remove("active");

  // }
  if (e.target == GallerySection || e.target == gallarySilder) {
    GallerySection.classList.remove("show");
  }
  console.log(e.target);
});
document.addEventListener("DOMContentLoaded", function () {
  var main = new Splide("#gallarySilder", {
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
