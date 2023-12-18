
function selecTema(){
    let temaValue = document.getElementById('selectTema').value;
    if(temaValue == "claro"){
        document.getElementById('body').classList.remove('temaOscuro')
        document.getElementById('nav').classList.remove("navbar-dark")
        document.getElementById('nav').classList.remove("bg-dark")
        localStorage.setItem("dark-mode", "false")
    }else{
        document.getElementById('body').classList.add('temaOscuro')
        document.getElementById('nav').classList.add("navbar-dark")
        document.getElementById('nav').classList.add("bg-dark")
        localStorage.setItem("dark-mode", "true")
    }
}

if ( localStorage.getItem("dark-mode") == "false"){
    temaValue = "claro"
}else{
    temaValue = "oscuro"
}



const inglesCard = [
    "1 BBQ Crunch sandwich (1 breaded chicken fillet)",
    "1 Kentucky hamburger / Sandwich (1 breaded chicken breast fillet, pickles,...)",
    "1 BBQ Crunch Sandwich (1 breaded chicken fillet) + 1 small potato + 1 PET Soda..",
    "1 Kentucky Colonel burger / Sandwich (1 breaded chicken breast fillet, salad...)",
    "1 Kentucky hamburger / Sandwich (1 breaded chicken breast fillet, pickles...)",
    "1 Kentucky Colonel burger / Sandwich (1 breaded chicken breast fillet, salad...)",
    "1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion...)",
    "1 Sandwich Crispy BBQ (1 filete de pechuga extra grande, triple empanizado, cebolla crisp...)"
]

const espanolCard = [
    "1 sándwich BBQ Crunch (1 filete de pollo empanizado)",
    "1 Hamburguesa / Sándwich Kentucky (1 filete de pechuga de pollo empanizado, pepinillos,...)",
    "1 Sándwich BBQ Crunch (1 filete de pollo empanizado) + 1 papa pequeña + 1 Soda PET..",
    "1 hamburguesa / Sandwich Kentucky Colonel (1 filete de pechuga de pollo empanizado, ensalada...)",
    "1 Hamburguesa / Sándwich Kentucky (1 filete de pechuga de pollo empanizado, pepinillos...)",
    "1 hamburguesa / Sandwich Kentucky Colonel (1 filete de pechuga de pollo empanizado, ensalada...)",
    "1 Sandwich BBQ Crujiente (1 filete de pechuga extra grande, triple empanizado, cebolla crujiente...)",
    "1 Sándwich BBQ Crujiente (1 filete de pechuga extra grande, triple empanizado, cebolla crujiente...)"
]

const francesCard = [
    "1 sandwich BBQ Crunch (1 filet de poulet pané)",
    "1 Kentucky Burger / Sandwich (1 filet de poitrine de poulet pané, cornichons,...)",
    "1 BBQ Crunch Sandwich (1 filet de poulet pané) + 1 petite pomme de terre + 1 PET Soda..",
    "1 hamburger / Kentucky Colonel Sandwich (1 filet de poitrine de poulet pané, salade...)",
    "1 Kentucky Burger / Sandwich (1 filet de poitrine de poulet pané, cornichons...)",
    "1 hamburger / Kentucky Colonel Sandwich (1 filet de poitrine de poulet pané, salade...)",
    "1 Sandwich Grillé Grillé (1 filet de poitrine extra large, triple pané, oignon croustillant...)",
    "1 Sandwich Grillé Grillé (1 filet de poitrine extra large, triple pané, oignon croustillant...)"
]

function selecIdioma(){
    var idiomaValue = document.getElementById('selectIdioma').value;

    if(idiomaValue == "ingles"){

        document.querySelector('html').setAttribute('lang', 'en')
        document.getElementById('idioma').innerText = "Language";
        document.getElementById('ingles').innerText = "English";
        document.getElementById('espanol').innerText = "Espanish";
        document.getElementById('frances').innerText = "French";
        document.getElementById('tema').innerText = "Theme";
        document.getElementById('claro').innerText = "Light";
        document.getElementById('oscuro').innerText = "Dark";

        for(let i= 1, e = 0; i < 9; i++, e++){
            document.getElementById('textCard'+i).innerText = inglesCard[e];
            document.getElementById('comprar'+i).innerText = "Buy"
        }

        alert("Translating into English language")

    }else if(idiomaValue == "espanol"){
        document.querySelector('html').setAttribute('lang', 'es')

        document.getElementById('idioma').innerText = "Lenguaje";
        document.getElementById('ingles').innerText = "Ingles";
        document.getElementById('espanol').innerText = "Español";
        document.getElementById('frances').innerText = "Frances";
        document.getElementById('tema').innerText = "Tema";
        document.getElementById('claro').innerText = "Claro";
        document.getElementById('oscuro').innerText = "Oscuro";

        for(let i= 1, e = 0; i < 9; i++, e++){
            document.getElementById('textCard'+i).innerText = espanolCard[e];
            document.getElementById('comprar'+i).innerText = "Comprar"
        }

        alert("Traducir al idioma español")


    }else{
        document.querySelector('html').setAttribute('lang', 'fr')

        for(let i= 1, e = 0; i < 9; i++, e++){
            document.getElementById('textCard'+i).innerText = francesCard[e];
            document.getElementById('comprar'+i).innerText = "acheter"
        }

        document.getElementById('idioma').innerText = "langue";
        document.getElementById('ingles').innerText = "Anglais";
        document.getElementById('espanol').innerText = "Espagnol";
        document.getElementById('frances').innerText = "Français";
        document.getElementById('tema').innerText = "problème";
        document.getElementById('claro').innerText = "lumière";
        document.getElementById('oscuro').innerText = "sombre";

        alert("traduire en langue française")
    }
}

