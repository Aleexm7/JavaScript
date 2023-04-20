//Principales operaciones aritmeticas
let a = 3.5;
let b = 4.8;

// Suma(+)
console.log(a + b);

//Resta(-)
console.log(a - b);

//Multiplicacion(*)
console.log(a * b);

//Division(/)
console.log(a / b);

//Representacion de los numeros en cadena de texto

console.log(typeof a);
let a_s = a.toString();
console.log(a_s);
console.log(typeof a_s);

//Redondeo de numeros decimales
let d = 3.3;
let r = d * 3;

console.log(r);

//toFixed() - Limitar el numero de decimales al valor x

console.log(r.toFixed(0));//Redondeamos sin decimales

//toPrecision() --Limita el numero de cifras significativas
console.log(r.toPrecision(2));
