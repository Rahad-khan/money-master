function takeInputValue(inputid) {
  const inputText = document.getElementById(inputid + "-amount").value;
  const inputValue = parseFloat(inputText);
  return inputValue;
}
function takeStringText(inputid) {
  const inputText = document.getElementById(inputid + "-amount").innerText;
  const inputValue = parseFloat(inputText);
  return inputValue;
}
//Error function
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
    if (
      incomeAmount < 0 ||
      foodAmount < 0 ||
      rentAmount < 0 ||
      clothAmount < 0
    ) {
      errorNone();
      return (document.getElementById("error-negative").style.display =
        "block");
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
document.getElementById("savings").addEventListener("click", function () {
  const savingInput = takeInputValue("saving");
  const incomeAmount = takeInputValue("income");
  const totalSaving = incomeAmount * (savingInput / 100);
  //   errors
   const numberCheck = notANumber(savingInput, incomeAmount, "validation");
  if (numberCheck == true) {
    return;
  }
  if (savingInput < 0 || incomeAmount < 0) {
    return;
  }
  document.getElementById("total-saving").innerText = totalSaving;
  const balance = takeStringText("remaining");
  // errors
  if (balance < totalSaving) {
    errorNone();
    return (document.getElementById("error-saving").style.display = "block");
  }
  document.getElementById("remaining-balance").innerText =
    balance - totalSaving;
});
