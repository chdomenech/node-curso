const argv = require('./config/yargs-impl').argv;
const colors = require('colors');

const {
    crearArchivoLimite,
    listarTabla
} = require('./multiplicar/multiplicar')

let comando = argv._[0];

let base = argv.base;
let limite = argv.limite;
switch (comando) {
    case 'listar':
        listarTabla(base, limite);
        break;
    case 'crear':
        crearArchivoLimite(base, limite).then(archivo => {
            console.log(archivo);
        }).catch(e => console.log(e));

        break;
    default:
        console.log('comando no reconocido')

}