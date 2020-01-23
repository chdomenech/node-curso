const fs = require('fs')
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log(`===========================`.green);
    console.log(`======= Tabla de ${base} ======= `.green);
    console.log(`===========================`.green);
    for (let i = 1; i <= limite; i++) {
        let mult = base * i;
        console.log(`${base} * ${i} = ${mult}\n`.cyan);
    }
}

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= 10; i++) {
            let mult = base * i;
            data += `${base} * ${i} = ${mult}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`)
        })
    })
}

let crearArchivoLimite = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            let mult = base * i;
            data += `${base} * ${i} = ${mult}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`Archivo creado:` + colors.green.underline(`tabla-${base}-al-${limite}.txt`));
        })
    })
}

//Nos permite usar nuestra funcion globalmente
//colocandola en este objeto que exporta nuestra funcion
module.exports = {
    crearArchivo,
    listarTabla,
    crearArchivoLimite
}