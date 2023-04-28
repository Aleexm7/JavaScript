//Trabajando con Objetos

const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Rodriguez",
    isDeveloper: false,
    libros_favoritos: ["el metodo", "Código Da Vinci"],
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj.apellido);
console.log(obj["4-juegos"]);

//Acceder a propiedades a través de variable
const prop = "isDeveloper"
console.log(obj[prop]); 

//Replicar ese objeto

const obj2 = {...obj}

console.log(obj.nombre); //Devuelve mismo nombre
console.log(obj2.nombre); //Devuelve mismo nombre

obj2.nombre = "Antonio"

console.log(obj2.nombre);//Devuelve otro nombre 

//////////////////////////////
// Cómo ordenar listas de objetos en función de una propiedad

const listaPeliculas = [
    {titulo: "Lo que el viento se llevó", anyo: 1999},
    {titulo: "Titánic", anyo: 1997},
    {titulo: "El efecto mariposa", anyo: 2004},
    {titulo: "Mohana", anyo: 2010},
]

// .sort() -> Múta el valor de la lista original

listaPeliculas.sort((a, b)=> a.anyo - b.anyo)
console.log(listaPeliculas);
