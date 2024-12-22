const path = require("node:path");

// Barra separadora de rutas segun Sis. op
console.log(path.sep);

// Unit rutas con path join
const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);

const base = path.basename("/tmp/jhonm-secrets-files/password.txt");
console.log(base);

const fileName = path.basename("/tmp/jhonm-secrets-files/password.txt", ".txt");
console.log(fileName);

const extension = path.extname("imagen.jpg");
console.log(extension);
