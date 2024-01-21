let JsonInfoUsser = JSON.parse(sessionStorage.getItem('infoUser'));

let objNew = [JsonInfoUsser]


console.log(objNew)

function login(){
    let userName = document.getElementById("userName").value;
    let passWord = document.getElementById("passWord").value;


    let encontrado = objNew.find(fun => {
        for (let clave in fun) {
            if (fun[clave].correo == userName && fun[clave].contraseña == passWord) {
                alert("Inicio de sesión correcto :D");
                sessionStorage.setItem('inicio', 'true');
                const img = {
                    fotoPerfil: fun[clave].fotoPerfil,
                    imagenesPerfil: fun[clave].imagenesPerfil,
                    nombre: fun[clave].nombre,
                    alias: fun[clave].alias,
                };
                sessionStorage.setItem('imagenes', JSON.stringify(img));
                window.location.href = "../perfil_personal/index.html";
                return true
            }
        }
        alert("contraseña o correo incorrecto :c")
        return false
    });
    
}