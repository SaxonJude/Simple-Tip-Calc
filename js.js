var inputVal = document.querySelector('.amountInput');
var button = document.querySelector('.button');
var output = document.querySelector('.output');

button.addEventListener('click', calcTip);
inputVal.addEventListener('keypress', (e) => {
  if(e.key === 'Enter'){
    calcTip();
  }
});

function calcTip() {
  var bill = inputVal.value;
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
  var total = bill * tip;
  if(bill === ''){
    output.textContent = `----`
  } else {
    output.textContent = `$${bill} should be a $${total} tip.`;
  };
};


