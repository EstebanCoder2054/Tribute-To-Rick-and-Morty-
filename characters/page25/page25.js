let arrayImagenes = [];
let arrayNombres = [];
let arrayStatus = [];
let placeHolderImg = document.querySelectorAll('.thumbnail-container img');
let placeHolderNombre = document.querySelectorAll('.thumbnail-container h5');
let placeHolderStatus = document.querySelectorAll('.thumbnail-container p');
    
fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then((response) => response.json())
    .then( function(data){

        for(let i = 0; i < 20; i++){

            arrayImagenes[i] = data.results[i].image;
            arrayNombres[i] = data.results[i].name;
            arrayStatus[i] = data.results[i].status;
            
            placeHolderImg[i].src = arrayImagenes[i];
            placeHolderNombre[i].innerText = arrayNombres[i];
            placeHolderStatus[i].innerText = arrayStatus[i];

        }

        //llamando a la función cambiarImagenesDinamicas y le envío el arreglo con las imagenes, títulos y status
        cambiarImagenesDinamicas( placeHolderImg, placeHolderNombre, placeHolderStatus )

        return data;
    } )
    .catch((err) => console.log(err));



function cambiarImagenesDinamicas( placeHolderImg, placeHolderNombre, placeHolderStatus ){
            
    for(let i = 0; i < 7; i++){

        let nuevoDiv = document.createElement('div');
        let divAdentro = document.createElement('div');
        nuevoDiv.appendChild(divAdentro);
        document.body.appendChild(nuevoDiv);
        
        let divRecargado = `
            
        <div class="container">   
        
        
        <div class="card-columns thumbnail-container">
            
        
        <div class="card" style="background-color: #C8D5E8">
        <img src="${placeHolderImg[i]}" class="card-img-top img-fluid" alt="..." >
        <div class="card-body">
            <h5 class="card-title">${placeHolderNombre[i]}</h5>
            <p class="card-text">${placeHolderStatus[i]}</p>
        </div>
        </div>
        
        <div class="card" style="background-color: #C8D5E8">
        <img src="${placeHolderImg[i+1]}" class="card-img-top img-fluid" alt="..." >
        <div class="card-body">
            <h5 class="card-title">${placeHolderNombre[i+1]}</h5>
            <p class="card-text">${placeHolderStatus[i+1]}</p>
        </div>
        </div>
        
        <div class="card" style="background-color: #C8D5E8">
        <img src="${placeHolderImg[i+2]}" class="card-img-top img-fluid" alt="..." >
        <div class="card-body">
            <h5 class="card-title">${placeHolderNombre[i+2]}</h5>
            <p class="card-text">${placeHolderStatus[i+2]}</p>
        </div>
        </div>
        
        </div> 
        
        
        
        </div>
        
        `;
        nuevoDiv.innerHTML = divRecargado;
        
        i = i+1;

        console.log("prueba");

        }
        
        
    
    }
    



