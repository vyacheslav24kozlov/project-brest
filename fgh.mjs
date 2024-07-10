let counter = 3;
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.querySelector('#reset');


incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});


function decrementCounter() {
    counter--;
    counterValue.innerHTML = counter;
}
module.export = decrementCounter;
decrementBtn.addEventListener('click', decrementCounter);
resetBtn.addEventListener('click', reset);

function reset() {
    counter = 3;
    counterValue.innerHTML = counter;
}