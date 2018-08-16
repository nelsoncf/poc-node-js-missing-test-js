const fs = require('fs');
const path = require('path');
var readdirp = require('readdirp');


var settings = {
    root: './src/',
    entryType: 'all'
};

var allFilePaths = [];

readdirp(settings)
    .on('data', function (entry) {
        // execute everytime a file is found in the providen directory
        if(entry.name.indexOf(".js")>-1){
            allFilePaths.push(
                path.parse(entry.name).name 
            );
        }
        // Store the fullPath of the file/directory in our custom array 
        // allFilePaths.push(
        //     entry.name 
        // );
    })
    .on('warn', function(warn){
        console.log("Warn: ", warn);
    })
    .on('error', function(err){
        console.log("Error: ", err);
    })
    .on('end', function(){
        console.log(allFilePaths);
        // ["c:/file.txt","c:/other-file.txt" ...]
    })
;

console.log("TODOS OS ARQUIVOS COM SUB FOLDER", allFilePaths)


/**
 * @memberof buscarArquivosModule
 * @param {*} pasta 
 */
function lerPastaSrc(pasta) {

    let listaDeArquivos = fs.readdirSync(pasta).filter(function(file) {
        if(file.indexOf(".js")>-1) return path.parse(file).name;
    })  
    
    let listaFinalArquivos = listaDeArquivos.map(item => path.parse(item).name)
    
    return listaFinalArquivos
}

function lerPastaTest(pasta) {

    let listaDeTest = fs.readdirSync(pasta).filter(function(file) {
        if(file.indexOf(".js")>-1) return path.parse(file).name;
    })

    let listaFinalTest = listaDeTest.map(item => path.parse(item).name)
    
    return listaFinalTest
}



module.exports = {
    lerPastaSrc: lerPastaSrc,
    lerPastaTest: lerPastaTest
}