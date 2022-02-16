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

document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const incomeAmount = takeInputValue("income");
    const foodAmount = takeInputValue("food");
    const rentAmount = takeInputValue("rent");
    const clothAmount = takeInputValue("cloth");
    const totalExpense = foodAmount + rentAmount + clothAmount;
    // isNotANumber handeling
    if (isNaN(totalExpense) || isNaN(incomeAmount)) {
      errorNone();
      return (document.getElementById("error-number").style.display = "block");
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
    if (totalExpense>incomeAmount) {
        errorNone();
        return (document.getElementById("error-expense").style.display =
        "block");
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

  document.getElementById("total-saving").innerText = totalSaving;
  const balance = takeStringText("remaining");
  document.getElementById("remaining-balance").innerText =
    balance - totalSaving;
  errorNone();
});
