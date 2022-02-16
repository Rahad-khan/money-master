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
//global variable
/* let incomeAmount = takeInputValue("income");
console.log(incomeAmount); */

document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const incomeAmount = takeInputValue("income");
    const foodAmount = takeInputValue("food");
    const rentAmount = takeInputValue("rent");
    const clothAmount = takeInputValue("cloth");
    const totalExpense = foodAmount + rentAmount + clothAmount;
    console.log(incomeAmount);
    if (isNaN(totalExpense)) {
      alert("please fill all the input with Number");
    }
    debugger;
    if (incomeAmount < totalExpense || isNaN(incomeAmount)) {
      return alert("u haven't sufficient balance");
    }
    document.getElementById("total-expense").innerText = totalExpense;
    document.getElementById("remaining-amount").innerText =
      incomeAmount - totalExpense;
  });
document.getElementById("savings").addEventListener("click", function () {
  const savingInput = takeInputValue("saving");
  const incomeAmount = takeInputValue("income");
  const totalSaving = incomeAmount * (savingInput/100);

  document.getElementById("total-saving").innerText = totalSaving;
  const balance = takeStringText("remaining");
  console.log(balance);
  document.getElementById("remaining-balance").innerText = balance - totalSaving;
});
