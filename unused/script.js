"use strict";
// Selecting elements
const formTip = document.querySelector(".form-tip");
const bill = document.getElementById("bill");
const fiveBill = document.getElementById("five_bill");
const tenBill = document.getElementById("ten_bill");
const OneFiveBill = document.getElementById("oneFive_bill");
const twoFiveBill = document.getElementById("twoFive_bill");
const fiveZeroBill = document.getElementById("fiveZero_bill");
const customBill = document.querySelector(".custom");
const tipAmnt = document.getElementById("tip_amnt");
const tipTotal = document.getElementById("tip_total");
const btn = document.querySelectorAll(".selt-tip");
const people = document.getElementById("people");
const resetBtn = document.querySelector(".btn-reset");
const label_err = document.getElementById("label_err");

bill.addEventListener("input", () => {
  calculateBill();
});
// people.addEventListener("input", () => {
//   calculateBill();
//   label_err.classList.remove("active");
// });
// custom bill click
customBill.addEventListener("input", () => {
  tipAmnt.textContent =
    "$" + ((customBill.value / 100) * bill.value).toFixed(2);
  tipTotal.textContent =
    "$" + ((customBill.value / 100) * bill.value * people.value).toFixed(2);
});

// Reset Button Click
resetBtn.addEventListener("click", () => {
  resetBtn.classList.toggle("active");
  tipAmnt.textContent = "$" + "0.00";
  tipTotal.textContent = "$" + "0.00";
  bill.value = "$" + "0.0";
  people.value = "$" + "0.0";

  btn.forEach((btn) => {
    btn.classList.remove("active");
  });
  fiveBill.classList.add("active");
});

// Button Click
btn.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});
// Button Click function
function handleClick(event) {
  btn.forEach((btn) => {
    btn.classList.remove("active");
    if (event.target.innerHTML === btn.innerHTML) {
      btn.classList.add("active");
      calculateBill()
      // tipAmnt.textContent =
      //   "$" + ((parseFloat(btn.textContent / 100) * bill.value) / 5).toFixed(2);
      // tipTotal.textContent =
      //   "$" +
      //   (
      //     (parseFloat(btn.textContent) / 100) *
      //     bill.value *
      //     people.value
      //   ).toFixed(2);
    }
    customBill.value = "";
  });
}

// function calculateBill() {
//   if (fiveBill.classList.contains("active")) {
//     if (people.value == 0) {
//       label_err.classList.add("active");
//     } else {
//       tipAmnt.textContent = "$" + ((5 / 100) * bill.value).toFixed(2);
//       tipTotal.textContent =
//         "$" + ((5 / 100) * bill.value * people.value).toFixed(2);
//     }
//   } else if (tenBill.classList.contains("active")) {
//     if (people.value == 0) {
//       label_err.classList.add("active");
//     } else {
//       tipAmnt.textContent = "$" + ((10 / 100) * bill.value).toFixed(2);
//       tipTotal.textContent =
//         "$" + ((10 / 100) * bill.value * people.value).toFixed(2);
//     }
//   } else if (OneFiveBill.classList.contains("active")) {
//     if (people.value == 0) {
//       label_err.classList.add("active");
//     } else {
//       tipAmnt.textContent = "$" + ((15 / 100) * bill.value).toFixed(2);
//       tipTotal.textContent =
//         "$" + ((15 / 100) * bill.value * people.value).toFixed(2);
//     }
//   } else if (twoFiveBill.classList.contains("active")) {
//     if (people.value == 0) {
//       label_err.classList.add("active");
//     } else {
//       tipAmnt.textContent = "$" + ((25 / 100) * bill.value).toFixed(2);
//       tipTotal.textContent =
//         "$" + ((25 / 100) * bill.value * people.value).toFixed(2);
//     }
//   } else if (fiveZeroBill.classList.contains("active")) {
//     if (people.value == 0) {
//       label_err.classList.add("active");
//     } else {
//       tipAmnt.textContent = "$" + ((50 / 100) * bill.value).toFixed(2);
//       tipTotal.textContent =
//         "$" + ((50 / 100) * bill.value * people.value).toFixed(2);
//     }
//   } else {
//   }
// }
function calculateBill() {
  btn.forEach((btn) => {
    if (btn.classList.contains("active")) {
      tipAmnt.textContent =
        "$" +
        (
          ((parseFloat(btn.textContent) / 100)) * bill.value
        ).toFixed(2);
    }
  });
}
/*
// 5% tip calculation
if (fiveBill.classList.contains("active")) {
  tipAmnt.textContent =
    "$" + (((5 / 100) * bill.value) / people.value).toFixed(2);
  tipTotal.textContent =
    "$" + ((5 / 100) * bill.value * people.value).toFixed(2);
  // 10% tip calculation
} else if (tenBill.classList.contains("active")) {
  tipAmnt.textContent = "$" + ((10 / 100) * bill.value).toFixed(2);
  tipTotal.textContent =
    "$" + ((10 / 100) * bill.value * people.value).toFixed(2);
  // 15% tip calculation
} else if (OneFiveBill.classList.contains("active")) {
  let billVal = ((15 / 100) * bill.value) / people.value;
  tipAmnt.textContent = "$" + billVal.toFixed(2);
  tipTotal.textContent =
    "$" + ((15 / 100) * bill.value * people.value).toFixed(2);
  // 25% tip calculation
} else if (twoFiveBill.classList.contains("active")) {
  tipAmnt.textContent = "$" + ((25 / 100) * bill.value).toFixed(2);
  tipTotal.textContent =
    "$" + ((25 / 100) * bill.value * people.value).toFixed(2);
  // 50% tip calculation
} else if (fiveZeroBill.classList.contains("active")) {
  tipAmnt.textContent = "$" + ((50 / 100) * bill.value).toFixed(2);
  tipTotal.textContent =
    "$" + ((50 / 100) * bill.value * people.value).toFixed(2);
} else {
}
*/