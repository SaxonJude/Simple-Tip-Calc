var inputVal = document.querySelector('.amountInput');
var button = document.querySelector('.button');
var output = document.querySelector('.output');
var title = document.querySelector('.title');
var messagePop = document.querySelector('.clearMessage');

button.addEventListener('click', calcTip);
inputVal.addEventListener('keypress', (e) => {
  if(e.key === 'Enter'){
    e.preventDefault();
    calcTip();
  }
});
title.addEventListener('click', clearAll);

function calcTip() {
  var bill = parseInt(inputVal.value);
  var tip;

  if(bill < 50) {
    tip = 0.25;
  } else if (bill >= 50 && bill < 100) {
    tip = 0.2;
  } else if (bill >= 100 && bill < 200) {
    tip = 0.15;
  } else {
    tip = 0.1;
  };
  var totalTip = bill * tip;
  var totalBill = bill + totalTip;

  if(inputVal.value === ''){
    output.textContent = `----`
  } else {
    output.innerHTML = `Tip: <span class='colouring'>$${totalTip} </span> | Total: <span class='colouring'>$${totalBill} </span>`;
  };
};

function clearAll() {
  inputVal.value = '';
  output.textContent = `----`
  button.textContent = `Cleared!`
  setTimeout(() => {
   button.textContent = `Calculate!`
  }, 1500);
};
