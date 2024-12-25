const fs = require("node:fs");

//Callback: son funciones que se ejecutan cuando una tarea ha terminado
console.log("Leyendo el primer archivo...");
        const text = fs.readFileSync("./archivo.txt", "utf-8");

console.log("Primer texto; ", text);
//readFileSync : forma syncronico

console.log("Leyendo el segundo archivo...");
const secondText = fs.readFileSync("./archivo2.txt", "utf-8");
console.log("Segundo texto; ", secondText);
