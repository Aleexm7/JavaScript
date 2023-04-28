//Cómo obtener una lista a partir de otra .slice(indice, indice)
const array = ["Hola", 1, 2, 3, false]

//.slice() NO MODIFICA EL VALOR DEL ARRAY

console.log(array.slice(1, 4));
const array2 = array.slice(0, 3)
console.log(array2);

const array3 = array.slice(2, -1)
console.log(array3);