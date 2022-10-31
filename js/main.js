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

//let random = getRandomNumber(6);
//console.log(random);

//función para la facción bondadosa
function goodSelect () {    
    const selectValue = parseInt(select.value);     
    return selectValue;

}

//funcion para pintar en el HTML


//funcion para comparar las dos facciones
function compare (selectValue, random){
    if (selectValue > random){
        console.log ("ganan los buenos")
       } else {
        console.log ("ganan los malos")
       }
}

function handleClick (event) {
    event.preventDefault();
    const goodGuys= goodSelect();
    console.log (typeof(goodGuys));
   /* let random = getRandomNumber(6)
    goodSelect ();
    compare ();*/
   
}

btn.addEventListener('click', handleClick);