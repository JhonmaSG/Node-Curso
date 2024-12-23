const { error } = require('node:console')
const fs = require('node:fs')

fs.readdir('.', (error, files) =>{
    if (error){
        console.error('Error al leer el directorio: ',error);
    }

    files.forEach(file =>{
        console.log(file);
    })
})