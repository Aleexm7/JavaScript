//Sentencia switch

let nota = 5;

switch(nota){
    case 5:
        console.log("Enhorabuena, has obtenido un sobresaliente");
        break;
    case 4:
        console.log("Buen trabajo, pero podrías mejorar");
        break;
    case 3:
        console.log("Has obtenido un suficiente");
        break;
    case 2:
        console.log("Has suspendido");
        break;
    case 1:
        console.log("vaya tela...");
        break;
    default:
        console.log("Error, introduce una nota entre 1 y 5");
        break;
}