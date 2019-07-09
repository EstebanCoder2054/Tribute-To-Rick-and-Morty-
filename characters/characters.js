let arrayImagenes = [];
let arrayNombres = [];
let arrayStatus = [];

let contenidoDinamico = document.getElementById("contenidoDinamico")
  
fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then((response) => response.json())
    .then( function(data){

        for(let i = 0; i < 20; i++){

            arrayImagenes[i] = data.results[i].image;
            arrayNombres[i] = data.results[i].name;
            arrayStatus[i] = data.results[i].status;
            
         
            let nuevoDiv = document.createElement('div');
            let divAdentro = document.createElement('div');
            nuevoDiv.appendChild(divAdentro);
        
            let divRecargado = `
                
            <div class="container-fluid">   
            

            
            <div class="card" style="background-color: #C8D5E8">
            <img src=${arrayImagenes[i]} class="card-img-top img-fluid" alt="..." >
            <div class="card-body">
                <h5 class="card-title">${arrayNombres[i]}</h5>
                <p class="card-text">${arrayStatus[i]}</p>
            </div>
            </div>
            
            </div>
            
            `;
            nuevoDiv.innerHTML = divRecargado;
            contenidoDinamico.appendChild(nuevoDiv);
            
    
            console.log("prueba");
            console.log(divRecargado);
            
            
        }

        //llamando a la función cambiarImagenesDinamicas y le envío el arreglo con las imagenes, títulos y status
        //cambiarImagenesDinamicas( placeHolderImg, placeHolderNombre, placeHolderStatus )

        return data;
    } )
    .catch((err) => console.log(err));



// function cambiarImagenesDinamicas( placeHolderImg, placeHolderNombre, placeHolderStatus ){
            
    

//         let nuevoDiv = document.createElement('div');
//         let divAdentro = document.createElement('div');
//         nuevoDiv.appendChild(divAdentro);
//         document.body.appendChild(nuevoDiv);
        
//         let divRecargado = `
            
//         <div class="container">   
        
        
//         <div class="card-columns thumbnail-container">
            
        
//         <div class="card" style="background-color: #C8D5E8">
//         <img src="${placeHolderImg[i]}" class="card-img-top img-fluid" alt="..." >
//         <div class="card-body">
//             <h5 class="card-title">${placeHolderNombre[i]}</h5>
//             <p class="card-text">${placeHolderStatus[i]}</p>
//         </div>
//         </div>
        
        
//         </div> 
        
        
//         </div>
        
//         `;
//         nuevoDiv.innerHTML = divRecargado;
        
        

//         console.log("prueba");

        
        
        
    
//     }
    