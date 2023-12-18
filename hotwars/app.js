var life = 10
var contCorazones = document.getElementById("colContenedorCorazones")
var contCorazonesMuertos = document.getElementById("colContenedorCorazonesMuertos")
function agregar(param){
  let contador = 1
  let leIntervale = setInterval(()=>{
    if(contador == param){
      clearInterval(leIntervale)
    }
    corazones = document.createElement('i')
    corazones.classList.add("prueba1", "corazon", "fa-sharp", "fa-solid", "fa-heart")
    corazones.setAttribute("id", `corazon${contador}`)
    contCorazones.appendChild(corazones)
    contador++
  },500)
}

function eliminarCorazon(){
  contCorazones = document.getElementById("colContenedorCorazones")
  contCorazonesMuertos = document.getElementById("colContenedorCorazonesMuertos")
  contCorazones = contCorazones.lastChild;
  contCorazones.classList.toggle("corazonMuerto")
  contCorazonesMuertos.appendChild(contCorazones)
  life = life -1
  alert("Te quedan "+life+" vidas")
  if(life === 0){
    document.getElementById("homePage").classList.add("d-none")
    document.getElementById("paso4").classList.add("d-none")
    document.getElementById("paso5").classList.add("d-none")
    document.getElementById("paso6").classList.add("d-none")
    document.querySelector("body").classList.add("gameOver")
    let body  = document.querySelector("body");
    //Container
    let container = document.createElement("div")
    container.classList.add("container")
    body.appendChild(container)
    //row
    let row = document.createElement("div")
    row.classList.add("d-flex")
    row.classList.add("justify-content-center")
    container.appendChild(row)
    //column
    let colum = document.createElement("div")
    colum.classList.add("col-md-4")
    row.appendChild(colum)
    //
    let btnCreado = document.createElement("button")
    btnCreado.innerText = "funcionando..."
    btnCreado.addEventListener("click", ()=>{
      Location.reload()
    })
    colum.appendChild(btnCreado)
  }
}

agregar(life)

let timeout;

function cargaDePantalla(funcion,timeout){
  timeout = setTimeout(funcion, timeout);
}

function aparecerBtn() {
    alert("¿Preparado para la aventura?");
    document.getElementById('botonSiguiente').style.display = "inline"
}

cargaDePantalla(aparecerBtn,3250);


function siguientePresentacion(){
  document.getElementById('homePage').classList.add('displayNone')
  document.querySelector('body').classList.remove('imagen-fondo')
  document.querySelector('body').classList.add('fondo-paso1')
  document.getElementById('paso-1').classList.remove('displayNone')
}

const selecionCasa = []

function inputsClik(){
  let input1 = document.getElementById('inputInicio1').value
  let input2 = document.getElementById('inputInicio2').value
  let input3 = document.getElementById('inputInicio3').value
  let input4 = document.getElementById('inputInicio4').value
  let input5 = document.getElementById('inputInicio5').value

  if(input1 == "" || input2 == "" || input3 == "" || input4 == "" || input5 == ""){
    alert("Debes de llenar todos los campos")
  }else{
    selecionCasa.push({
      nombre: input1, edad: input2, familia: input3, cualidades: input4, linaje: input5, casa: ""
    })
  
    console.table(selecionCasa)
  
    document.getElementById('containerForm').classList.add('displayNone')
    document.getElementById('imgCargando').classList.remove('displayNone')
    document.getElementById('labelPaso1').innerText = 'Guardando datos, por favor espere'
    document.getElementById('labelPaso1').classList.add('text-align-center')
  
    function pantallaCarga(){
      document.getElementById('paso-1').classList.add('displayNone')
      document.getElementById('paso-2').classList.remove('d-none')
      document.querySelector('body').classList.remove('fondo-paso1')
      document.querySelector('body').classList.add('fondoPaso2')
    }
  
    cargaDePantalla(pantallaCarga,4000);
  }
}

const clases = [];

var contador = 0

function siguienteProfesor(){
  contador++;
  if(contador == 1){
    document.getElementById('profesor1').classList.add("d-none");
    document.getElementById('profesor2').classList.remove("d-none");
  }else if(contador == 2){
    document.getElementById('profesor2').classList.add("d-none");
    document.getElementById('profesor3').classList.remove("d-none");
  }else if(contador == 3){
    document.getElementById('profesor3').classList.add("d-none");
    document.getElementById('profesor4').classList.remove("d-none");
  }else if(contador == 4){
    document.getElementById('profesor4').classList.add("d-none");
    document.getElementById('profesor5').classList.remove("d-none");
  }else if(contador == 5){
    document.getElementById('profesor5').classList.add("d-none");
    document.getElementById('profesor6').classList.remove("d-none");
  }else if(contador == 6){
    document.getElementById('profesor6').classList.add("d-none");
    document.getElementById('profesor7').classList.remove("d-none");
  }else{
    document.getElementById('profesor7').classList.add("d-none");
    document.getElementById('btnSiguienteProfe').classList.add("d-none");
    document.getElementById('tituloProfesores').classList.add("d-none");
    document.getElementById('cargandoProfesores').classList.remove("d-none");
    document.getElementById('textoCargandoProfes').classList.remove("d-none");

    function clasesYprofesores(){
      clases.push({
        transformaciones: "Profesor Kevin Slughorn",
        herbologia: "Profesor Maria Umbridge",
        pociones: "Profesor Liliana McGonagall",
        encantamientos: "Profesora Jackie",
        defensaContraLasArtesOscuras: "Profesor Robinson Snape",
        animalesMagicos: "Profesor David Filch",
        historiaDeMagia: "Profesor Ronald Sprout"});
    
      console.table(clases)
    }
    //pociones multijugos branquialgas

    clasesYprofesores();

    function pantallaAnadiendoClases(){
      document.getElementById('cargandoProfesores').classList.add("d-none");
      document.getElementById('textoCargandoProfes').classList.add("d-none");
      document.querySelector('body').classList.add('fondoPaso3')
      document.getElementById('paso3').classList.remove("d-none");
    }

    cargaDePantalla(pantallaAnadiendoClases,3250);
  }
}


console.table(selecionCasa)

function cargandoSombrero(){

  document.getElementById('cargandoImgSombrero').classList.remove("d-none");
  document.getElementById('textoCargandoSombrero').classList.remove("d-none");
  document.getElementById('btnSombrero').classList.add("d-none");
  document.getElementById('imagenDeSombrero').classList.add("d-none");
  document.getElementById('cuerpoInfoSeleccionador').classList.add("d-none");

  function validateCasa(){
      
    let cualidad = selecionCasa[0].cualidades
    let raza =selecionCasa[0].linaje

    const funcionNoCumplidaM = ["Gryffindor", "Hufflepuff", "Ravenclaw"]

    const funcionNoCumplidaP = ["Gryffindor", "Ravenclaw", "Slytherin"]

    if(cualidad === "Valor, fuerza, audacia" && (raza === "Mestizo" || "Muggle" || "Sangre pura")){
      selecionCasa[0].casa = "Gryffindor"
    }
    else if ((cualidad === "Justicia, Lealtad, Paciencia") && (raza === "Mestizo" || raza === "Muggle")){
      selecionCasa[0].casa = "Hufflepuff"
    }else if(cualidad === "Creatividad, Erudición, Inteligencia" && (raza === "Mestizo" || "Muggle" || "Sangre pura")){
      selecionCasa[0].casa = "Ravenclaw"
    }else if(cualidad === "Ambición, Determinación, Astucia" && (raza === "Sangre pura")){
      selecionCasa[0].casa = "Slytherin"
    }else{
      if((cualidad == "Justicia, Lealtad, Paciencia") || (raza == "sangre pura")){
        const randomPuro = funcionNoCumplidaP[Math.floor(Math.random() * funcionNoCumplidaP.length)]
        selecionCasa[0].casa = randomPuro;
      }else{
        const randomM = funcionNoCumplidaM[Math.floor(Math.random() * funcionNoCumplidaM.length)]
        selecionCasa[0].casa = randomM;
      }
    }
    console.table(selecionCasa);

  }

  validateCasa();
  
  let casa = selecionCasa[0].casa;

  function cargaDePantallaSombrero(){
    if(casa === "Gryffindor"){
      document.getElementById("cargandoImgSombrero").setAttribute("src", "https://i.postimg.cc/RZJ2Hy77/Gen-2-70382649-Leonardo-Diffusion-X-M-5.gif")
      document.getElementById("textoCargandoSombrero").innerText = `Felicidades eres un ${casa}`;
    }else if(casa === "Hufflepuff"){
      document.getElementById("cargandoImgSombrero").setAttribute("src", "https://i.postimg.cc/nV7k59Hr/Gen-2-1491632405-Leonardo-Diffusion-X-M-5-1.gif")
      document.getElementById("textoCargandoSombrero").innerText = `Felicidades eres un ${casa}`;
    }else if(casa === "Ravenclaw"){
      document.getElementById("cargandoImgSombrero").setAttribute("src", "https://i.postimg.cc/x8HTVJYy/Gen-2-556117349-deseo-que-la-cara-de-Leonardo-Diffusion-X-M-5.gif")
      document.getElementById("textoCargandoSombrero").innerText = `Felicidades eres un ${casa}`;
    }else{
      document.getElementById("cargandoImgSombrero").setAttribute("src", "https://i.postimg.cc/0QJQkJnH/Gen-2-1157876098-que-las-plantas-se-m-Leonardo-Diffusion-X-M-5.gif")
      document.getElementById("textoCargandoSombrero").innerText = `Felicidades eres un ${casa}`;
    }
    document.getElementById('btnSiguienteCasa').classList.remove("d-none");
  }

  cargaDePantalla(cargaDePantallaSombrero,3250);
}


function siguientePaso4(){
  document.getElementById('paso3').classList.add("d-none");
  document.querySelector('body').classList.add('fondoPaso4');
  document.getElementById('paso4').classList.remove("d-none");

  clases[0].transformaciones = {Docente: "Profesor Kevin Slughorn",
   Horario: "Por definir",

   encantamiento: "Riddikulus",

   buscarBoggart: function busquedaBoggarts(){
    let posibilidadDeEncontrarUnBoggart = Math.floor(Math.random() * 2);
    if(posibilidadDeEncontrarUnBoggart === 0){
      document.getElementById('buscandoBoggart').classList.add('d-none');
      document.getElementById('transformarBoggart').classList.remove('d-none');
      document.getElementById('aguardeBuscando').classList.add('d-none');
      document.getElementById('boggartNoEncontrado').classList.add('d-none');
      let btnOnClikTirarHechizo = document.getElementById("btnBoggartEncontrado")
      btnOnClikTirarHechizo.addEventListener('click', clases[0].transformaciones.tirarEncantamientoRiddikulus)
    }else{
      alert("Boggarts no encontrados");
      document.getElementById('btnBogar').classList.add('d-none');
      document.getElementById('aguardeBuscando').classList.add('d-none');
      document.getElementById('buscandoBoggart').classList.add('d-none');
      document.getElementById('boggartNoEncontrado').classList.remove('d-none');
      let btnBuscarBoggart = document.getElementById('bucarDenuevoBoggart');
      btnBuscarBoggart.addEventListener('click', clases[0].transformaciones.buscarBoggart);
    }},

    tirarEncantamientoRiddikulus: function tirarEncantamiento(){
      document.getElementById("boggartGanador").classList.add('d-none');
      document.getElementById('transformarBoggart').classList.add('d-none');
      let ataqueRandomConEncantamiento = Math.floor(Math.random() * 2);
      if(ataqueRandomConEncantamiento == 0){
        alert(`El encantamiento de ${clases[0].transformaciones.encantamiento} si ha funcionado`);
        document.getElementById("hechizoSifunciono").classList.remove('d-none');
        let btnHechizoFuncionoYAtacar = document.getElementById('btnHechizoFunciono')
        btnHechizoFuncionoYAtacar.addEventListener('click', function(){
          clases[0].transformaciones.enfrentarAlBoggart(0)
        })
  

      }else{
        alert(`El encantamiento de ${clases[0].transformaciones.encantamiento} no ha funcionado`);
        document.getElementById("hechizoNofunciono").classList.remove('d-none');
        let btnHechizoNoFuncionoYAtacar = document.getElementById('btnHechizoNoFunciono')
        btnHechizoNoFuncionoYAtacar.addEventListener('click', clases[0].transformaciones.enfrentarAlBoggart)
        
      }
    },

    enfrentarAlBoggart: function boggartEnfrentamiento(valor){
      
      if(valor === 0){
        let probabilidadAltaDeGanarContraBoggart = Math.floor(Math.random() * 2)
        if(probabilidadAltaDeGanarContraBoggart == 0){
          document.getElementById("hechizoSifunciono").classList.add('d-none');
          document.getElementById("boggartDerrotado").classList.remove('d-none');
          alert("Derrotastes al Boggart felicidades")      
        }else{
          document.getElementById("hechizoSifunciono").classList.add('d-none');
          document.getElementById("boggartGanador").classList.remove('d-none');
          alert("El Boggart te derroto, practica tu efectividad en ataque")
          eliminarCorazon();
          /*boton por si quiere repetir el enfrentamiento la persona*/
          let btnRepetirEnfrentamientoBoggart = document.getElementById("btnRepetirEnfrentamientoBoggart")
          btnRepetirEnfrentamientoBoggart.addEventListener("click", clases[0].transformaciones.tirarEncantamientoRiddikulus)
        }
      }else{
        document.getElementById("hechizoNofunciono").classList.add('d-none');
        let probabilidadBajaDeGanarContraBoggart = Math.floor(Math.random() * 4)
        if(probabilidadBajaDeGanarContraBoggart == 0){
          document.getElementById("boggartDerrotado").classList.remove('d-none');
          alert("Ganastes por poco...")
          let paso5 = document.getElementById("btnBoggartDerrotado")
          paso5.addEventListener("click", clases[0].transformaciones.pasarPaso5)
        }else{
          document.getElementById("boggartGanador").classList.remove('d-none');
          eliminarCorazon();
          alert("El Boggart te derroto, practica tu hechizo riddikulus")
          /*boton por si quiere repetir el enfrentamiento la persona*/
          let btnRepetirEnfrentamientoBoggart = document.getElementById("btnRepetirEnfrentamientoBoggart")
          btnRepetirEnfrentamientoBoggart.addEventListener("click", clases[0].transformaciones.tirarEncantamientoRiddikulus)
        }
      }
    },


    boggartDerrotado: function derrotadoBoggart(){
      document.getElementById("boggartDerrotado").classList.remove('d-none');
      document.getElementById("hechizoSifunciono").classList.add('d-none');
      document.getElementById("hechizoNofunciono").classList.add('d-none');
      document.getElementById("boggartGanador").classList.add('d-none');
    },

    boggartGanador: function ganadorBoggart(){
      document.getElementById("boggartDerrotado").classList.add('d-none');
      document.getElementById("boggartGanador").classList.remove('d-none');
      document.getElementById("hechizoSifunciono").classList.add('d-none');
      document.getElementById("hechizoNofunciono").classList.add('d-none');
    },

    pasarPaso5: function pasarAlPaso5(){
      document.getElementById("paso4").classList.add("d-none");
      alert("Estoy funcionando...")
      document.getElementById("paso5").classList.remove('d-none');
      document.querySelector('body').classList.remove('fondoPaso4')
      document.querySelector('body').classList.add('fondoPaso5')
    }
  }
  console.table(clases);
}

function buscarB(){
  document.getElementById('imgClaseT').classList.add('d-none');
  document.getElementById('cuerpoBoggart').classList.add('d-none');
  document.getElementById('buscandoBoggart').classList.remove('d-none');
  document.getElementById('btnBogar').classList.add('d-none');
  document.getElementById('aguardeBuscando').classList.remove('d-none');
    
  function cargandobogar() {
    clases[0].transformaciones.buscarBoggart()
  }

  cargaDePantalla(cargandobogar,3250);
}

/* paso5 */

function paso5(){
  document.getElementById("paso4").classList.add("d-none");
  alert("Estoy funcionando...")
  document.getElementById("paso5").classList.remove('d-none');
  document.querySelector('body').classList.remove('fondoPaso4')
  document.querySelector('body').classList.add('fondoPaso5')
  document.getElementById("EsperaGeneralDefensa").classList.remove("d-none")
  function pruebaError(){
    document.getElementById("EsperaGeneralDefensa").classList.add("d-none")
    document.getElementById("containerEnClasesDeDefensas").classList.remove("d-none")
    let btnContainerEnClasesDeDefensas = document.getElementById("btnContainerEnClasesDeDefensas")
    btnContainerEnClasesDeDefensas.addEventListener("click", function(){
      clases[0].defensaContraLasArtesOscuras.animalPatronus()
    })
  }

  cargaDePantalla(pruebaError,3250);


  clases[0].defensaContraLasArtesOscuras = {
    Docente: "Profesor Robinson Snape",
    animalPatronus: function animalPAtronusFunc(){
      const animalPatronus = ["Siervo", "Pato", "Perro", "Castor", "", "", "", "Cucarron", "Hormiga", "Grillo", "Buho", "Dragon"]
      let animalPatronusRandom = animalPatronus[Math.floor(Math.random() * animalPatronus.length)] 
      alert(`Tu animal Patronus es ${animalPatronusRandom}`)
      document.getElementById("containerEnClasesDeDefensas").classList.add("d-none")
      document.getElementById("containerAnimalPatronus").classList.remove("d-none")
      document.getElementById("tituloAnimalPatronus").innerText = animalPatronusRandom
      if (animalPatronusRandom == "Siervo"){
        document.getElementById("imgAnimalPatronus").setAttribute("src", "https://i.postimg.cc/mg0fv1RF/Leonardo-Diffusion-XL-crea-al-siervo-como-un-animal-patronus-1.jpg")
      }else if(animalPatronusRandom == "Pato"){
        document.getElementById("imgAnimalPatronus").setAttribute("src", "https://i.postimg.cc/8CH4hxyP/Leonardo-Diffusion-XL-crea-un-pato-como-animal-patronus-2.jpg")
      }else if(animalPatronusRandom == "Perro"){
        document.getElementById("imgAnimalPatronus").setAttribute("src", "https://i.postimg.cc/bJ5BtKJS/Leonardo-Diffusion-XL-crea-un-perro-como-animal-patronus-0.jpg")
      }else if(animalPatronusRandom == "Castor"){
        document.getElementById("imgAnimalPatronus").setAttribute("src", "https://th.bing.com/th/id/R.d3516dfc56965bd4f00fdcdfe91010ff?rik=a5j6B5batHTYfw&riu=http%3a%2f%2fvignette2.wikia.nocookie.net%2fharrypotter%2fimages%2ff%2ff3%2fHermione_Otter_Patronus.png%2frevision%2flatest%3fcb%3d20170109003508&ehk=%2fuL%2fe7SG7VSQlIrn2gcElorycZSepsc14E2OeL%2fRevw%3d&risl=&pid=ImgRaw&r=0")
      }else if(animalPatronusRandom == "Cucarron"){
        document.getElementById("imgAnimalPatronus").setAttribute("src", "https://lh5.ggpht.com/lKnZE3GoR2eMepdLw697ZASuuxu72Ywv-Pu_6ns7i1k0ecyusfP99m-Qh1z6uQpt4ks2Qy5GKFwt3PIqztCO=s1200")
      }else if(animalPatronusRandom == "Hormiga"){
        document.getElementById("imgAnimalPatronus").setAttribute("src", "https://th.bing.com/th/id/R.d81df17f26f35b036044b3693786d637?rik=isHRZHx3J3QitQ&riu=http%3a%2f%2fk34.kn3.net%2ftaringa%2f1%2f6%2f0%2f9%2f8%2f5%2f77%2fcami1312%2f82C.jpg%3f7400&ehk=5XBSaOKb7lM6V6voTmVCyyCKSERQl6bN%2bj4cQTfyjfw%3d&risl=&pid=ImgRaw&r=0")
      }else if(animalPatronusRandom == "Grillo"){
        document.getElementById("imgAnimalPatronus").setAttribute("src", "https://th.bing.com/th/id/R.a95d9934bf1dd0143bdae9af18597401?rik=GLVe3ZkKWC7k0g&riu=http%3a%2f%2fphotos1.blogger.com%2fblogger%2f1199%2f1667%2f1600%2fkobane-himegisu_nymphL.jpg&ehk=bIXgIwuJGdJJiXV%2fhvftMOc1wASL2n%2bj4pbsHY0pr20%3d&risl=&pid=ImgRaw&r=0")
      }else if(animalPatronusRandom == "Buho"){
        document.getElementById("imgAnimalPatronus").setAttribute("src", "https://i.etsystatic.com/20281179/r/il/b09ad7/3266072091/il_fullxfull.3266072091_6ehi.jpg")
      }else if(animalPatronusRandom == "Dragon"){
        document.getElementById("imgAnimalPatronus").setAttribute("src", "https://th.bing.com/th/id/R.f72f1983349682a8c9dcaa1f0458c454?rik=k6%2fPDne8E05j%2fA&riu=http%3a%2f%2fvignette1.wikia.nocookie.net%2fharrypotter%2fimages%2f5%2f52%2fDragon-patronus.jpg%2frevision%2flatest%3fcb%3d20160926025005&ehk=ttcDzSWbMKCdgh8gQ%2f%2b08I62xIHrhL8pJQUfQeknR%2bQ%3d&risl=&pid=ImgRaw&r=0")
      }else{
        document.getElementById("imgAnimalPatronus").setAttribute("src", "https://i.postimg.cc/vZmyDXzF/Leonardo-Diffusion-XL-harry-potter-si-fuera-payaso-0.jpg")
        alert("Sorry no te ha salido un animal Patronus...")
      }
      let btnContainerAnimalPatronus = document.getElementById("btnContainerAnimalPatronus");
      btnContainerAnimalPatronus.addEventListener("click", () => {
        clases[0].defensaContraLasArtesOscuras.peleaDeventor(animalPatronusRandom)
      })
    },

    peleaDeventor: (animalPatronus) => {
      document.getElementById("containerAnimalPatronus").classList.add("d-none")
      document.getElementById("containerPeleaDementor").classList.remove("d-none")
      let continuarPelea = document.getElementById("atacarDementor")
      continuarPelea.addEventListener("click", ()=>{
        clases[0].defensaContraLasArtesOscuras.posibilidadesPeleaDementor(animalPatronus)
      })
    },

    posibilidadesPeleaDementor: (animalPatronus) => {
      document.getElementById("containerPeleaDementor").classList.add("d-none")
      if(animalPatronus != ""){
        document.getElementById("dementorPerdio").classList.remove("d-none")
        alert("Le hemos ganado al Dementor felicidades")
        let btnContinuarPeleaDementor = document.getElementById("btnContinuarPeleaDementor")
        btnContinuarPeleaDementor = btnContinuarPeleaDementor.addEventListener("click", ()=>{
          paso6()
        })
      }else{
        document.getElementById("dementorPerdio").classList.add("d-none")
        document.getElementById("dementorGanador").classList.remove("d-none")
        alert("El dementor te ha ganado :C practica mas")
        eliminarCorazon()
        let btnRepetirAnimalPatronus = document.getElementById("btnRepetirAnimalPatronus")
        btnRepetirAnimalPatronus.addEventListener("click", () =>{
          document.getElementById("dementorGanador").classList.add("d-none");
          clases[0].defensaContraLasArtesOscuras.animalPatronus()
        })
        let btnContinuarPeleaDementor = document.getElementById("btnContinuarPeleaDementor")
        btnContinuarPeleaDementor.addEventListener("click", paso6())
      }
    }
  }
  console.table(clases)
}

function paso6(){
  document.getElementById("paso5").classList.add("d-none")
  document.getElementById("paso6").classList.remove("d-none")
  document.getElementById("EsperaGeneralPociones").classList.remove("d-none")
  function cargaPantallaPociones(){
    document.getElementById("EsperaGeneralPociones").classList.add("d-none")
    clases[0].pociones.infoClase() 
  }
  cargaDePantalla(cargaPantallaPociones,3250)

  clases[0].pociones = {
    docente: "Profesor Liliana McGonagall",
    Horario: "Por definir",
    infoClase: ()=>{
      document.getElementById("infoClasePociones").classList.remove("d-none")
      let pocionRandom = Math.floor(Math.random() * 2)
      let tomarPocion = document.getElementById("tomarPocion")
      tomarPocion.addEventListener("click", ()=>{
        clases[0].pociones.tipoPocion(pocionRandom)
      })
    },
    tipoPocion: (valorPocion) =>{
      document.getElementById("infoClasePociones").classList.add("d-none")
      let btnContinuarSIguientePaso = document.getElementById("btnContinuarSIguientePaso")
      btnContinuarSIguientePaso.addEventListener("click", () =>{
        alert("Al oprimirme si funciono")
      })
      if(valorPocion === 0){
        document.getElementById("pocionFiltroDeMuerte").classList.remove("d-none")
        let btnPocionFiltroMuerte = document.getElementById("btnPocionFiltroMuerte")
        btnPocionFiltroMuerte.addEventListener("click", ()=>{
          eliminarCorazon()
          document.getElementById("pocionFiltroDeMuerte").classList.add("d-none")
          document.getElementById("enfermeraPociones").classList.remove("d-none")
          document.getElementById("infoClasePociones").classList.add("d-none")
        })
      }else{
        document.getElementById("pocionEsenciaDeLocura").classList.remove("d-none")
        let btnEsenciaDeLocura =  document.getElementById("btnEsenciaDeLocura")
        btnEsenciaDeLocura.addEventListener("click", () =>{
          document.getElementById("pocionEsenciaDeLocura").classList.add("d-none");
          document.getElementById("eleccionPocioneLocura").classList.remove("d-none");
          let btnNoIrPicsina = document.getElementById("btnNoIrPicsina")
          btnNoIrPicsina.addEventListener("click", () =>{
            alert("aqui vas a la proxima clase")
          })
          let btnIrAPicsina = document.getElementById("btnIrAPicsina")
          btnIrAPicsina.addEventListener("click", () =>{
            alert("Aqui vas a picsina")
            document.getElementById("enfermeraPociones").classList.remove("d-none");
            document.getElementById("tituloEnfermera").innerText = "Recuerda que no ves bien, te has quedado de mas en la picsina y quedastes inconciente"
            document.getElementById("eleccionPocioneLocura").classList.add("d-none");
            eliminarCorazon()
          })
        })
      }
    }
  }
}