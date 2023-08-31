import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//Llamar elementos del DOM (selectores)
const userinput = document.querySelector("textarea[name=user-input]");
const botonReset= document.querySelector("#reset-button");
const listelement= document.getElementsByClassName("li-style");

//Funciones de eventos
//boton reset
document.addEventListener("DOMContentLoaded", function() {
   botonReset.addEventListener("click", function() {
      userinput.value = '';// Esta línea restablece el textarea
    });
  });
//borrar info de las listas
document.addEventListener("DOMContentLoaded", function(){
  botonReset.addEventListener("click", function() {
    listelement[0].innerHTML = 'Recuento de palabras: 0';
    listelement[1].innerHTML = 'Recuento de caracteres: 0';
    listelement[2].innerHTML = 'Recuento de caracteres sin espacios ni signos: 0';
    listelement[3].innerHTML = 'Longitud media de palabras: 0';
    listelement[4].innerHTML = 'Recuento de números: 0';
    listelement[5].innerHTML = 'Suma de números: 0';
  });
});


//listener del textarea + función
userinput.addEventListener("input", leerdatos);
//actualizar valores de texto(userinput)
function leerdatos() {
  //actualiza datos para contar palabras
  const contarpalabras= analyzer.getWordCount(userinput.value);
  listelement[0].textContent = "Recuento de palabras: " + contarpalabras;

//actualiza datos para contar caracteres
  const contarcaracteres= analyzer.getCharacterCount(userinput.value);
  listelement[1].textContent= "Recuento de caracteres: " + contarcaracteres;

//actualiza datos para contar caracteres sin espacios
  const sinespacios= analyzer.getCharacterCountExcludingSpaces(userinput.value);
  listelement[2].textContent= "Recuento de caracteres sin espacios ni signos: " + sinespacios;

//actualiza datos para la longitud media de palabras
  const longitudmedia= analyzer.getAverageWordLength(userinput.value);
  listelement[3].textContent= "Longitud media de palabras: " + longitudmedia;

//actualiza datos para contar números
  const totalnumeros= analyzer.getNumberCount(userinput.value)
  listelement[4].textContent= "Recuento de números: " + totalnumeros;

//actualiza datos para la suma de números
  const sumanumeros= analyzer.getNumberSum(userinput.value)
  listelement[5].textContent= "Suma de números: " + sumanumeros;
} 


//Eventos del DOM
//document.addEventListener("DOMContentLoaded", function() {
    //userinput.addEventListener("input", function(){
        //const palabras= analyzer.getWordCount(userinput.value);
              //console.log ("recuento de palabras" + palabras);
              //listelement[0].textContent(palabras.value);
    //});
//});

//document.addEventListener("DOMContentLoaded", function () {
    //userinput.addEventListener('keyup', function() {
        //const palabras= userinput.value;
        //palabras= Event.target.value;
        //const wordcount= analyzer.getWordCount(palabras);
        //console.log (wordcount); 
    //});
//});



