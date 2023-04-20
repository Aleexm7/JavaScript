//Operador .valueOf() - Obtener valores numericos a partir de literales
let a = 2;

let b = new Number(3);

console.log(a);
console.log(b);

console.log(b.valueOf());



//NaN (Not a Number)- Infinity

let n = Number('adios')
console.log(n);
console.log(isNaN(n));

//Cómo convertir los string a valores númericos con Number, parseInt y parseFloat
let numero = "5.89";
let num2 = 17.45;

console.log(typeof numero);
console.log(Number(numero) + num2);

console.log(parseInt(num2));
console.log(parseFloat(num2));

//Número hexadecimales

let numHex ='0x3a5b7';
console.log(parseInt(numHex));//Nos muestra el numero hexadecimal en decimal

//Obtener los valores máximo y mínimo en JavaScript

let min_precision = Number.EPSILON;
let min_valor = Number.MIN_VALUE;
let max_valor = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor);
console.log(max_valor);