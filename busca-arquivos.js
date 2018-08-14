const fs = require('fs');
const path = require('path');

/**
 * @memberof buscarArquivosModule
 * @param {*} pasta 
 */
function lerPastaSrc(pasta) {

    var listaDeArquivos = [];

    // Assincrono
    // fs.readdir(pasta, (err, files) => {
    //     files.forEach(file => {
    //       console.log(file);
    //       listaDeArquivos.push(file)
    //     });
    // })

    fs.readdirSync(pasta).forEach(file => {
        console.log(file);
        listaDeArquivos.push(path.parse(file).name)
    })
    
    return listaDeArquivos
}

function lerPastaTest(pasta) {

    var listaDeArquivosTest = [];

    fs.readdirSync(pasta).forEach(file => {
        console.log(file);
        listaDeArquivosTest.push(path.parse(file).name)
    })
    
    return listaDeArquivosTest
}



module.exports = {
    lerPastaSrc: lerPastaSrc,
    lerPastaTest: lerPastaTest
}