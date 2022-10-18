"use strict";
// Selecting elements
const formTip = document.querySelector(".form-tip");
const bill = document.getElementById("bill");
const customBill = document.querySelector(".custom");
const tipAmnt = document.getElementById("tip_amnt");
const tipTotal = document.getElementById("tip_total");
const btn = document.querySelectorAll(".selt-tip");
const people = document.getElementById("people");
const resetBtn = document.querySelector(".btn-reset");
const label_err = document.querySelector(".err-label");

let init_value = "0.00";

bill.addEventListener("input", calculateBill);
people.addEventListener("input", () => {
  label_err.classList.add("active");
  calculateBill();
});
// custom bill click
customBill.addEventListener("input", () => {
  const value = ((customBill.value / 100) * bill.value) / people.value;
  tipAmnt.textContent = "$" + value.toFixed(2);
  tipTotal.textContent =
    "$" + (parseInt(value) + parseInt(bill.value / people.value)).toFixed(2);
  btn.forEach((btn) => {
    btn.classList.remove("active");
  });
});

// Reset Button Click
resetBtn.addEventListener("click", () => {
  // Resetting all values to zero
  resetBtn.classList.remove("active");
  tipAmnt.textContent = "$" + init_value;
  tipTotal.textContent = "$" + init_value;
  bill.value = "$" + init_value;
  people.value = "$" + init_value;

  // Removing the active class form all buttons
  btn.forEach((btn) => {
    btn.classList.remove("active");
  });
  // Adding an active class to the first button
  btn[0].classList.add("active");
  customBill.value = "";
});

// Tip Button Click
btn.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});
// Tip Button Click function
function handleClick(event) {
  btn.forEach((btn) => {
    btn.classList.remove("active");
    if (event.target.innerHTML === btn.innerHTML) {
      btn.classList.add("active");
    }
    calculateBill();
    customBill.value = "";
  });
}

function calculateBill() {
  resetBtn.classList.add("active");
  btn.forEach((btn) => {
    if (btn.classList.contains("active")) {
      // If there is not input for the people input tab
      if (!people.value) {
        label_err.classList.remove("active");
      } else {
        // stored calculated value
        const value = (
          ((parseInt(btn.textContent) / 100) * bill.value) /
          people.value
        ).toFixed(2);

        // Tip amount
        tipAmnt.textContent = "$" + value;
        // Total bill amount
        tipTotal.textContent =
          "$" +
          (parseInt(bill.value / people.value) + parseInt(value)).toFixed(2);
      }
    }
  });
}
