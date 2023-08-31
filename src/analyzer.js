const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //indentificar palabras (¿cómo?): cuenta los espacios del string
    // resta 1 a cada espacio (¿o suma 1?)
    //Retorna el número de palabras
  
    //identifica palabras
    const palabras= text.trim().split(" ");
    return palabras.length;
   // let palabras= text.split(" ");
    //let count= 0;
    //for (let i = 0; i < palabras.length; i++) {
      //if (palabras[i].trim() !== ''){
        //count++;
      },
    //},
      //return count;
    //},
    
   // const palabras = text.split(" "); 
      //let word = 0
      //for (let i= 0; i < palabras.lenght; i++){
        //if (palabras[i]!== " ") {
          //word = word + 1
        //}
        //},
      //return word
      //},
  
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    //const allcharacter= text.trim();
    return text.trim().length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //let wordsinespacios= text.filter ()

    //PRUEBA 1: introducir charCode como función
    //let signos= [];
    //for (let i=0; i < text.length; i++) {
      //const charCode= text.charCodeAt(i);
      //if ((charCode >= 33 && charCode <= 47) || (charCode >= 58 && charCode <= 64)) {
        //signos.push(text[i]);
      //}
    //}
    //console.log(signos.length);
    
    //PRUEBA 2: Meter charCode en la función
    let wordsinespacios= [];
    for (let i=0; i < text.length; i++) {
      //const charCode= text.charCodeAt(i);
      //if (text[i] !== ((charCode >= 33 && charCode <= 47) || (charCode >= 58 && charCode <= 64))) {
      if (text[i] !== " " && text[i] !== "," && text[i] !== "-") {
        wordsinespacios.push(text[i]);
      }
    }
    console.log (wordsinespacios.length);
    return wordsinespacios.length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const patronnumeros= /\d+/g; //buscar un patrón de números del 0 al 9
    let count= 0;
    for (const texto of text ) {
      const numeros= texto.match(patronnumeros); //busca coincidencias en el input
      if (numeros) {
        count += numeros.length;
      } 
    }
    return count;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let numero= '';
    let sum= 0;
    for (const char of text) {
      if (!isNaN(char)) {
        numero += char;
      } else {
        if (numero !== '') {
          sum += parseInt(numero);
          numero= '';
        }
      }
    }
    if (numero !== '') {
      sum += parseInt(numero);
    }
  return sum;
  },

};

//BOTON





//contar palabras con
//let textarea= [];
//let contadordepalabras= 0;

  //for (var palabra= 0; 0< textarea.length; palabra++ ){
  //contadordepalabras++;
//}
//console.log ("Recuento de palabras" + contadordepalabras);


export default analyzer