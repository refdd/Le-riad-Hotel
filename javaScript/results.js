// seletor
const buttomSelected = document.querySelectorAll(
  ".cardContent .rightCard .seletedBut"
);
const borderSelected = document.querySelectorAll(".borderImage");

// event
buttomSelected &&
  buttomSelected.forEach((item, index) => {
    item.addEventListener("click", () => {
      borderSelected[index].classList.toggle("open");
      borderSelected[index].classList.toggle("close");
      item.classList.toggle("active");
    });
  });
