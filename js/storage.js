// storage variables

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

