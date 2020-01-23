const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

}

const argv = require('yargs'). //Crea comandos al colocarle un punto
command('listar', 'Imprime en consola la tabla de multiplicar', opciones).
command('crear', 'Crea un archivo con la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}