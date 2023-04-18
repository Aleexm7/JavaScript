//Comparaciones


//igualdad

if(5 == 5){
    console.log("5 es igual a 5");
}

if(5===5){
    console.log("5 es muy igual que 5");

}

let a = 5;
let b = "5";

// == solo compara el valor

// === compara el valor y el tipo

if(a == b){
    console.log("a es igual a b - Debil");
}

if(a===b){
    console.log("a es igual a b - Fuerte");

}

// Desigualdad
let c = 4;
let d = 10;

if(c != d){
    console.log("a es diferente a d - Debil");
}

if(c !== d){
    console.log("a es diferente a d - Fuerte");
}