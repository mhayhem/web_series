/**
 * @author Daniel Grande <mhayhemdev@gmial.com>
 * 
 * @link https://github.com/mhayhem/web_series
 */


// variables 

var data;
var nick;
var email;
var age;
var empty;
var noValue;
var series;
var anime;
var sitcom;


// functions

/**
 * Description check conditions
 * @param {HTMLElement} event
 * 
 */
function checkForm(event) {
    event.preventDefault();
    // validations
    const validations = [
        {condition: nick.value.length == 0, message: 'Necesita rellenar el campo nombre', focusElement: nick},
        {condition: age.value.match(/(?<!\S)[a-zA-Z]/), message: 'El campo edad solo puede ser un numero', focusElement: age},
        {condition: age.value.length == 0, message: 'Necesita rellenar el campo edad', focusElement: age},
        {condition:  age.value < 0 || age.value > 99, message: 'La edad debe estar compendida en un rango de 0-99', focusElement: age},
        {condition: series.value == 0, message: 'Debe seleccionar una opción valida en series populares', focusElement: series},
        {condition: anime.value == 0, message: 'Debe seleccionar una opción valida en series animadas', focusElement: anime},
        {condition: sitcom.value == 0, message: 'Debe seleccionar una opción valida en sitcom', focusElement: sitcom},
    ];
    for (const {condition, message, focusElement} of validations) {
        if (condition) {
            event.preventDefault();
            if (focusElement === series || focusElement === anime || focusElement === sitcom) {
                noValue.innerText=message;
            }
            else {
                empty.innerText=message;
            }
            focusElement.focus();
            return false;
        }
    }

    // take text of options

    let seriesT = series.options[series.selectedIndex].text;
    let animeT = anime.options[anime.selectedIndex].text;
    let sitcomT = sitcom.options[sitcom.selectedIndex].text;

    // send user info to fucntions

    userInfo(nick, email, age, seriesT, animeT, sitcomT, geolocationTxt);
    storageHistoric(nick, email, age, seriesT, animeT, sitcomT);

    //redirect to other html

    window.location.href='registro.html';
   
    return seriesT, animeT, sitcomT;
}

/**
 * Description
 * 
 * function to load and check of form
 */
function domLoaded() {
    data = document.getElementById('data');
    nick = document.getElementById('nick');
    email = document.getElementById('email');
    age = document.getElementById('age');
    empty = document.getElementById('empty');
    noValue = document.getElementById('noValue');
    series = document.getElementById('series');
    anime = document.getElementById('anime');
    sitcom = document.getElementById('sitcom');

    // check error in registro.html
    if (sessionStorage.getItem('empty') != null) {
        empty.innerText=sessionStorage.getItem('empty');
        sessionStorage.removeItem('empty');
    }

    data.addEventListener('submit', checkForm);
}

// event litsener

document.addEventListener('DOMContentLoaded', domLoaded)

// geolocation

geolocationData();


