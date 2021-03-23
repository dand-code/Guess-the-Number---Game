'use strict';

const inputNumberElement = document.querySelector('.js-input');
const tipTextElement = document.querySelector('.js-tips');
const textGameOver = document.querySelector('.js-game_over');
let counter = 0; // Define counter initial value.
const buttom = document.querySelector('.js-btn');
const page = document.querySelector('.js-page');

// Define ramdom number
const randomNumber = Math.ceil(Math.random() * 100); 
console.log('The number is:', randomNumber);


// Define tips text
function guessNumber (event) {
    const responseDifference = randomNumber - parseInt(inputNumberElement.value);
    if(responseDifference === 0){
        tipTextElement.innerHTML = `<img class="game_image" src="./images/has_ganado.svg" alt="Has ganado!">`;
        page.classList.toggle('bg-2');
    } else if (responseDifference < 0){
        tipTextElement.innerHTML = `<img class="game_image" src="./images/alto.svg" alt="EL número es demasiado alto">`;
    } else if (responseDifference > 0){
        tipTextElement.innerHTML = `<img class="game_image" src="./images/bajo.svg" alt="Has ganado!">`;
    } else if (counter === 7) {
        tipTextElement.innerHTML = '';
    }
}

function incrementCounter() {
    const counterElement = document.querySelector('.js-counter');
    counter++; // Increment counter
    counterElement.innerHTML = counter; // Show new counter value
    gameOver(); 
}

// Define max attempts
function gameOver() {
    let delay = 2000;
    if (counter === 3) {
        buttom.style.pointerEvents = "none";;
        page.classList.toggle('bg-3');
        textGameOver.innerHTML = `<img class="game_image" src="./images/game_over.svg" alt="Game over">`;
        setTimeout(function setTime(){document.location.reload();}, delay);
    };
}

// Adding listeners to button
buttom.addEventListener('click', (event) => { 
    event.preventDefault(); //Stop page update each click
    incrementCounter();
    guessNumber(event);
});