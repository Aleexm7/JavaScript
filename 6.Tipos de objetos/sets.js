// Sets o conjuntos

const array = [1, 2, 3, 4, 5, 1, 3, 8, "Hola"]

const miSet = new Set(array)
console.log(miSet); //Los set no puede almacenar valores que ya existe en el array

// .add()
miSet.add(90) //Tiene que ser valor unico, si existe en el array no se mostrará

console.log(miSet);

// .delete()

miSet.delete("Hola")
console.log(miSet);

// // .clear()
// miSet.clear()
// console.log(miSet);

// .has()
console.log(miSet.has(90));

// .size --> muestra los valores unicos del array
console.log(miSet.size);

//Iterar sets
miSet.forEach(valor => {
    console.log(valor);
})

//Una forma de hacerlo
const it_miSet = miSet.values()
console.log(it_miSet);

// Otra forma de hacerlo: factor propagacion
const arr_miSet = [... miSet]
console.log(arr_miSet[4]);