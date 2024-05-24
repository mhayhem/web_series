
// catch userInfo

getUserInfo();

// check if nick is null

if (!checkUserInfo()) location='index.html';



output.innerHTML = `
        <p>Nombre: ${nick}</p>
        <p>Email: ${email}</p>
        <p>Edad: ${age}</p>
        <p>Serie popular: ${series}</p>
        <p>Serie animada: ${anime}</p>
        <p>Sitcom: ${sitcom}</p>
    `;

