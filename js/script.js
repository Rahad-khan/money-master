//global variable

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
function errorNone(clearValue) {
  const errors = document.getElementsByClassName("errors");
  for (const error of errors) {
    error.style.display = "none";
  }
  if (clearValue) {
    document.getElementById("total-expense").innerText = "00";
    document.getElementById("remaining-amount").innerText = "00";
  } else if(clearValue== false) {
    document.getElementById("total-saving").innerText = "00";
    document.getElementById("remaining-balance").innerText = "00";
  }
}
// isNaN error function
function notANumber(value1, value2, inputid,validation) {
  if (isNaN(value1) || isNaN(value2)) {
    errorNone(validation);
    document.getElementById("error-" + inputid).style.display = "block";
    return true;
  }
}
// negative value error function
function isNegative(idString,validation) {
  for (const argument of arguments) {
    if (argument < 0) {
      errorNone(validation);
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
    const numberCheck = notANumber(totalExpense, incomeAmount, "number",true);
    debugger;
    if (numberCheck == true) {
      return;
    }
    // negativeNumber handeling
    const negativeNumber = isNegative(
      "negative",
      true,
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
  const numberCheck = notANumber(savingInput, incomeAmount, "validation",false);
  if (numberCheck == true) {
    return;
  }
  // check Negative value errors
  const negativeNumber = isNegative("negative-2nd",false, savingInput, incomeAmount);
  if (negativeNumber == true) {
    return;
  }
  errorNone();
  const balanceText = document.getElementById("remaining-amount").innerText;
  const balance = parseFloat(balanceText);
// saving is more than remaining balance type error
if (balance < totalSaving) {
  errorNone(false);
  return (document.getElementById("error-saving").style.display = "block");
}
  document.getElementById("total-saving").innerText = (totalSaving).toFixed(2);
    document.getElementById("remaining-balance").innerText =
      (balance - totalSaving).toFixed(2);
});
