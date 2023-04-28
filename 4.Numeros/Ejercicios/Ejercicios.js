/*
- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

*/

let altura_cm = 180;
let altura_metros = 1.80;
let peso_kg = 75.80;

let altura_redondeada = Math.ceil(altura_metros);
console.log(altura_redondeada);

let peso_redondeado = Math.floor(peso_kg);
console.log(peso_redondeado);

let sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(sonIguales);
