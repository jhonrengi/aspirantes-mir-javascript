const persona = {

    nombre : "Jhon",
    edad : "24",
    ciudad : "Ibague",
    profesion : "Ingeniero"
}

console.log(persona);

function presentacion(x) {
    
    return "Mi nombre es "+persona.nombre + " vivo en la ciudad de " + persona.ciudad + " tengo  " + persona.edad + " y mi profesion es "+persona.profesion;
}

let mensaje = presentacion(persona);
console.log(mensaje);

persona.hobbies = ["leer", "cantar", "cocinar"];

console.log(persona);
console.log(persona.hobbies);

let llave = Object.keys(persona.hobbies);

for (let i = 0; i < llave.length; i++) {
    
    let llaves = llave[i];
    console.log(llave[i]);
    
}