'use strict';

//variables dentro del HTML
const select = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const textResult = document.querySelector('.js-text');

let random = 0;

//función para la facción malvada

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }

//función para la facción bondadosa
function goodSelect () {    
    const selectValue = parseInt(select.value);     
    return selectValue;
}

//funcion para comparar las dos facciones

function compare (good, evil){
    if (good > evil){
        console.log (good,evil);
        htmlResult('Ha ganado el Ejército del Bien! Enhorabuena.')
       }else if (good >= evil){
        console.log (good,evil);
        htmlResult("Empate");
       } else {
        console.log (good,evil);
        htmlResult('Ha ganado el Ejército del Mal! Vuelve a intentarlo.')
       }
}
//funcion para pintar en el HTML
function htmlResult (result){
    textResult.innerHTML= result;
}

function handleClick (event) {
    event.preventDefault();
    const goodGuys= goodSelect();    
    let random = getRandomNumber(6)    
    const result = compare (goodGuys, random);    
}

btn.addEventListener('click', handleClick);