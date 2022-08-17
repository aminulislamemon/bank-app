document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmount = inputFieldValue('deposit-field');
    if (isNaN(newDepositAmount)) {
        alert('Please Provide a valid number')
        return
    }

    const previousDepositTotal = ElementValue('deposit-total')

    const newDepositTotal = newDepositAmount + previousDepositTotal;
    
    setTextElement('deposit-total', newDepositTotal);

    const prevBalanceTotal = ElementValue('balance-total');
    const updatedBalanceTotal = newDepositAmount + prevBalanceTotal

    setTextElement('balance-total', updatedBalanceTotal);
    
})