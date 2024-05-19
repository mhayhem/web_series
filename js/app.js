

// catch info 

const data = document.getElementById('data');
const nick = document.getElementById('nick');
const email = document.getElementById('email');
const age = document.getElementById('age');
const empty = document.getElementById('empty');
const noValue = document.getElementById('noValue');
const user_data = document.getElementById('user_data');

const series = document.getElementById('series');
const anime = document.getElementById('anime');
const sitcom = document.getElementById('sitcom');


// event litsener

data.addEventListener('submit', checkForm, );

// functions

function checkForm(event) {
    // check form
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
    if (age.value < 0 || age.value > 99) {
        event.preventDefault();
        empty.innerText='La edad ha de estar dentro del rango de 0 - 99';
        return false
    }
    // catch text of options

    let seriesIndex = series.selectedIndex;
    let animeIndex = anime.selectedIndex;
    let sitcomIndex = sitcom.selectedIndex;



    let seriesT = series.options[seriesIndex].text;
    let animeT = anime.options[animeIndex].text;
    let sitcomT = sitcom.options[sitcomIndex].text;

    // show series catched
    event.preventDefault();
    user_data.innerText=`Series populares: ${seriesT}, animadas: ${animeT} y sitcom: ${sitcomT}`;

    // send user info
    userInfo(nick, email, age, seriesT, animeT, sitcomT);
    return true
}




