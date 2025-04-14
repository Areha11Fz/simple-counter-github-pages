import { increment, decrement, getCount } from './counter.js';

const displayElement = document.getElementById('counter-display');
const increaseButton = document.getElementById('increase-button');
const decreaseButton = document.getElementById('decrease-button');

function updateDisplay() {
    displayElement.textContent = getCount();
}

increaseButton.addEventListener('click', () => {
    increment();
    updateDisplay();
});

decreaseButton.addEventListener('click', () => {
    decrement();
    updateDisplay();
});

// Initial display update
updateDisplay();
