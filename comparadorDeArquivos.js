const buscaNaPasta = require('./busca-arquivos')

module.exports = {
    comprarListas: comprarListas
}

async function comprarListas(srcFolder, testFolder){

    var src = await buscaNaPasta.lerPasta(srcFolder, 'both', '*.js');
    var tests = await buscaNaPasta.lerPasta(testFolder, 'both', '*.js');

    console.log("pasta entrada", src, "pasta saida", tests)

    var controllersSemTeste = []

    src.forEach(file => {

        let curr = file
    
        if(!tests.includes(curr += ".test")){
            controllersSemTeste.push(file);
        }

    });

    console.log("controllers sem teste", controllersSemTeste);

    return controllersSemTeste;

}