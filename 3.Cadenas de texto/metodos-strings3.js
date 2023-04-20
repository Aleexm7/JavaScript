//Metodos de cadenas de texto (parte 3)

let texto_largo = "Yo os las entrego tales como son, en su frescor de carne y de rosa. Sólo existe un método honrado y lógico de traducción: la «literalidad», una literalidad impersonal, apenas atenuada por un leve parpadeo y una ligera sonrisa del traductor. Ella crea, sugestiva, la más grande potencia literaria. Ella produce el placer de la evocación. Ella es la garantía de la verdad. Ella es firme e inmutable, en su desnudez de piedra. Ella cautiva el aroma primitivo y lo cristaliza. Ella separa y desata... Ella fija."

console.log(texto_largo.match(/Ella/g))

//¿Existe la palabra dentro del texto?
console.log(texto_largo.includes("Ella")) //Si existe la palabra indicada, nos delvoverá true, en caso contrario false

//Saber si un texto empieza con una palabra

console.log(texto_largo.startsWith("Yo"))

//Saber si un texto termina con una palabra

console.log(texto_largo.endsWith("elegir"))