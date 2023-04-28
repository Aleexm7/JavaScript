//Cómo unir dos listas .concat(lista)

const lista1 = ["Hola" , 2, 3, 4, 5,]

const lista2 = [1, 99, "Adios", false]

console.log(lista1.concat(lista2));


const lista3 = lista1.concat(lista2)
console.log(lista3);

//Como unir dos listas con el factor de propagación
console.log(...lista3);

const lista4 = [... lista1, ...lista2]
console.log(lista4);