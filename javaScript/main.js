// vars
const barsMenu = document.querySelector(".menuIcon.d-flex.justify-content-end");
const menuBox = document.querySelector(".menuBox");
const openIcon = document.querySelector(
  ".menuIcon.d-flex.justify-content-end .fa-bars"
);
const closeIcon = document.querySelector(
  ".menuIcon.d-flex.justify-content-end .fa-xmark"
);
const navDesktop = document.querySelector(".desktopNav");
const headerlogo = document.querySelector(".headerlogo");
const buttonChack = document.querySelector(".butCheck");
const boxCheck = document.querySelector(".check_availavility .boxCheck");
const linksHeader = document.querySelectorAll(".linksHeader");
const adults = document.getElementById("adults");
const adultsDesktop = document.getElementById("adultsDesktop");
const ChildrenDesktop = document.getElementById("ChildrenDesktop");
const Children = document.getElementById("Children");
const imageCard = document.querySelectorAll(".imageCard");
const cardContent = document.querySelectorAll(".servicesCard .cardcontent");

// event
imageCard &&
  imageCard.forEach((item, index) => {
    item.addEventListener("click", () => {
      cardContent[index].classList.toggle("active");
    });
  });
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

//   hover nav bar commit now but may work again
// navDesktop &&
//   navDesktop.addEventListener("mouseover", () => {
//     navDesktop.classList.add("hover");
//     headerlogo.src = `assets/image/le.svg`;
//     linksHeader.forEach((link) => {
//       link.classList.add("hover");
//     });
//   });
// navDesktop.addEventListener("mouseout", () => {
//   navDesktop.classList.remove("hover");
//   headerlogo.src = `assets/image/Logo white-desktop.svg`;
//   linksHeader.forEach((link) => {
//     link.classList.remove("hover");
//   });
// });
// open and close box check
buttonChack &&
  buttonChack.addEventListener("click", () => {
    boxCheck.classList.toggle("show");
  });
// counter check box
function addCounter(type) {
  if (type == "adults") {
    adults.value++;
    adultsDesktop && adultsDesktop.value++;
  }
  if (type == "Children") {
    Children.value++;
    ChildrenDesktop && ChildrenDesktop.value++;
  }
}

function removeCounter(type) {
  if (type == "adults") {
    if (adults.value == 0 || adultsDesktop.value == 0) {
      adults.value = 0;
      adultsDesktop.value = 0;
    } else {
      adults.value--;
      adultsDesktop && adultsDesktop.value--;
    }
  }
  if (type == "Children") {
    if (Children.value == 0 || ChildrenDesktop.value == 0) {
      Children.value = 0;
      ChildrenDesktop.value = 0;
    } else {
      Children.value--;
      ChildrenDesktop && ChildrenDesktop.value--;
    }
  }
}
// date
$(function () {
  $('input[name="daterange"]').daterangepicker(
    {
      opens: "left",
      drops: "up",
      beforeShow: function (input, obj) {
        $(input).after($(input).datepicker("widget"));
      },
    },
    function (start, end, label) {
      console.log(
        "A new date selection was made: " +
          start.format("YYYY-MM-DD") +
          " to " +
          end.format("YYYY-MM-DD")
      );
    }
  );
});
