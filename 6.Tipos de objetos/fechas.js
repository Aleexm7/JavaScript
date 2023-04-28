// Trabajando con fechas

//Los meses inicializan en 0
const fecha = new Date(1987, 10)
console.log(fecha);

const fecha2 = new Date(0) //En milisegundos
console.log(fecha2);

const fecha3 = new Date(-1000000000) //En milisegundos
console.log(fecha3);

const fecha4 = new Date("October 13, 1979 12:15:15")
console.log(fecha4);

console.log(fecha > fecha2);

const fecha5 = new Date(1987, 10)

console.log(fecha === fecha5); //ERROR - No se pueden comparar fechas de esta manera

console.log(fecha.getTime()=== fecha5.getTime()); //Esta es la forma de comparar la igualdad entre fechas

//Obtener el día, el mes y el año de una fecha
//Obtener el dia .getDate()

console.log(fecha4.getDate());
console.log(fecha4.getMonth() + 1); //Sumar +1 porque inicializa en 0

//Obtener el año .geFullYear()

console.log(fecha4.getFullYear());

//Mostrar fecha en un String
// .toLocalDateString

console.log(fecha2.toLocaleDateString());