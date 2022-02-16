function takeInputValue(inputid) {
  const inputText = document.getElementById(inputid + "-amount").value;
  const inputValue = parseFloat(inputText);
  return inputValue;
}
document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
      const incomeAmount = takeInputValue("income");
    const foodAmount = takeInputValue("food");
    const rentAmount = takeInputValue("rent");
    const clothAmount = takeInputValue("cloth");
    const totalExpense = foodAmount + rentAmount + clothAmount;
    if (isNaN(totalExpense)) {
        alert("please fill all the input with Number")
    }
    if (incomeAmount< totalExpense || isNaN(incomeAmount)) {
        return alert("u haven't sufficient balance")
    }
    document.getElementById("total-expense").innerText = totalExpense;
    document.getElementById("remaining-amount").innerText = incomeAmount - totalExpense;
  });
