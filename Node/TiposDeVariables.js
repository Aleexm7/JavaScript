//Definir variables

var variable1;
let variableLet1;

// atajo para comentar: CRTL + }
const constantes = "Soy una constante";

console.log(constantes);
// constantes = "Adiós"; NO SE PUEDE MODIFICAR EL VALOR DE LA CONSTANTE, EN UNA VARIABLE SI

var a = 1;
console.log(a);

var a = 6;
console.log(a);

let b = 3;
console.log(b);


//DIFERENCIA ENTRE VAR Y LET

var variable = "Hola soy una variable VAR";

for(var i = 0; i<3; i ++){
    var variable = "Hola soy la segunda variable VAR"
}

console.log(variable);

let variableLet = "Hola soy una variable LET"

for(let i = 0; i <  3; i++){
    let variableLet = "Hola soy la segunda variable LET"
}

console.log(variableLet);

////////////////////////////////////////////////////

var num = 4;
console.log(typeof num)

num = "Cambio a String"

console.log(num)