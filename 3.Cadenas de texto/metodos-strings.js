//METODOS MAS UTILIZADOS CON CADENA DE CARACTERES
//Como obtener la longitud de un String

let str = "Hola soy un String";
console.log(str.length);

//Obtener partes de cadenas de caracteres
//Slice() substring() substr()

let slice_str = str.slice(0,10); //Esto coge la letra que corresponde con el indice 0 hasta el 10, pero el indice 10 no se va a mostrar, solo un numero menos
console.log(slice_str);

let substring_str = str.substring(0,10);
console.log(substring_str);

let substr_str = str.substr(0,10);
console.log(substr_str);

//Reemplazar parte del cotenido de una cadena de texto

let cadena = "Hola mi nombre es anonimo";

//Al utilizar strings sólo reemplaza la priemra instancia
console.log(cadena.replace('anonimo', 'Antonio'));

let texto_largo = "Esto es una prueba de un texto largo para que veas como no puedo cambiar las palabras por otras que mejor te venga";
//Al utilizar strings sólo reemplaza la priemra instancia
console.log(texto_largo.replace('no', 'si'));

//Al utilizar la expresión regular /g (global), reemplaza todas las instancias

let texto_largo1 = "los mosqueteros son los mejores mosqueteros que te puedes encontrar, tambien los jugadores son los mejores compañeros"
console.log(texto_largo1.replace(/los/g, 'LOS'))