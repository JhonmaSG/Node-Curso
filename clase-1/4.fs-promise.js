// Esto sólo en los módulos nativos
// que no tienen promesas nativas
//const { promisify } = require('node:util')   //forma de llamar a promesas
//const readFile = promisify(fs.readFile) //Crea la version de promesas

const fs = require("node:fs/promises");
//Callback: son funciones que se ejecutan cuando una tarea ha terminado

console.log("Leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log("Primer texto: ", text);
});
//readFileSync : forma syncronico
//readFile : forma Asyncrona

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8").then((text) => {
  console.log("Segundo texto: ", text);
});
