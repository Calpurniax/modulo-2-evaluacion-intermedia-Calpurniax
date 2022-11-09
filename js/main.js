'use strict';

//variables dentro del HTML
const select = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const btnReset = document.querySelector('.js-reset');
const textResult = document.querySelector('.js-text');
const score = document.querySelector('.js-score');
const bcontainer = document.querySelector('.js-bad-container');
const gcontainer = document.querySelector('.js-good-container');
const battleContainer = document.querySelector('.js-battle-text');
//variables de puntuación y contador
let scoreGoodguys = 0;
let scoreBadguys = 0;
let i = 0;
//variables para los malvados
let badStrength = 0;
let badName = 0;
let badId = 0;
//variables para los buenos
let goodStrength = 0;
let goodName = 0;
let goodId = 0;
//array con las razas malvadas
const badGuysRaces = [
    '',
    {
        name: 'surenos-malos',
        strength: 2,
        id: 'sureños'
    },
    {
        name: 'orcos',
        strength: 2,
        id: 'orcos'
    },
    {
        name: 'goblins',
        strength: 2,
        id: 'goblins'
    },
    {
        name: 'huargos',
        strength: 3,
        id: 'huargos'
    },
    {
        name: 'trolls',
        strength: 5,
        id: 'trolls'
    },
];
//array con las razas bondadosas
const goodGuysRaces = [
    '',
    {
        name: 'pelosos',
        strength: 1,
        id: 'pelosos'
    },
    {
        name: 'surenos-buenos',
        strength: 2,
        id: 'sureños'

    },
    {
        name: 'enanos',
        strength: 3,
        id: 'enanos'
    },
    {
        name: 'numenoreanos',
        strength: 4,
        id: 'númenóreanos'
    },
    {
        name: 'elfos',
        strength: 5,
        id: 'elfos'
    },

]
//función para elegir un número entre el 1 y el 5
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
//función para convertir el valor random en una raza
function generateBadGuy() {
    let random = getRandomNumber(5);
    badStrength = searchStrength(random, badGuysRaces)
    badName = searchName(random, badGuysRaces)
    badId = searchId(random, badGuysRaces);
}
//funcion para buscar en los array
function searchStrength(index, array) {
    return array[index].strength
}
function searchName(index, array) {
    return array[index].name
}
function searchId(index, array) {
    return array[index].id
}
//función para la facción bondadosa
function selectGoodGuy() {
    let selectValue = (select.value);
    if (selectValue === '') {
        return selectValue = 0;
    } else {
        const goodGuyNumber = parseInt(selectValue);
        goodStrength = searchStrength(goodGuyNumber, goodGuysRaces);
        goodName = searchName(goodGuyNumber, goodGuysRaces);
        goodId = searchId(goodGuyNumber, goodGuysRaces);
    }
}
//funcion para comparar las dos facciones
function compare(good, evil) {
    if (good > evil) {
        scoreGoodguys++;
        renderResult('Ha ganado el Ejército del Bien! <span class="score-span">Enhorabuena.</span>')
    } else if (good < evil) {
        scoreBadguys++;
        renderResult(`Ha ganado el Ejército del Mal! <span class="score-span">Vuelve a intentarlo.</span>`);
        return scoreBadguys
    } else {
        renderResult('Empate')
    }
}
//funcion para pintar en el HTML
function renderResult(result) {
    textResult.innerHTML = result;
}
//función manejadora del evento
function handleClick(event) {
    event.preventDefault();
    const goodGuys = selectGoodGuy();
    if (goodGuys === 0) {
        renderResult('Por favor selecciona una raza')
    } else {
        generateBadGuy();
        i++
        cleanBackground()
        changeBackground();
        compare(goodStrength, badStrength);
        scoreWriting(scoreGoodguys, scoreBadguys);
        renderArmy();
        finishGame(i, scoreGoodguys, scoreBadguys);
    }
}
//evento
btn.addEventListener('click', handleClick);

//BONUS//

//función para pintar los puntos de cada facción:
function scoreWriting(goodGuys, badGuys) {
    score.innerHTML = `<li>Jugadora: ${goodGuys}</li><li>Computadora: ${badGuys}</li>`
}
//bucle
function finishGame(i, scoreGoodguys, scoreBadguys) {
    if (i > 9) {
        collapseBtn()
        if (scoreGoodguys > scoreBadguys) {
            textResult.classList.add('finish')
            renderResult('Has ganado el juego');
        } else {
            textResult.classList.add('finish')
            renderResult('Has perdido el juego');
        }
    }
}
//collapse boton "Jugar"
function collapseBtn() {
    btn.classList.add('collapse');
    btnReset.classList.remove('collapse');
}
//colapsar el boton de reset
function collapseReset() {
    btn.classList.remove('collapse');
    btnReset.classList.add('collapse');
}
//borrar puntuaciones
function eraseScore() {
    score.innerHTML = '';
}
//función para resetear juego
function resetClick(event) {
    event.preventDefault();
    eraseScore();
    collapseReset();
    cleanBackground()
    cleanArmy()
    textResult.classList.remove('finish');
    scoreGoodguys = 0;
    scoreBadguys = 0;
    i = 0;
    renderResult('¡Comienza la batalla!')
}
//evento de click en reset
btnReset.addEventListener('click', resetClick);
//Cambiar el fondo
function changeBackground() {
    console.log(goodName, badName)
    bcontainer.classList.add(`${badName}`)
    gcontainer.classList.add(`${goodName}`)
}
//limpia las clases de css
function cleanBackground() {
    for (const element of badGuysRaces) {
        let raceName = element.name
        if (bcontainer.classList.contains(`${raceName}`)) {
            bcontainer.classList.remove(`${raceName}`)
        }
    }
    for (const element of goodGuysRaces) {
        let raceName = element.name
        if (gcontainer.classList.contains(`${raceName}`)) {
            gcontainer.classList.remove(`${raceName}`)
        }
    }
}
//renderiza los ejércitos 
function renderArmy() {
    battleContainer.innerHTML = `${goodId} <span class="battle-span">contra </span>${badId} `;
}
//reset de los ejércitos
function cleanArmy() {
    battleContainer.innerHTML = '';
}

