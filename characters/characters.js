//cuando se cargue la página de characters
window.onload = function() {
    contenidoInicial(1);
};


let arrayImagenes = [];
let arrayNombres = [];
let arrayStatus = [];

let contenidoDinamico = document.getElementById("contenidoDinamico")
let pagerDinamico = document.getElementById("pagerDinamico")

//con esta función se crea dinámicamente las 20 cards y el footer, ya no es necesario crear más, solo editar 
function contenidoInicial( numPagina ){
//este fetch solo carga la primera página, y de ahí se empezarán a cambiar las otras páginas
fetch(`https://rickandmortyapi.com/api/character/?page=${numPagina}`)
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


            }
                let segundoDiv = document.createElement('div');  
                    
                let divPager = `
                <nav aria-label="Page navigation example" class="pager">
                <ul class="pagination justify-content-center">
                  <li class="page-item disabled">
                    <a class="page-link disabled" href="#" tabindex="-1" aria-disabled="true">Anterior</a>
                  </li>
          
                  <li class="page-item active" id="page1" onclick="cambiarContenido(1)"><a class="page-link" href="#">1</a></li>
                  <li class="page-item" id="page2" onclick="cambiarContenido(2)"><a class="page-link">2</a></li>
                  <li class="page-item" id="page3" onclick="cambiarContenido(3)"><a class="page-link">3</a></li>
                  <li class="page-item" id="page4" onclick="cambiarContenido(4)"><a class="page-link">4</a></li>
                  <li class="page-item" id="page5" onclick="cambiarContenido(5)"><a class="page-link">5</a></li>
                  <li class="page-item" id="page6" onclick="cambiarContenido(6)"><a class="page-link">6</a></li>
                  <li class="page-item" id="page7" onclick="cambiarContenido(7)"><a class="page-link">7</a></li>
                  <li class="page-item" id="page8" onclick="cambiarContenido(8)"><a class="page-link">8</a></li>
                  <li class="page-item" id="page9" onclick="cambiarContenido(9)"><a class="page-link">9</a></li>
                  <li class="page-item" id="page10" onclick="cambiarContenido(10)"><a class="page-link">10</a></li>
                  <li class="page-item" id="page11" onclick="cambiarContenido(11)"><a class="page-link">11</a></li>
                  <li class="page-item" id="page12" onclick="cambiarContenido(12)"><a class="page-link">12</a></li>
                  <li class="page-item" id="page13" onclick="cambiarContenido(13)"><a class="page-link">13</a></li>
                  <li class="page-item" id="page14" onclick="cambiarContenido(14)"><a class="page-link">14</a></li>
                  <li class="page-item" id="page15" onclick="cambiarContenido(15)"><a class="page-link">15</a></li>
                  <li class="page-item" id="page16" onclick="cambiarContenido(16)"><a class="page-link">16</a></li>
                  <li class="page-item" id="page17" onclick="cambiarContenido(17)"><a class="page-link">17</a></li>
                  <li class="page-item" id="page18" onclick="cambiarContenido(18)"><a class="page-link">18</a></li>
                  <li class="page-item" id="page19" onclick="cambiarContenido(19)"><a class="page-link">19</a></li>
                  <li class="page-item" id="page20" onclick="cambiarContenido(20)"><a class="page-link">20</a></li>
                  <li class="page-item" id="page21" onclick="cambiarContenido(21)"><a class="page-link">21</a></li>
                  <li class="page-item" id="page22" onclick="cambiarContenido(22)"><a class="page-link">22</a></li>
                  <li class="page-item" id="page23" onclick="cambiarContenido(23)"><a class="page-link">23</a></li>
                  <li class="page-item" id="page24" onclick="cambiarContenido(24)"><a class="page-link">24</a></li>
                  <li class="page-item" id="page25" onclick="cambiarContenido(25)"><a class="page-link">25</a></li>
                  
                  
                  <li class="page-item">
                    <a class="page-link" href="../characters/page2/page2.html">Siguiente</a>
                  </li>
                </ul>
              </nav>
          
                `;
              
                segundoDiv.innerHTML = divPager;
                pagerDinamico.appendChild(segundoDiv);
  

            
    
            //llamando a la función cambiarImagenesDinamicas y le envío el arreglo con las imagenes, títulos y status
            //cambiarImagenesDinamicas( placeHolderImg, placeHolderNombre, placeHolderStatus )
    
            return data;
        } )
        .catch((err) => console.log(err));

        console.log('prueba, aún sigo aquí');
    }
            




























function cambiarContenido( numeroPagina ){

    let selectorDeCard = document.querySelectorAll('.card img');
    //el selector de card me trae las cards antiguas
    console.log(selectorDeCard);
    console.log('estás en la página: ' + numeroPagina);


    
    fetch(`https://rickandmortyapi.com/api/character/?page=${numeroPagina}`)
        .then((response) => response.json())
        .then( function(data){
    
            for(let i = 0; i < 20; i++){
                arrayImagenes[i] = data.results[i].image;
                arrayNombres[i] = data.results[i].name;
                arrayStatus[i] = data.results[i].status;
                
                selectorDeCard[i].src = arrayImagenes[i];
                console.log(selectorDeCard[i]);

            }

            
    
            //llamando a la función cambiarImagenesDinamicas y le envío el arreglo con las imagenes, títulos y status
            //cambiarImagenesDinamicas( placeHolderImg, placeHolderNombre, placeHolderStatus )
    
            return data;
        } )
        .catch((err) => console.log(err));


}








