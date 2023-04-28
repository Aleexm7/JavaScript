// .sort()-> Modifica el array
const array = [2, 30, 41, 500, 63, 16, 1]

array.sort((a, b) =>{

    if(a < b){
        return -1

    }else if (a > b){
        return +1

    }else{ // a === b

        return 0
    }
    
})
console.log(array);

// Ordenar únicamente array númericos

const arrayNumerico = [21, 130, 41, 500, 63, 16, 1]

arrayNumerico.sort((a,b) => a - b)

console.log(arrayNumerico);

//Interesante en array de objetos


const arrayObj = [
    {nombre : "Leire", edad: 35},
    {nombre : "Antonio", edad: 45},
    {nombre : "Miguel", edad: 15},
    {nombre : "Anabel", edad: 24},
]


/* arrayObj.sort((a, b) =>{
    if(a.edad < b.edad){
        return -1
    }else if (a.edad > b.edad){
        return +1
    }else{
        return 0
    }
}) */

arrayObj.sort((a, b) => a.edad - b.edad) //Retorna la division de estos dos, si es negativa; significa que a es menor que b, si es positiva; significa que b es menor que a
console.log(arrayObj);