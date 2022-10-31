'use strict';

//variables dentro del HTML
const select = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const textResult = document.querySelector('.js-text');

let random = 0;

//función para elegir un número entre el 1 y el 6

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);    
   }
//función para convertir el valor random en valores entre 2 y 5, como corresponde a las razas malvadas
function badGuysGenerator (){
   let random = getRandomNumber(6);
    if (random <= 2){
        random =2
    }else if (random >2 && random<5) {
        random =3
    }else if (random >=5){
        random =5;
    }
    return random;
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
    const badGuys = badGuysGenerator(); 
    const result = compare (goodGuys, badGuys);    
}

btn.addEventListener('click', handleClick);