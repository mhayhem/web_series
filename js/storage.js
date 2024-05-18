// storage variables

function userInfo (listSeries) {
    sessionStorage.setItem('nick', nick.value);
    sessionStorage.setItem('email', email.value);
    sessionStorage.setItem('edad', age.value);
    sessionStorage.setItem('series', seriesT);
    sessionStorage.setItem('anime', animeT);
    sessionStorage.setItem('sitcom', sitcomT);
}

function showInfo() {
    let nick = sessionStorage.getItem('nick');
    let email = sessionStorage.getItem('email');
    let age = sessionStorage.getItem('edad');
    let series = sessionStorage.getItem('series');
    let anime = sessionStorage.getItem('anime');
    let sitcom = sessionStorage.getItem('sitcom');
}

console.log(listSeries);