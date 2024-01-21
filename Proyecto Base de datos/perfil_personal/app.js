function inicioPerfil(){
    let respuestaServidor = sessionStorage.getItem('inicio');
    if(respuestaServidor == 'true'){
        alert("Bienvenido")
        let imagenes = JSON.parse(sessionStorage.getItem('imagenes'));
        document.getElementById('iconoPerfil1').setAttribute('src', imagenes.fotoPerfil);
        document.getElementById('iconoPerfil2').setAttribute('src', imagenes.fotoPerfil);
        document.getElementById('aliasPersona').innerText = imagenes.alias
        document.getElementById('nombrePersona').innerText = imagenes.nombre
        
        
        let containerImagenes = document.getElementById("containerImg")
        for(let i = 0; i < imagenes.imagenesPerfil.length; i++){
            //col
            let colImg = document.createElement("div");
            colImg.classList.add('col-md-4')
            colImg.classList.add('mb-4')
            containerImagenes.appendChild(colImg);

            //img
            let imgs = document.createElement("img");
            imgs.classList.add('img-fluid')
            imgs.setAttribute('src', imagenes.imagenesPerfil[i])
            colImg.appendChild(imgs);

        }
    }else{
        alert("Por seguridad bloquearemos su cuenta")
        location.href = '../login/index.html';
    }
}

inicioPerfil()

document.getElementById("btnCerrar").addEventListener("click", ()=>{
    let entradaPorUsuario = prompt("escribe para cerrar sesion: COMFIRMAR")
    if(entradaPorUsuario == "COMFIRMAR"){
        window.location.href = "../login/index.html";
        sessionStorage.removeItem('inicio')
    }
})