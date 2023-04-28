// - La fecha de hoy
const fecha = new Date()

// - La fecha de tu nacimiento

const fechaNacimiento = new Date(1999, 4, 7)
console.log(fechaNacimiento);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const compararFecha = fecha.getTime() > fechaNacimiento.getTime()
console.log(compararFecha);


// - Una variable que contenga el día de tu nacimiento
const diaNacimiento = fechaNacimiento.getDate()
console.log(diaNacimiento);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = fechaNacimiento.getMonth() + 1
console.log(mesNacimiento);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyoNacimiento = fechaNacimiento.getFullYear()
console.log(anyoNacimiento);