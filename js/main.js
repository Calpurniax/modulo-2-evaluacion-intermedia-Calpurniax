'use strict';

//variables dentro del HTML
const select = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const btnReset = document.querySelector('.js-reset');
const textResult = document.querySelector('.js-text');


let random = 0;
let scoreGoodguys= 0;
let scoreBadguys = 0;
let i = 0;


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
        scoreGoodguys++
        htmlResult('Ha ganado el Ejército del Bien! Enhorabuena.')
       }else if (good >= evil){
        console.log (good,evil);        
        htmlResult("Empate");
       } else {
        console.log (good,evil);
        scoreBadguys++;
        htmlResult('Ha ganado el Ejército del Mal! Vuelve a intentarlo.')
       }       
}

//funcion para pintar en el HTML
function htmlResult (result){
    textResult.innerHTML= result;
}

//función manejadora del evento
function handleClick (event) {
    event.preventDefault();
    i++    
    const goodGuys= goodSelect();    
    const badGuys = badGuysGenerator(); 
    compare (goodGuys, badGuys);  
    scoreWriting (scoreGoodguys, scoreBadguys);
    loop(i)
}

//evento
btn.addEventListener('click', handleClick);

//BONUS//

//función para pintar los puntos de cada facción:

const score = document.querySelector('.js-score');
function scoreWriting (goodGuys, badGuys) {
    score.innerHTML = `<li>Jugadora: ${goodGuys}</li><li>Computadora: ${badGuys}</li>`
}

//bucle
function loop (i, scoreGoodguys, scoreBadguys){    
    if (i>9) {
        btnCollapse ()
        if (scoreGoodguys > scoreBadguys) {
            htmlResult ('Has ganado el juego');
        } else {
            htmlResult ('Has perdido el juego'); 
        }
    }
}

//collapse boton "Jugar"
function btnCollapse (){
    btn.classList.add ('collapse');
    btnReset.classList.remove ('collapse');
}



//colapsar el boton de reset
function collapseReset (){
        btn.classList.remove ('collapse');
        btnReset.classList.add ('collapse');
}

//borrar puntuaciones
function eraseScore (){
    score.innerHTML = '';
}

//función para resetear juego
function resetClick (event) {
    event.preventDefault();    
    eraseScore ();
    collapseReset ();
    scoreGoodguys =0;
    scoreBadguys=0;
    i=0;
    htmlResult ('¡Comienza la batalla!'); 

}
//evento de click en reset
btnReset.addEventListener('click',resetClick);

