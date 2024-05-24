// storage variables
let seriesT;
let animeT;
let sitcomT;

function userInfo (nick, email, age, seriesT, animeT, sitcomT) {
    sessionStorage.setItem('nick', nick.value);
    sessionStorage.setItem('email', email.value);
    sessionStorage.setItem('edad', age.value);
    sessionStorage.setItem('series', seriesT);
    sessionStorage.setItem('anime', animeT);
    sessionStorage.setItem('sitcom', sitcomT);

}

function getUserInfo() {
    nick = sessionStorage.getItem('nick');
    email = sessionStorage.getItem('email');
    age = sessionStorage.getItem('edad');
    series = sessionStorage.getItem('series');
    anime = sessionStorage.getItem('anime');
    sitcom = sessionStorage.getItem('sitcom');
    
}

function checkUserInfo () {
        if (nick == null) {
            sessionStorage.setItem('empty', 'No se ha iniciado sesión');
            return false
        }
        return true
}

// local storage

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
    sum (historic);
}

function sum (historic) {
    let serieCounts = {};
    let animeCounts = {};
    let sitcomCounts = {};

    historic.array.forEach(user => {
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
