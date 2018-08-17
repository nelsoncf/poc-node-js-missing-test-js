module.exports = {
    comprarListas: comprarListas
}

function comprarListas(pastaSrc, pastaTest){

    console.log("pasta entrada", pastaSrc, "pasta saida", pastaTest)

    var controllersSemTeste = []

    pastaSrc.forEach(file => {

        let curr = file
    
        if(!pastaTest.includes(curr += ".test")){
            controllersSemTeste.push(file);
        }

    });

    console.log("controllers sem teste", controllersSemTeste);

    return controllersSemTeste;

}