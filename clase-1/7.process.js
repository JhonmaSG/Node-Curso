//Informacion y control sobre el proceso actual de ejecución
//Tiene atributos y propiedades

//argumentos de entrada
//console.log(process.argv);

// controlar el proceso y su salidaa
//process.exit(1)

// podemos controlar eventos del proceso
// process.on("exit", () => {
//   // limpiar los recursos
// });

// current working directory
console.log(process.cwd());

// plaform
console.log(process.env.TZ);
