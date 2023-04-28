// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

const listaCompra = ["Huevos", "Leche", "Lechuga", "Refresco", "Tomates"]

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

listaCompra.push("Aceite de Girasol") 
console.log(listaCompra);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

listaCompra.pop("Aceite de Girasol")
console.log(listaCompra);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const listaPeliculas = [

    {titulo : "Titanic", directores: "Antonio", fecha: new Date(2004, 3, 30)},
    {titulo : "Avenger", directores: "Alfredo cajas",fecha: new Date(2021, 11, 16)},
    {titulo : "Republic", directores: "Miguel angel ", fecha: new Date(1995, 0, 13)},
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const res = listaPeliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 01)) //El numero 0 representa a enero
console.log(res);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const listaDirectores = listaPeliculas.map(pelicula => {
    return pelicula.directores
})
console.log(listaDirectores);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listaTitulo = listaPeliculas.map(pelicula => {
    return pelicula.titulo
})
console.log(listaTitulo);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const listaConcatenada = listaDirectores.concat(listaTitulo)
console.log(listaConcatenada);


// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listaFactorPropagacion  = [...listaDirectores, ...listaTitulo]
console.log(listaFactorPropagacion);