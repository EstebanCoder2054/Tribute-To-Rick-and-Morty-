let arrayImagenes = [];
let placeHolderImg = document.querySelectorAll('.thumbnail-container img');
console.log(placeHolder.src);
    
fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then((response) => response.json())
    .then( function(data){

        for(let i = 0; i < 19; i++){
            arrayImagenes[i] = data.results[i].image;
            placeHolderImg[i].src = arrayImagenes[i];
            console.log(arrayImagenes[i]);
        }


        return data;
    } )
    .catch((err) => console.log(err));


    