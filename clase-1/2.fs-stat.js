const fs = require('node:fs') // A partir de node 16. recomendable colocar
// node: para modulos nativos

// en fs existe (syncrono and asyncrono)
const stats = fs.statSync('./archivo.txt')

console.log(
  stats.isFile(), // Si es un fichero
  stats.isDirectory(), // Si es un directorio
  stats.isSymbolicLink(), // Si es un symbolo (en lace simbolico)
  stats.size // Tamaño en bytes
)
