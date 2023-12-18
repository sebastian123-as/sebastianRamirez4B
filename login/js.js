person = [
    {
        nombre: "Manuela",
        genero: "femenino",
        correo: "manuela123@gmail.com",
        password: "manuela123",
        imagenes: [
            './images/img-1.jpg',
            './images/img-2.jpeg',
            './images/img-3.jpg',
            './images/img-4.jpg',
            './images/img-5.webp',
            './images/img-6.jpg',
            './images/img-7.jpg',
            './images/img-8.jpg',
            './images/img-9.webp',
            './images/img-10.jpeg',
        ]
    }, 
    {
        nombre: "Samuel",
        genero: "masculino",
        correo: "samuel123@gmail.com",
        password: "samuel123",
        imagenes: [
            './images/img-11.jpg',
            './images/img-12.jpg',
            './images/img-13.jpeg',
            './images/img-14.webp',
            './images/img-15.jpg',
            './images/img-16.jpg',
            './images/img-17.webp',
            './images/img-18.jpg',
            './images/img-19.jpg',
            './images/img-20.jpg',
        ]
    }
]


function iniciarSesion(){
    let correo = document.getElementById('correo').value;
    let password = document.getElementById('contrasena').value;

    

    let correoVerificado =  person.filter(person => person.correo === correo)

    if((correoVerificado[0].correo === correo) && (correoVerificado[0].password === password)){
        sessionStorage.setItem('nombre', correoVerificado[0].nombre);
        sessionStorage.setItem('auth', true)
        let cadenaJson = JSON.stringify(correoVerificado[0].imagenes)
        let genero = JSON.stringify(correoVerificado[0].genero)
        sessionStorage.setItem('genero', genero)
        sessionStorage.setItem("imagenes", cadenaJson)
        location.href = "home.html";
    }else{
        alert("Revisa que todo este correcto")
    }
    
    
    /*
    person.forEach((data) => {
        if(correo === data.correo && password === data.password){
            alert("Funciono")
        }
    })
    */
}