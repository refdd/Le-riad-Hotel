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

//   hover nav bar
navDesktop &&
  navDesktop.addEventListener("mouseover", () => {
    navDesktop.classList.add("hover");
    headerlogo.src = `assets/image/Logo le riad 1.svg`;
    linksHeader.forEach((link) => {
      link.classList.add("hover");
    });
  });
navDesktop.addEventListener("mouseout", () => {
  navDesktop.classList.remove("hover");
  headerlogo.src = `assets/image/Logo white-desktop.svg`;
  linksHeader.forEach((link) => {
    link.classList.remove("hover");
  });
});
buttonChack &&
  buttonChack.addEventListener("click", () => {
    boxCheck.classList.toggle("show");
  });
// counter check box
function addCounter(type) {
  if (type == "adults") {
    adults.value++;
  }
  if (type == "Children") {
    Children.value++;
  }
}

function removeCounter(type) {
  if (type == "adults") {
    if (adults.value == 0) {
      adults.value = 0;
      aduitsValue = adults.value;
    } else {
      adults.value--;
    }
  }
  if (type == "Children") {
    if (Children.value == 0) {
      Children.value = 0;
    } else {
      Children.value--;
    }
  }
}
// date
$(function () {
  $('input[name="daterange"]').daterangepicker(
    {
      opens: "left",
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
