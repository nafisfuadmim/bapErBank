document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // input get
    const depositInput = document.getElementById("deposit-input");
    const depositAmount = depositInput.value;
    //deposit get
    const depositTotal = document.getElementById("deposit-total");
    // update deposite;
    const depositeValue = depositTotal.innerText;
    const depositeValueFloat = parseFloat(depositeValue);
    const depositAmountFloat = parseFloat(depositAmount);
    const total = depositeValueFloat + depositAmountFloat;
    depositTotal.innerText = total;
    //update balance;
    const balance = document.getElementById("balance-total");
    const balanceValue = balance.innerText;
    const balanceFloat = parseFloat(balanceValue);
    const totalBalance = depositAmountFloat + balanceFloat;
    balance.innerText = totalBalance;
    //clean input
    depositInput.value = "";
  });
//withdraw balance
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawValue = withdrawInput.value;
  const withdrawFloat = parseFloat(withdrawValue);
  //
  const withdrawTotal = document.getElementById("withdraw-total");
  const withdrawInner = withdrawTotal.innerText;
  const withdrawFloatDisplay = parseFloat(withdrawInner);
  const withdrawTotalDisplay = withdrawFloat + withdrawFloatDisplay;
  withdrawTotal.innerText = withdrawTotalDisplay;

  //balance total minus;
  const balanceTotal = document.getElementById("balance-total");
  const balanceText = balanceTotal.innerText;
  const balanceFloatTotal = parseFloat(balanceText);
  //
  const grandTotal = balanceFloatTotal - withdrawTotalDisplay;
  balanceTotal.innerText = grandTotal;
  //clean input
  withdrawInput.value = "";
});
