document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositFieldValueString = depositField.value;
    const depositFieldValue = parseFloat(depositFieldValueString);
    depositField.value = '';
    if (isNaN(depositFieldValue)) {
        alert('Please Provide a valid number')
        return
    }
    const depositTotalElement = document.getElementById('deposit-total');
    const depositPreviousTotalString = depositTotalElement.innerText;
    const depositPreviousTotal = parseFloat(depositPreviousTotalString)
    const currentDepositTotal = depositFieldValue + depositPreviousTotal;
    depositTotalElement.innerText = currentDepositTotal;
    depositField.value = '';

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalValueStr = balanceTotal.innerText;
    const balanceTotalValue = parseFloat(balanceTotalValueStr);
    const currentBalanceTotal = balanceTotalValue + depositFieldValue
    balanceTotal.innerText = currentBalanceTotal
})