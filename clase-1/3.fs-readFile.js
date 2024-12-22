const fs = require("node:fs");

//Callback: son funciones que se ejecutan cuando una tarea ha terminado
console.log("Leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8", (error, text) => {
  // <---- Ejecutar esete ccallback
  console.log(text);
});
//readFileSync : forma syncronico
//readFile : forma Asyncrona

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8", (error, text) => {
  console.log(text);
});
