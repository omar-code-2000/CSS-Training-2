let firstChoices = document.querySelectorAll(
  ".Choices .Choice:nth-child(1) .Choice-Card"
);
let secondChoices = document.querySelectorAll(
  ".Choices .Choice:nth-child(2) .Choice-Card"
);
let thirdChoices = document.querySelectorAll(
  ".Choices .Choice:nth-child(3) .Choice-Card"
);
let fourthChoices = document.querySelectorAll(
  ".Choices .Choice:nth-child(4) .Choice-Card"
);
let fifthChoices = document.querySelectorAll(
  ".Choices .Choice:nth-child(5) .Choice-Card"
);

// :nth-child()

// 
// 
// The Five Items n Order Summary
let firstItem = document.getElementsByClassName("Selection-One")[0];
let secondItem = document.getElementsByClassName("Selection-Two")[0];
let thirdItem = document.getElementsByClassName("Selection-Three")[0];
let fourthItem = document.getElementsByClassName("Selection-Four")[0];
let fifthItem = document.getElementsByClassName("Selection-Five")[0];

//
//
//
// First Choices
firstChoices.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    if (button.classList.contains("Selected-Card")) {
      firstItem.textContent = `Select`;
      firstChoices.forEach((btn) => btn.classList.remove("Selected-Card"));
    } else {
      firstChoices.forEach((btn) => btn.classList.remove("Selected-Card"));
      button.classList.toggle("Selected-Card");

      switch (index) {
        case 0:
          firstItem.textContent = `Capsule`;
          break;
        case 1:
          firstItem.textContent = `Filter`;
          break;
        case 2:
          firstItem.textContent = `Espresso`;
          break;
        default:
          break;
      }
    }
  });
});

// Second Choices
secondChoices.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    if (button.classList.contains("Selected-Card")) {
      secondItem.textContent = `Select`;
      secondChoices.forEach((btn) => btn.classList.remove("Selected-Card"));
    } else {
      secondChoices.forEach((btn) => btn.classList.remove("Selected-Card"));
      button.classList.toggle("Selected-Card");

      switch (index) {
        case 0:
          secondItem.textContent = `Single Origin`;
          break;
        case 1:
          secondItem.textContent = `Decaf`;
          break;
        case 2:
          secondItem.textContent = `Blended`;
          break;
        default:
          break;
      }
    }
  });
});

// Third Choices
thirdChoices.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    if (button.classList.contains("Selected-Card")) {
      thirdItem.textContent = `Select`;
      thirdChoices.forEach((btn) => btn.classList.remove("Selected-Card"));
    } else {
      thirdChoices.forEach((btn) => btn.classList.remove("Selected-Card"));
      button.classList.toggle("Selected-Card");

      switch (index) {
        case 0:
          thirdItem.textContent = `250g`;
          break;
        case 1:
          thirdItem.textContent = `500g`;
          break;
        case 2:
          thirdItem.textContent = `1000g`;
          break;
        default:
          break;
      }
    }
  });
});

// Fourth Choices
fourthChoices.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    if (button.classList.contains("Selected-Card")) {
      fourthItem.textContent = `Select`;
      fourthChoices.forEach((btn) => btn.classList.remove("Selected-Card"));
    } else {
      fourthChoices.forEach((btn) => btn.classList.remove("Selected-Card"));
      button.classList.toggle("Selected-Card");

      switch (index) {
        case 0:
          fourthItem.textContent = `Wholebean`;
          break;
        case 1:
          fourthItem.textContent = `Filter`;
          break;
        case 2:
          fourthItem.textContent = `Cafetiere`;
          break;
        default:
          break;
      }
    }
  });
});

// Fifth Choices
fifthChoices.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    if (button.classList.contains("Selected-Card")) {
      fifthItem.textContent = `Select`;
      fifthChoices.forEach((btn) => btn.classList.remove("Selected-Card"));
    } else {
      fifthChoices.forEach((btn) => btn.classList.remove("Selected-Card"));
      button.classList.toggle("Selected-Card");

      switch (index) {
        case 0:
          fifthItem.textContent = `Every week`;
          break;
        case 1:
          fifthItem.textContent = `Every 2 weeks`;
          break;
        case 2:
          fifthItem.textContent = `Every month`;
          break;
        default:
          break;
      }
    }
  });
});
