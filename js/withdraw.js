document.getElementById('withdraw-btn').addEventListener('click', function(){

    const newWithdrawAmount = inputFieldValue('withdraw-field');
    if (isNaN(newWithdrawAmount)) {
        alert('Please Provide a valid number')
        return
    }
    const balanceTotalValue = ElementValue('balance-total');
        if (newWithdrawAmount > balanceTotalValue) {
        alert('ব্যালেন্সের দিক একটু চাইয়া দেখ কত আছে');
        return;
    }
    const prevWithdrawAmount = ElementValue('withdraw-amount');
    const newWithdrawTotal = newWithdrawAmount + prevWithdrawAmount;
    setTextElement('withdraw-amount', newWithdrawTotal);
    const newbalanceTotal = balanceTotalValue - newWithdrawAmount;

    setTextElement('balance-total', newbalanceTotal)

   
})