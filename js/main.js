'use strict';

const inputNumberElement = document.querySelector('.js-input');
const tipTextElement = document.querySelector('.js-tips');
let counter = 0; // Define counter initial value.
const buttom = document.querySelector('.js-btn');
const page = document.querySelector('.js-main');

// Define ramdom number
const randomNumber = Math.ceil(Math.random() * 100); 
console.log('The number is:', randomNumber);

function guessNumber (event) {
    const responseDifference = randomNumber - parseInt(inputNumberElement.value);
    if(responseDifference === 0){
        tipTextElement.innerHTML = "Has ganado campeona!!! 🎉 🎉 🎉";
        page.classList.toggle('bg-2');
    } else if (responseDifference < 0){
        tipTextElement.innerHTML = "Pista: Demasiado alto";
    } else {
        tipTextElement.innerHTML = "Pista: Demasiado bajo";
    }
}

function gameOver() {
    let delay = 1000;
    if (counter === 2) {
        page.classList.toggle('bg-3');
        alert("GAME OVER - Se acabaron los intentos");
        tipTextElement.innerHTML = "Se acabaron los intentos";
        setTimeout(function setTime(){document.location.reload();}, delay);
    };
}

function incrementCounter() {
    const counterElement = document.querySelector('.js-counter');
    counter++; // Increment counter
    counterElement.innerHTML = counter; // Show new counter value
    gameOver(); 
}
// Adding listeners to button
buttom.addEventListener('click', (event) => { 
    event.preventDefault(); //Stop page update each click
    incrementCounter();
    guessNumber(event);
});