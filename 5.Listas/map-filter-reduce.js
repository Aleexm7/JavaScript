//Trabajar con métodos más avanzados
// .map() .filter() .reduce()

const array =["Madrid", "Sevilla", "Barcelona", "Bilbao"];

array.forEach( v =>{
    console.log(v)
} );

const newArray = array.map((valor, indice) => {

    return `${indice + 1} - ${valor}` //Recuerda que el indice empieza en 0,  le sumamos +1 para que empieze en 1
})
console.log(newArray);//Nos devuelve el valor del array junto con su indice

//Otra forma de optmizar el array

const newArray2 = array.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newArray2);



const arrayObj = [
    {nombre : "Leire", edad: 35},
    {nombre : "Antonio", edad: 45},
    {nombre : "Miguel", edad: 15},
    {nombre : "Anabel", edad: 24},
]
const personasMayores = arrayObj.filter(obj =>{
    if(obj.edad > 30){
        return true
    }else{
        return false
    }
})
console.log(personasMayores);

//Otra forma de optimizarlo

const personasMayores2 = arrayObj.filter(obj => obj.edad > 30)
console.log(personasMayores2);

const nuevaLista = arrayObj.filter(obj => obj.nombre !== "Miguel")//No filtra la persona que se llame miguel
console.log(nuevaLista);



const valores = [3,5,6,7,8,100]

const suma = valores.reduce((acumulado, valor) =>{
    return acumulado + valor
})
console.log(suma);