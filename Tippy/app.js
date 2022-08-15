const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberofpeople = document.getElementById('numberofpeople');
const perpersontotal = document.getElementById('perpersontotal');

let numberOfPeople = Number(numberofpeople.innerText);

const calculateBill = () => {
    const bill = Number(billTotalInput.value);   
    const tipPercentage = Number(tipInput.value)/100;
    const tip = bill * tipPercentage;
    const total = bill + tip;
    const perPersonBill = Math.floor(total / numberOfPeople);
    perpersontotal.innerText= `$${perPersonBill}`;
}


const increasepeople = () => {
      
      numberOfPeople++;
      calculateBill();
      numberofpeople.innerText = numberOfPeople;
        
}
const decreasepeople = () => {
    if(numberOfPeople > 1){
        numberOfPeople--;
        calculateBill();
        numberofpeople.innerText = numberOfPeople;
    }
}