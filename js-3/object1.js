const pedro = {

    nombre : "Pedro Perez",
    edad : "30",
    activo : true,
    hobbies: ["programar","squash","piano"],
    saluda: function(){

        console.log("Hola, me llamo " + this.nombre);
    }
}

pedro.Estatura = 1.8;
delete pedro.activo;
console.log(pedro.edad);
console.log(pedro.activo);
console.log(" ");

let llaves = Object.keys(pedro);

for (let i=0; i < llaves.length; i++) {
  let llave = llaves[i];
  console.log(llaves[i]+" : "+pedro[llave]);
}

console.log(" ");

for (let llave in pedro) {
    if (pedro.hasOwnProperty(llave)) {
      console.log(pedro[llave])
    }
}

pedro.saluda();
