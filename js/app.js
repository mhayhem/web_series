

// catch info 

const data = document.getElementById('data');
const nick = document.getElementById('nick');
const email = document.getElementById('email');
const age = document.getElementById('age');
const empty = document.getElementById('empty');
const noValue = document.getElementById('noValue');
const user_data = document.getElementById('user_data');
const output = document.getElementById('output');

const series = document.getElementById('series');
const anime = document.getElementById('anime');
const sitcom = document.getElementById('sitcom');




// event litsener

data.addEventListener('submit', checkForm);

// check error in registro.html
if (sessionStorage.getItem('empty') != null) {
    empty.innerText=sessionStorage.getItem('empty');
    sessionStorage.removeItem('empty');
}

// functions

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

    // catch text of options

    



    let seriesT = series.options[series.selectedIndex].text;
    let animeT = anime.options[anime.selectedIndex].text;
    let sitcomT = sitcom.options[sitcom.selectedIndex].text;



    // send user info
    userInfo(nick, email, age, seriesT, animeT, sitcomT);

    // redirect to registro.html
    window.location.href='registro.html';

   output.innerHTML=`
   <p>Serie Popular: ${seriesT}</p>
   <p>Serie animada: ${animeT}</p>
   <p>Sitcom: ${sitcomT}</p>
   `

    
    return true
}



















