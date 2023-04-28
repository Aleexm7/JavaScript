// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datosPersonales = {
    nombre: "Luis",
    apellidos: "Ramirez",
    edad : 25,
    altura: 180,
    eresDesarrolador: true,
}

// - Una variable que obtenga tu edad a partir del objeto anterior

const edad = datosPersonales.edad

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const lista = [
    {...datosPersonales},{
        nombre: "Pedro",
        apellido: "Angulo",
        edad: 35,
        altura: 180,
        eresDesarrollador: true
    },{
        nombre: "Amaia",
        apellido: "Etxeberria",
        edad: 30,
        altura: 165,
        eresDesarrollador: false
    }
]

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const listaOrdenada = lista.sort((a, b) =>a.edad - b.edad)
console.log(listaOrdenada);