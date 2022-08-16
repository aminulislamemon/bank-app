document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawFieldElement = document.getElementById('withdraw-field');
    const withdrawFieldStr = withdrawFieldElement.value;
    const withdrawField = parseFloat(withdrawFieldStr);
    withdrawFieldElement.value = ''
    if (isNaN(withdrawField)) {
        alert('Please Provide a valid number')
        return
    }
    const WithdrawAmount = document.getElementById('withdraw-amount');
    const currentWithdrawAmountStr = WithdrawAmount.innerText;
    
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalValueStr = balanceTotal.innerText;
    const balanceTotalValue = parseFloat(balanceTotalValueStr);
    if (withdrawField > balanceTotalValue) {
        alert('ব্যালেন্সের দিক একটু চাইয়া দেখ কত আছে');
        return;
    }
    const currentWithdrawAmount =parseFloat(currentWithdrawAmountStr)
    WithdrawAmount.innerText = currentWithdrawAmount + withdrawField;
    
    const newBalanceTotal = balanceTotalValue - withdrawField;
    balanceTotal.innerText = newBalanceTotal;
})