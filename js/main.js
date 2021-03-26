'use strict';

const inputNumberElement = document.querySelector('.js-input');
const buttom = document.querySelector('.js-btn');
const page = document.querySelector('.js-page');
const tipTextElement = document.querySelector('.js-tips');
let counter = 0; // Define counter initial value.

// Define ramdom number
const randomNumber = Math.ceil(Math.random() * 100); 
console.log('The number is:', randomNumber);

// Define tips text
function guessNumber(event) {
    tipTextElement.classList.add('start');
    const responseDifference = randomNumber - parseInt(inputNumberElement.value);
    let delay = 2000;
    if(responseDifference === 0){
        tipTextElement.classList.add('win');
        tipTextElement.classList.remove('start');
        tipTextElement.classList.remove('high');
        tipTextElement.classList.remove('less');
        setTimeout(function setTime(){document.location.reload();}, delay);
        buttom.style.pointerEvents = "none";
    } else if (responseDifference < 0){
        tipTextElement.classList.add('high');
        tipTextElement.classList.remove('start');
        tipTextElement.classList.remove('less');
    } else if (responseDifference > 0){
        tipTextElement.classList.add('less');
        tipTextElement.classList.remove('start');
        tipTextElement.classList.remove('high');
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
    const tipTextElement = document.querySelector('.js-tips');  
    const pageTitle = document.querySelector('.title');
    const counterText = document.querySelector('.counter_text');
    let delay = 2000;
    if (counter === 7) {
        tipTextElement.classList.remove('start');
        tipTextElement.classList.remove('high');
        tipTextElement.classList.remove('less');
        tipTextElement.classList.add('game--over');
        page.classList.add('page_game-over');
        buttom.style.pointerEvents = "none";
        setTimeout(function setTime(){document.location.reload();}, delay);
    };
}

// Adding listeners to button
buttom.addEventListener('click', (event) => { 
    event.preventDefault(); //Stop page update each click
    incrementCounter();
    guessNumber(event);
});

