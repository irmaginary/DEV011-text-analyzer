const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //indentificar palabras (¿cómo?): cuenta los espacios del string
    // resta 1 a cada espacio (¿o suma 1?)
    //Retorna el número de palabras

    //identifica palabras
    const palabras = text.trim().split(" ");
    return palabras.length;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

    return text.trim().length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //PRUEBA CON EXPRESIÓN REGULAR
    
    //PRUEBA 2: Meter charCode en la función
    const wordsinespacios = [];
    for (let i = 0; i < text.length; i++) {
      if (
        text[i] !== " " &&
        text[i] !== "," &&
        text[i] !== "-" &&
        text[i] !== "!"
      ) {
        wordsinespacios.push(text[i]);
      }
    }
    return wordsinespacios.length - 1;
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(" ");
    const totalcharacters = words.reduce((a, b) => a + b.length, 0);

    return parseFloat((totalcharacters / words.length).toFixed(2));
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const patronnumeros = text.match(/\b\d+(\.\d+)?\b/g); //buscar un patrón de números del 0 al 9, incluidos decimales
    return patronnumeros ? patronnumeros.length : 0;
    //let count = 0;
    //for (const num of text) {
    //const numeros = num.match(patronnumeros); //busca coincidencias en el input
    //if (numeros) {
    //count += numeros.length;
  },
  //}
  //return parseFloat(count.toFixed(2));
  //},

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const patronnumeros = text.match(/\b\d+(\.\d+)?\b/g);
    if (!patronnumeros) {
      return 0;
    }
    const suma = patronnumeros.reduce(
      (total, num) => total + parseFloat(num),
      0
    );
    return suma;
    //for (let i= 0; i < patronnumeros.length; i++) {
    //suma += parseFloat(patronnumeros[i]);
  },
  //patronnumeros.reduce((a, b) => a + b.length, 0);
  //console.log(suma);
  //return parseFloat(suma.toFixed(2));
};

export default analyzer;
