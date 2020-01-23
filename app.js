//Este require si lo importo normalmente 
//const multiplicar = require('./multiplicar/multiplicar')
//le doy un  console log al objeto multiplicar se visualizara
// { crearArchivo: [Function: crearArchivo] } donde me dice 
// que crearArchivo es el nombre del modulo que exporte
// y que es una funcion de nombre crearArchivo
/*
const multiplicar = require('./multiplicar/multiplicar')

let base = '7';

multiplicar.crearArchivo(base).then(archivo => {
    console.log(archivo);
}).catch(e => console.log(e));*/

/* Con la destructuracion de objetos solo
le indico que objeto yo quiero de ese
require */
const { crearArchivo } = require('./multiplicar/multiplicar')

let base = '7';

crearArchivo(base).then(archivo => {
    console.log(archivo);
}).catch(e => console.log(e));