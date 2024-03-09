// deposit , withdraw, balance
// inputDeposit, inputCashOut
// depositBtn, withdrawBtn

const balance = document.getElementById('balance');
const withdraw = document.getElementById('withdraw');
const deposit = document.getElementById('deposit');


const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn'); 

balance.innerHTML = 1240 ;

depositBtn.addEventListener('click',()=>{
    const inputDeposit = parseInt(document.getElementById('inputDeposit').value);
    const preBalance = parseInt(balance.innerHTML);
    balance.innerHTML = preBalance + inputDeposit;
    deposit.innerHTML = parseInt(deposit.innerHTML)+inputDeposit;
})

withdrawBtn.addEventListener("click",()=>{
    const inputCashOut = parseInt(document.getElementById('inputCashOut').value);

    const preBalance = parseInt(balance.innerHTML);
    balance.innerHTML = preBalance - inputCashOut;
    withdraw.innerHTML = parseInt(withdraw.innerHTML)+ inputCashOut;
})