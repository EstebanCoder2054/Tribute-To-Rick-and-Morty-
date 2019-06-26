//let imagenes = document.getElementsByClassName("imagen");

window.onload = getRandomId(0,492);




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
        //entregando las imagenes al método que las cambiará en el HTML
        cambiarImagene1(imagen1);
        cambiarImagene2(imagen2);
        cambiarImagene3(imagen3);

        console.log(datosPersonaje1);
        console.log(datosPersonaje2);
        console.log(datosPersonaje3);
        return data;
    } )
    .catch((err) => console.log(err));  
}

function cambiarImagen1(imagen1){
    
    document.getElementById("img1").src= imagen1;
    
}

function cambiarImagen2(imagen2){
    
    document.getElementById("img2").src= imagen2;
    
}

function cambiarImagen3(imagen3){
    
    document.getElementById("img3").src= imagen3; 
    
}









    //para obtener todos los personajes
    let arregloDeResultados = [];
    let cont = 0;
    let acum = 19;
    //realizar un ciclo por cada página de personajes para recolectarlos a todos en un solo arreglo de personajes

    for(let j = 0; j < 25; j++){
        
        for(let i = cont; i < acum; i++){

            arregloDeResultados[i] = fetch(`https://rickandmortyapi.com/api/character/?page=${j}`)
            .then((response) => response.json())
            .then((data) => console.log(data.results[0]))
            .catch((err) => console.log(err));    

            cont += 1;

        }

        acum += 19;

    }    

    console.log("Has sacado aleatoriamente el personaje con el id : " + numeroRandom);
    fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => console.log(data.results[numeroRandom].name))
    .catch((err) => console.log(err));


