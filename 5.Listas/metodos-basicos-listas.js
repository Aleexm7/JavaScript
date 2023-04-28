//Cómo trabajar con listas (arrays, arreglos, vectores...)

//Las listas pueden tener todo ripos de valores
let array = [1, "Hola", false, null, {id:5}, undefined]

let array1 = [1, 2, 3, 4, 5, 6]
//Podemos añadir variables dentro del array
let var1 = 34
let array2 = [1, "Hola", false, null, {id:5}, undefined, var1]
console.log(array2);

//Acceder a los valores de un array a trravés de su posición
// array[indice] => 0, 1, 2, 3 ...
console.log(array2[1]);
console.log(array2[2]);

//Métodos para introducir nuevos valores en nuestro arrays
//.push() .unshift() => Mutan el valor de nuestro array

//Valores al final -> .push()
array2.push("Final",45,100) //Podemos pasarle todos los valores que quedamos
console.log(array2);

//Valores al principio -> unshift()
array2.unshift("Inicio")
console.log(array2);

//Metodos para eliminar valores en nuestros arrays
// .pop() .shift() => Mutan el valor del array

//Valores al final -> Pop
array2.pop()
console.log(array2);

//Valores al principio -> shift

array2.shift()
console.log(array2);

//Métodos para eliminar, modificar o añadir valores en nuestro array
// .splice(x , y , z)

const array3= [1, 2, 3, 4, 5, 6]

//Eliminar valores .splice(indice, numValoresAEliminar)
array3.splice(2, 3)
console.log(array3);

//Añadir valores .splice(indice, 0, valores)
array3.splice(2, 0, 99, "Hola" )
console.log(array3);

//Modificar valores .splice(indice, 1, valores)

array3.splice(3,1, 55)
console.log(array3);
