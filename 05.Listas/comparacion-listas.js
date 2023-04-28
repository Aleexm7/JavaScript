//Como podemos comparar listas
// .every()
const array = [100, 23, 45, 65, 200, 45, -100, -45]

/* const resultado = array.every(valor =>{

    if(valor > 0){
        return true
    }else{
        return false
    }
}) */

const resultado = array.every(valor => valor > 0)
console.log(resultado);

//Comparacion listas

const arr1 = [1, 2, 3, 4]
const arr2 = [1, 2, 3, 4]



const compararArrays = (array_1, array_2) => {

    if (array_1.length !== array_2.length) return false
    const resultado = array_1.every((valor, i) => valor === array_2[i])
    return resultado
}

console.log(compararArrays(arr1 , arr2));
const arr3 = [3, 2, 4, 6]

console.log(compararArrays(arr3, arr1));