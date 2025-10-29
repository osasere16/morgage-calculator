"use strict";

// VARIABLES
const amount = document.querySelector(".amount");
const yearsContainer = document.querySelector(".yearsContainer");
const interest = document.querySelector(".interest");
const euro = document.querySelector(".euro");
const years = document.querySelector(".years");
const rate = document.querySelector(".rate");
const required = document.querySelectorAll(".required");
const amountInput = document.querySelector(".amount__input");
const yearsInput = document.querySelector(".years__input");
const rateInput = document.querySelector(".rate__input");
const rBtn1 = document.querySelector(".rBtn1");
const rBtn2 = document.querySelector(".rBtn2");
const submitBtn = document.querySelector(".submit--btn");
const emptyResult = document.querySelector(".empty-result");
const completeResult = document.querySelector(".complete-result");
const repaymentContainer = document.querySelector(".repayment");
const interestContainer = document.querySelector(".interestContainer");
const repaymentHeader = document.querySelector(".repayment__header");
const termHeader = document.querySelector(".term__header");
const interestHeader = document.querySelector(".interest__header");
const interestTermHeader = document.querySelector(".interestTerm__header");
let oneYearate;
let totalRate;
let totalDept;
let monthlyPayment;
let monthlyRate;

const error = () => {
  required[0].style.display = "none";
  required[1].style.display = "none";
  required[2].style.display = "none";
  required[3].style.display = "none";
  amount.classList.add("amount");
  yearsContainer.classList.add("yearsContainer");
  interest.classList.add("interest");
  amount.classList.remove("amount-error");
  yearsContainer.classList.remove("yearsContainer-error");
  interest.classList.remove("interest-error");
  euro.classList.add("euro");
  years.classList.add("years");
  rate.classList.add("rate");
  euro.classList.remove("euro-error");
  years.classList.remove("years-error");
  rate.classList.remove("rate-error");
};

//MAIN CODES
amountInput.addEventListener("keyup", function () {
  let commar = this.value.replace(/[^\d]/g, "");
  amountInput.value = commar;
  amountInput.value = this.value.replace(/\B(?=(\d{3})+(?!(\d)))/g, ",");
});

submitBtn.addEventListener("click", function (e) {
  if (
    amountInput.value !== "" &&
    yearsInput.value !== "" &&
    rateInput.value !== "" &&
    rBtn1.checked
  ) {
    amountInput.value = amountInput.value.replace(/,/g, "");
    oneYearate =
      parseInt(amountInput.value) * (parseFloat(rateInput.value) / 100);
    totalRate = oneYearate * parseInt(yearsInput.value);
    totalDept = totalRate + parseInt(amountInput.value);
    monthlyPayment = totalDept / (parseInt(yearsInput.value) * 12);

    repaymentHeader.innerText = `£ ${monthlyPayment.toFixed(2)}`;
    repaymentHeader.innerHTML = repaymentHeader.innerHTML.replace(
      /\B(?=(\d{3})+(?!(\d)))/g,
      ","
    );
    termHeader.innerText = `£ ${totalDept.toFixed(2)}`;
    termHeader.innerHTML = termHeader.innerHTML.replace(
      /\B(?=(\d{3})+(?!(\d)))/g,
      ","
    );
    emptyResult.classList.add("d-hidden");
    completeResult.classList.remove("d-hidden");
    repaymentContainer.classList.remove("d-hidden");
    interestContainer.classList.add("d-hidden");
  } else if (
    amountInput.value !== "" &&
    yearsInput.value !== "" &&
    rateInput.value !== "" &&
    rBtn2.checked
  ) {
    monthlyRate = oneYearate / 12;
    totalRate = oneYearate * parseInt(yearsInput.value);
    interestHeader.innerText = `£ ${monthlyRate.toFixed(2)}`;
    interestHeader.innerHTML = interestHeader.innerHTML.replace(
      /\B(?=(\d{3})+(?!(\d)))/g,
      ","
    );
    interestTermHeader.innerText = `£ ${totalRate.toFixed(2)}`;
    interestTermHeader.innerHTML = interestTermHeader.innerHTML.replace(
      /\B(?=(\d{3})+(?!(\d)))/g,
      ","
    );
    repaymentContainer.classList.add("d-hidden");
    interestContainer.classList.remove("d-hidden");
  } else if (
    amountInput.value === "" &&
    yearsInput.value === "" &&
    rateInput.value === ""
  ) {
    emptyResult.classList.remove("d-hidden");
    completeResult.classList.add("d-hidden");
    required[0].style.display = "block";
    required[1].style.display = "block";
    required[2].style.display = "block";
    required[3].style.display = "block";
    amount.classList.remove("amount");
    yearsContainer.classList.remove("yearsContainer");
    interest.classList.remove("interest");
    amount.classList.add("amount-error");
    yearsContainer.classList.add("yearsContainer-error");
    interest.classList.add("interest-error");
    euro.classList.remove("euro");
    years.classList.remove("years");
    rate.classList.remove("rate");
    euro.classList.add("euro-error");
    years.classList.add("years-error");
    rate.classList.add("rate-error");
  }

  amountInput.addEventListener("click", error);
  yearsInput.addEventListener("click", error);
  rateInput.addEventListener("click", error);
});
