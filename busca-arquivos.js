const fs = require('fs');
const path = require('path')
const readdirp = require('readdirp')

/**
 * @memberof buscarArquivosModule
 * @param {*} pasta 
 */
function lerPasta(pasta, tipoBase, extencao) {

    //var listaDeArquivos = []

    // var settings = {
    //     root: pasta,
    //     entryType: tipoBase,
    //     fileFilter: [extencao]
    // }

    // readdirp(settings)
    //     .on('data', function (entry) {
    //         listaDeArquivos.push(
    //             path.parse(entry.name).name 
    //         )
    //     })
    //     .on('end', function(err){
    //         console.log("Terminou pasta: ", pasta);
    //     })
    // ;

    // readdirp(settings, 
    //             (arquivo) => { listaDeArquivos.push( arquivo.name ) },
    //             (err) => { console.log(err) }
    // )

    let listaDeArquivos = fs.readdirSync(pasta).filter(function(file) {
        if(file.indexOf(".js")>-1) return path.parse(file).name;
    })  
    
    let listaFinalArquivos = listaDeArquivos.map(item => path.parse(item).name)
    
    return listaFinalArquivos
}

module.exports = {
    lerPasta: lerPasta
}