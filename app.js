const http = require('http');
const buscaNaPasta = require('./busca-arquivos');
const comparaArquivos = require('./comparadorDeArquivos');
const hostname = '127.0.0.1';
const port = 3001;

const srcFolder = './src/';
const testFolder = './tests/';

var src = buscaNaPasta.lerPasta(srcFolder, 'both', '*.js');
var tests = buscaNaPasta.lerPasta(testFolder, 'both', '*.js');

var semTestes = comparaArquivos.comprarListas(src, tests);


var body = semTestes.map((sem) => "<li>"+sem+"</li>")

const writeHTML = () => JSON.stringify(body)

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  res.end(writeHTML());

});

server.listen(port, hostname, () => {
    console.log(`Lista na pasta http://${hostname}:${port}/`);
});


