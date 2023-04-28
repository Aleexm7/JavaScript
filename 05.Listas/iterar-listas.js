// Iterar los valores de una lista

//Forma antigua(poco eficiente)
const array = [1,2,3,4,5,6]


for(let i = 0; i < array.length; i++){
    console.log(array[i]);

}

//Forma ES6(más eficiente) for each
let suma = 0;
const arrayNums = [3,6,22,77,93]
arrayNums.forEach(valor =>{
    suma+=valor;
    console.log(valor);
})
console.log(suma);

//Búsqueda de un valor dentro de una lista .find()
//Quiero encontrar el elemento 77

const variable = arrayNums.find(valor =>{
    if(valor === 77){
        return true
    }
})

console.log(variable);

// 1 Forma de hacerlo
const listaObjetos = [

    {nombre : "Leire", edad: 35},
    {nombre : "Antonio", edad: 45},
    {nombre : "Miguel", edad: 15},
    {nombre : "Anabel", edad: 24},

]


const objeto = listaObjetos.find(o =>o.nombre === "Leire");
console.log(objeto.edad);

//Otra forma de hacerlo
const {edad} = listaObjetos.find(o =>o.nombre === "Miguel");
console.log(edad);