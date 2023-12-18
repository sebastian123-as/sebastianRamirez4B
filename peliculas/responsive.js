function cambioDeTema(){
    let tema = document.getElementById('tema-tipo').value;

    if(tema == "dark"){
        console.log("Tema oscuro");
        document.getElementById("icon-light").style.display = "none";
        document.getElementById("icon-dark").style.display = "block";
        document.getElementById("body").classList.add("tema-dark");
        document.getElementById("body").style.backgroundColor = "#272823";
        console.log("Se cambio correctamente a tema oscuro");

    }
    else{
        console.log("Tema claro");
        document.getElementById("icon-dark").style.display = "none";
        document.getElementById("icon-light").style.display = "block";
        document.getElementById("body").classList.remove("tema-dark");
        document.getElementById("body").style.backgroundColor = "#f5f5f5";
        console.log("Se cambio correctamente a tema oscuro");
    }

}

cambioDeTema();

function cambioDeIdioma(){
    let idioma = document.getElementById("select-idioma").value;

    if(idioma == "es"){
        console.log("Idioma español");
        document.getElementById("usa").style.display = "none";
        document.getElementById('colombia').style.display = "block";
        console.log("Idioma cambiado a español correctamente");
    }
    else{
        console.log("Idioma inglés");
        document.getElementById("usa").style.display = "block";
        document.getElementById('colombia').style.display = "none";
        console.log("Idioma cambiado a ingles correctamente");
    }

}

cambioDeIdioma();