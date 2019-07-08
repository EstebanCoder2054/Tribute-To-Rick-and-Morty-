let arrayImagenes = [];
let arrayNombres = [];
let arrayStatus = [];
let placeHolderImg = document.querySelectorAll('.thumbnail-container img');
let placeHolderNombre = document.querySelectorAll('.thumbnail-container h5');
let placeHolderStatus = document.querySelectorAll('.thumbnail-container p');
    
fetch('https://rickandmortyapi.com/api/character/?page=16')
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

        return data;
    } )
    .catch((err) => console.log(err));
