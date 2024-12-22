// Esto sólo en los módulos nativos
// que no tienen promesas nativas
//const { promisify } = require('node:util')   //forma de llamar a promesas
//const readFile = promisify(fs.readFile) //Crea la version de promesas

import { readFile } from "node:fs/promises";

//Dos trabajos en paralelo
Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8"),
]).then(([text, secondText]) => {
  console.log("Primer texto: ", text);
  console.log("Segundo texto: ", secondText);
});
