

// catch info 

const data = document.getElementById('data');
const nick = document.getElementById('nick');
const email = document.getElementById('email');
const age = document.getElementById('age');
const empty = document.getElementById('empty');
const noValue = document.getElementById('noValue');

const series = document.getElementById('series');
const anime = document.getElementById('anime');
const sitcom = document.getElementById('sitcom');

// catch select-option index

const seriesIndex = series.selectedIndex;
const animeIndex = anime.selectedIndex;
const sitcomIndex = sitcom.selectedIndex;

// catch option text

const seriesT = series.options[seriesIndex].text;
const animeT = anime.options[animeIndex].text;
const sitcomT = sitcom.options[sitcomIndex].text;

console.log(seriesT, animeT, sitcomT);

// group inputs

const listSeries = []

listSeries.push(nick, email, age, seriesT, animeT, sitcomT);



// event litsener

data.addEventListener('submit', checkForm, );

// functions

function checkForm(event) {
    if (nick.value.length == '0') {
        event.preventDefault();
        empty.innerText='Necesita rellenar el campo nombre';
        nick.focus();
        return false;
    }
    if (age.value.match(/(?<!\S)[a-zA-Z]/)) {
        event.preventDefault();
        empty.innerText='El campo edad solo puede ser un numero';
        age.focus();
        return false;
    }
    if (age.value.length == '0') {
        event.preventDefault();
        empty.innerText='Necesita rellenar el campo edad';
        age.focus();
        return false;
    }
    if (series.value == '0') {
        event.preventDefault();
        noValue.innerText='Debe seleccionar una opción valida en series populares';
        return false;
    }
    if (anime.value == '0') {
        event.preventDefault();
        noValue.innerText='Debe seleccionar una opción valida en series animadas';
        return false;
    }
    if (sitcom.value == '0') {
        event.preventDefault();
        noValue.innerText='Debe seleccionar una opción valida en sitcom';
        return false;
    }
    userInfo(listSeries);
    return true

}


