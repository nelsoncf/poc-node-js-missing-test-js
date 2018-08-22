const fs = require('fs')
const path = require('path')

const lerPasta = function readdir(pasta) {

    fs.readdir(pasta, function (error, files) {
        if (error) {
            console.log(error)
        } else {
            files.map(function (f) {
                if (path.parse(f).ext === '') {
                    readdir(pasta += "\\" + f)
                } else {
                    console.log(path.parse(f).name)
                    arquivos.push(path.parse(f).name)
                }
            })
        }
    });

}

function controllers(pasta) {
    return new Promise((resolve, reject) => {
        readdir(pasta, (error, arquivos) => {
            if(error){
                reject()
            } else {
                resolve(arquivos)
            }
        })
    }) 
}

var listaDeControllers = controllers('./src')


console.log(listaDeControllers)

