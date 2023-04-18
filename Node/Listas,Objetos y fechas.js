//Listas, array o arreglo

const lista = [1,"Hola",null,undefined];
const lista2 = new Array(1,2,3,4,5);
const lista3 = new Array(10);
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);


//Objetos

const movil = {
    altura : 10,
    anchura: 20,
    marca: "xiaomi",
    isWhite: true,
    contactos : ["Luis", "Marcos", "Pedro"],
    tarjeta: {
        marca: "Sandsish",
        almacenamiento : 32
    }, 
    "altura-tarjeta": 4 //Tambien se puede poner con doble comillas ya que js no admite " - " sin doble comillas
}

//Crear un nuevo atributo para este objeto

movil.anyo = 2019;
movil.marca = "Samsung"

console.log(movil.tarjeta.marca)
console.log(movil.marca)

//FECHAS

const ahora = new Date(); //Nos daría la fecha y hora de la creacion de esa variable
console.log(ahora);

const fecha_mili = new Date(10); //Utilizando los milisegundos
console.log(fecha_mili);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0 , 25);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1; //El mes de enero  es 0
const year = ahora.getFullYear();

console.log(dia, mes ,year)