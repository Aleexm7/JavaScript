//Métodos de cadenas de texto(parte 2)

let input = "Escorpio";
let db = "escorpio";

// toLowerCase() - toUpperCase()
console.log(input.toLowerCase())
console.log(input.toLowerCase() === db.toUpperCase())

//Formas de concatenar dos cadenas de caracteres

let str_1 = "Hola soy la primera cadena."
let str_2 = "Hola soy la segunda cadena."

console.log(str_1.concat(" ", str_2))
console.log(str_1 + " " + str_2)
console.log(`${str_1} ${str_2}`)

// Eliminar espacio al inicio y al final

let str_3 = "    Hola soy un String con espacios al final.   "

console.log(str_3.length)

//trim()
console.log(str_3.trim().length) //Eliminamos espacio tanto en el inicio como en el final
console.log(str_3.trimStart().length)//Eliminamos espacio solo del inicio
console.log(str_3.trimEnd().length)//Eliminamos espacio solo del final

//Obtener el caracter que hay en cierta posición

let str_4 = "Hola soy el string número 4"

console.log(str_4.charAt(5))
console.log(str_4[5])

//Obtener la posición de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Antonio y me gusta el cine. Mi nombre es Antonio y mi apellido es Villar"

console.log(str_5.indexOf("el"))//Nos devuelve la primera letra de la palabra que estamos buscando, si nos devuelve -1 es porque no ha encontrado la palabra en la cadena de caracteres
console.log(str_5.charAt(9))
console.log(str_5.lastIndexOf("Antonio")) //Nos devuelve la última instancia de la palabra que estamos buscando 
