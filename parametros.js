//Ejecuta el archivo con node parametros.js --base=10
//donde 10 es el valor de la tabla de multiplicar

const { crearArchivo } = require('./multiplicar/multiplicar')

let argv = process.argv;
let parametro = argv[2]; //node [0] parametros.js [1] --base=10 [2] 
let base = parametro.split('=')[1]; // --base=10


crearArchivo(base).then(archivo => {
    console.log(archivo);
}).catch(e => console.log(e));