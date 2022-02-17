// Take input value by using id
function takeInputValue(inputid) {
  const inputText = document.getElementById(inputid + "-amount").value;
  const inputValue = parseFloat(inputText);
  return inputValue;
}
/* =================
Error function
================== */
// clear error messages function
function errorNone() {
  const errors = document.getElementsByClassName("errors");
  for (const error of errors) {
    error.style.display = "none";
  }
}
// isNaN error function
function notANumber(value1, value2, inputid) {
  if (isNaN(value1) || isNaN(value2)) {
    errorNone();
    document.getElementById("error-" + inputid).style.display = "block";
    return true;
  }
}
// negative value error function
function isNegative(idString) {
  for (const argument of arguments) {
    if (argument < 0) {
      errorNone();
      document.getElementById("error-" + idString).style.display = "block";
      return true;
    }
  }
}
//calculate button click 
document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const incomeAmount = takeInputValue("income");
    const foodAmount = takeInputValue("food");
    const rentAmount = takeInputValue("rent");
    const clothAmount = takeInputValue("cloth");
    const totalExpense = foodAmount + rentAmount + clothAmount;
    // isNotANumber handeling
    const numberCheck = notANumber(totalExpense, incomeAmount, "number");
    debugger;
    if (numberCheck == true) {
      return;
    }
    // negativeNumber handeling
    const negativeNumber = isNegative(
      "negative",
      incomeAmount,
      foodAmount,
      rentAmount,
      clothAmount
    );
    if (negativeNumber == true) {
      return;
    }
    //more expnese less income error
    if (totalExpense > incomeAmount) {
      errorNone();
      return (document.getElementById("error-expense").style.display = "block");
    }

    document.getElementById("total-expense").innerText = totalExpense;
    document.getElementById("remaining-amount").innerText =
      incomeAmount - totalExpense;
    errorNone();
  });
  //save button click 
document.getElementById("savings").addEventListener("click", function () {
  const savingInput = takeInputValue("saving");
  const incomeAmount = takeInputValue("income");
  const totalSaving = incomeAmount * (savingInput / 100);
  //   errors
  // check NaN errors
  const numberCheck = notANumber(savingInput, incomeAmount, "validation");
  if (numberCheck == true) {
    return;
  }
  // check Negative value errors
  const negativeNumber = isNegative("negative-2nd",savingInput,incomeAmount);
  if (negativeNumber==true) {
    return;
  }
  document.getElementById("total-saving").innerText = totalSaving;
  const balanceText = document.getElementById("remaining-amount").innerText;
  const balance = parseFloat(balanceText);
  // saving is more than remaining balance type error
  if (balance < totalSaving) {
    errorNone();
    return (document.getElementById("error-saving").style.display = "block");
  }
  document.getElementById("remaining-balance").innerText =
    balance - totalSaving;
});
