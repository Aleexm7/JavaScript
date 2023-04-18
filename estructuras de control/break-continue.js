// Casos muy específicos -break, continue

let lista =[1,2,3,4,5,6,7];

for (let i = 0; i < lista.length; i++){

    if (lista[i] == 3){ //Esto hará que el numero 3 de la lista, no se muestre por pantalla
        continue;
    }

    let j = 10;
    console.log(lista[i]);

    if (lista[i]> 5){
        break;
    }
}

//Break y continue
//labels

let unidades = 0;
let decenas = 0;

bucleDecenas: while (true){
    
    bucleUnidades: while (true){ //Ponemos etiqueta a los bucles
        console.log(`El numero actual es : ${decenas}${unidades}`)
        unidades ++

        if(unidades === 10){
            unidades = 0
            break bucleUnidades //Mencionamos esas etiquetas para salir de un bucle específico
        }

    }
    decenas++
    if (decenas === 2){
        console.log(`El numero actual es : ${decenas}${unidades}`)
        break bucleDecenas
    }
}
console.log("Ya hemos terminado")
