/**
 * @author Daniel Grande <mhayhemdev@gmial.com>
 * 
 * @link https://github.com/mhayhem/web_series
 */

// variables

var seriesT;
var animeT;
var sitcomT;
var geolocationTxt;

// functions

/**
 * Description take info from inputs
 * @param {HTMLElement} nick
 * @param {HTMLElement} email
 * @param {HTMLElement} age
 * @param {HTMLElement} seriesT
 * @param {HTMLElement} animeT
 * @param {HTMLElement} sitcomT
 * @param {HTMLElement} geolocationTxt
 */
function userInfo (nick, email, age, seriesT, animeT, sitcomT, geolocationTxt) {
    sessionStorage.setItem('nick', nick.value);
    sessionStorage.setItem('email', email.value);
    sessionStorage.setItem('edad', age.value);
    sessionStorage.setItem('series', seriesT);
    sessionStorage.setItem('anime', animeT);
    sessionStorage.setItem('sitcom', sitcomT);
    sessionStorage.setItem('geolocationTxt', geolocationTxt);

}

/**
 * Description store data in sessionstore
 */
function getUserInfo() {
    nick = sessionStorage.getItem('nick');
    email = sessionStorage.getItem('email');
    age = sessionStorage.getItem('edad');
    series = sessionStorage.getItem('series');
    anime = sessionStorage.getItem('anime');
    sitcom = sessionStorage.getItem('sitcom');
    
}

/**
 * Description check that the nick is not null
 */
function checkUserInfo () {
        if (nick == null) {
            sessionStorage.setItem('empty', 'No se ha iniciado sesión');
            return false
        }
        return true
}


/**
 * Description store data in localstorage
 * 
 * @param {string} nick
 * @param {string} email
 * @param {string} age
 * @param {string} seriesT
 * @param {string} animeT
 * @param {string} sitcomT
 * 
 */

function storageHistoric (nick, email, age, seriesT, animeT, sitcomT) {
    let historicUser = localStorage.getItem('historic');
    let historic;
    if (historicUser == null) {
        historic = [];
    }
    else {
        historic = JSON.parse(historicUser);
    }
    let userInfo = {
        user: nick.value,
        email: email.value,
        age: age.value,
        serie1: seriesT,
        serie2: animeT,
        serie3: sitcomT,
        date: Date.now()
    }
    historic.push(userInfo);
    localStorage.setItem('historic', JSON.stringify(historic));
    return chosenCount (historic);
}

/**
 * Description
 * @param {Array} historic
 * 
 */
function chosenCount (historic) {
    let serieCounts = {};
    let animeCounts = {};
    let sitcomCounts = {};

    historic.forEach(user => {
        if (serieCounts[user.serie1]) {
            serieCounts[user.serie1]++;
        }
        else {
            serieCounts[user.serie1] = 1;
        }

        if (animeCounts[user.serie2]) {
            animeCounts[user.serie2]++;
        }
        else {
            animeCounts[user.serie2] = 1;
        }

        if (sitcomCounts[user.serie3]) {
            sitcomCounts[user.serie3]++;
        }
        else {
            sitcomCounts[user.serie3] = 1;
        }
    });

}

/**
 * Description check geolocation
 * 
 */
function geolocationData () {
    if (!navigator.geolocation) {
            geolocationTxt='La geolocalización no es compatible con el navegador';
    }
    else {
        navigator.geolocation.getCurrentPosition(
        // succes
            (position)=> {geolocationTxt='latitud: ' + position.coords.latitude + ', longitud: ' + position.coords.longitude},
        // error
        ()=> {geolocationTxt='No se ha podido encontrar la posición de equipo'}
        );
    }
}
