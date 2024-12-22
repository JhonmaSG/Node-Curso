// Esto sólo en los módulos nativos
// que no tienen promesas nativas
//const { promisify } = require('node:util')   //forma de llamar a promesas
//const readFile = promisify(fs.readFile) //Crea la version de promesas

const { readFile } = require("node:fs/promises");
//Callback: son funciones que se ejecutan cuando una tarea ha terminado

//IIFE : Inmedatly Invoked Function Expression
(async () => {
  console.log("Leyendo el primer archivo...");
  const text = await readFile("./archivo.txt", "utf-8");
  console.log("Primer texto: ", text);

  console.log("Hacer cosas mientras lee el archivo...");

  console.log("Leyendo el segundo archivo...");
  const secondText = await readFile("./archivo2.txt", "utf-8");
  console.log("Segundo texto: ", text);
})();
