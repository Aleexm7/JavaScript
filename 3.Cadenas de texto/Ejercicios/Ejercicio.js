

// - Una cadena de texto con tu Nombre
let nombre = "Antonio";


// - Otra cadena de texto con tu Apellido
let apellido = "Rodriguez";

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante =  nombre.concat(" ", apellido);

console.log(estudiante);

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let longitudEstudiante = estudiante.length();


// - Una variable que contenga la primera letra del Nombre

let letra = nombre[0];
console.log(letra);

// - Otra variable que contenga la última letra del Apellido
let ultimaLetra = apellido[apellido.length() - 1];
console.log(ultimaLetra);


// - Una cadena de texto que elimine los espacios de la variable "estudiante"

let sinEspacios = estudiante.replace(/ /g, "");
let sinEspacios2 = estudiante.replace(" ", "");
console.log(sinEspacios);
console.log(sinEspacios2);

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

let comprobarEstudiante = estudiante.includes("Antonio");
console.log(comprobarEstudiante);
