module.exports = {
    comprarListas: comprarListas
}

function comprarListas(pastaSrc, pastaTest){

    var controllersSemTeste = [];

    pastaSrc.forEach(file => {

        file += ".test";

        if(!pastaTest.includes(file)){
            controllersSemTeste.push(file);
        }

    });

    console.log("controllers sem teste", controllersSemTeste);

    return controllersSemTeste;

}