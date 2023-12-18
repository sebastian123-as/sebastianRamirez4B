String.prototype.replaceAt = function (index, character){
    return this.substring(0, index) + character + this.substring(index + character.length)
};

const palabras = ["programar", "riwi", "codigo", "javascript", "html", "css", "formacion", "trabajo", "capacitacion", "empleo", "transformacion", "tecnologia", "beca", "compromiso"]


const palabraRandom = palabras[Math.floor(Math.random() * palabras.length)]



document.getElementById('palabras').innerText = palabras


document.getElementById('palabrasRandoms').innerText = palabraRandom

document.getElementById('caracteres').innerText = palabraRandom.length;


let lineas = ""

for(let z = 0; z < palabraRandom.length; z++){
    lineas +="<p class='letra'></p>";
}

document.getElementById('contenedorLineas').innerHTML = lineas


let linea = palabraRandom.replace(/./g, "_ ");

document.getElementById('pruebA').innerText = linea




function enviarLetra(){
    var letraUsuario = document.getElementById('letraUsuario').value;

    alert(letraUsuario + " " + palabraRandom.indexOf(letraUsuario))


    for( const i in palabraRandom){
        if(letraUsuario === palabraRandom[i]){
            linea = linea.replaceAt(i * 2, letraUsuario);
            document.getElementById('pruebA').innerText = linea
            

        }
    }
}