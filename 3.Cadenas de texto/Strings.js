// STRINGS (CADENAS DE CARACTERES)

let str_simple = 'Hola soy un texto con comillas simples';
let str_doble = "Hola soy un exto con comillas dobles";


console.log(str_simple);
console.log(str_doble);

let str_comillas = "El otro dia me dijo literalmente \"ve a sacar la basura \" ";
let str_comillas_simples = 'El otro dia me dijo literalmente "ve a sacar la basura " ';
let str_comillas_dobles = "El otro dia me dijo literalmente 've a sacar la basura ' ";
let str_comillas_simples_2 = "El otro dia me dijo literalmente \'ve a sacar la basura \'";

console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_simples_2);
console.log(str_comillas_dobles);

////// Comillas invertidas (backticks)

let nombre = "Alfredo"

let str_backticks = `Hola, ${nombre} bienvenido`; // Estas comillas permiten utilizar variables

console.log(str_backticks);


//LAS COMILLAS INVERTIDAN SE PUEDEN UTILIZAR DE PLANTILLAS HTML

let plantilla = `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <p>Esto es un parrafo</p>
</html>
`

console.log(plantilla)

//Introduccion de variables en html

let libros = ["Empieza por el por qué", "El monje que se compro un ferrari", "El poder del ahora"]