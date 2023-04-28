// .some()

const array = [-1, 29, 3 ,4 ,5 ,7, 34, 5, 78, 54]

const res = array.some(valor => valor < -0) //Devolverá si existe un valor en el array menor que 0
console.log(res);//Devuelve true

const existe = array.some(valor => valor === 29) //Comporbar si existe el valor 29 en el array
console.log(existe); //Devuelve true

const arrayObj = [
    {nombre : "Leire", edad: 35},
    {nombre : "Antonio", edad: 45},
    {nombre : "Miguel", edad: 15},
    {nombre : "Anabel", edad: 24},
]

const existePersona = arrayObj.some(valor => valor.nombre === "Miguel")
console.log(existePersona); //Devuelve true

//Cómo obtener una lista a partir de un objeto iterable

const string = "Hola soy jorge"

const arr_str = Array.from(string)
console.log(arr_str); //Devuelve ese string pero en forma de lista

const set = new Set([2, 3, 4, "Hola"])
const arr_set = Array.from(set)
console.log(arr_set);

const keys = array.keys()

const arr_keys = Array.from(keys)
console.log(arr_keys);