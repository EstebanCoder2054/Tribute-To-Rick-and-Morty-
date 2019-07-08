//let imagenes = document.getElementsByClassName("imagen");

window.onload = function(){

    getRandomId(0,492);

}




function getRandomId(min, max) {
    let numRandom1; 
    let numRandom2;
    let numRandom3;
        
    numRandom1 =  Math.floor(Math.random() * (max - min)) + min;
    numRandom2 =  Math.floor(Math.random() * (max - min)) + min;
    numRandom3 =  Math.floor(Math.random() * (max - min)) + min;
    
    obtenerPersonajesRandom(numRandom1, numRandom2, numRandom3);

}


function obtenerPersonajesRandom(numRandom1, numRandom2, numRandom3){
    
    fetch(`https://rickandmortyapi.com/api/character/${numRandom1}, ${numRandom2}, ${numRandom3}`)
    .then((response) => response.json())
    .then( function(data){
        let datosPersonaje1 = data[0]; //capturando el json del primer personaje aleatorio
        let datosPersonaje2 = data[1]; //capturando el json del segundo personaje aleatorio
        let datosPersonaje3 = data[2]; //capturando el json del tercer personaje aleatorio
        //después de que se almacena la info de cada uno de los tres personajes se procede a entregarla.
        let imagen1 = data[0].image;
        let imagen2 = data[1].image;
        let imagen3 = data[2].image;

        let nombre1 = data[0].name;
        let nombre2 = data[1].name;
        let nombre3 = data[2].name;

        let descripcion1 = data[0].status;
        let descripcion2 = data[1].status;
        let descripcion3 = data[2].status;

        //entregando las imagenes al método que las cambiará en el HTML
        cambiarImagen1(imagen1);
        cambiarImagen2(imagen2);
        cambiarImagen3(imagen3);

        cambiarNombre1(nombre1);
        cambiarNombre2(nombre2);
        cambiarNombre3(nombre3);

        cambiarDescripcion1(descripcion1);
        cambiarDescripcion2(descripcion2);
        cambiarDescripcion3(descripcion3);

        console.log(datosPersonaje1);
        console.log(datosPersonaje2);
        console.log(datosPersonaje3);
        return data;
    } )
    .catch((err) => console.log(err));  
}

//cambiando las imágenes
function cambiarImagen1(imagen1){
    
    document.getElementById("img1").src= imagen1;
    
}

function cambiarImagen2(imagen2){
    
    document.getElementById("img2").src= imagen2;
    
}

function cambiarImagen3(imagen3){
    
    document.getElementById("img3").src= imagen3; 
    
}

//cambiando los nombres
function cambiarNombre1(nombre1){

    document.getElementById("titulo1").innerText = nombre1;
}

function cambiarNombre2(nombre2){

    document.getElementById("titulo2").innerText = nombre2;
}

function cambiarNombre3(nombre3){

    document.getElementById("titulo3").innerText = nombre3;
}

//cambiando los status
function cambiarDescripcion1(descripcion1){

    document.getElementById("descrip1").innerText = descripcion1;

}

function cambiarDescripcion2(descripcion2){

    document.getElementById("descrip2").innerText = descripcion2;

}

function cambiarDescripcion3(descripcion3){

    document.getElementById("descrip3").innerText = descripcion3;

}