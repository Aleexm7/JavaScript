//Bucles For

for (let i = 0; i < 10; i++){
    console.log(i)
}

for (let i = 0; i < 10; i= i + 2){ //Incrementamos a 2
    console.log(i)
}

let lista = [1,20,30,45,12];

for (let i = 0; i < lista.length; i++){ //Recorremos la lista con este bucle
    console.log(lista[i]);
}

//Estructura For..of

for(let valor of lista){

    console.log(valor)
}

//Estructura forEach

lista.forEach(valor =>{
    console.log(valor)
})

//Estrucutura For..in
let persona ={
    nombre : "Pepito",
    apellido: "Ortiz",
    edad: 34,
    isDevelop: true

}

for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]) //Accedemos al valor de la propiedad
}