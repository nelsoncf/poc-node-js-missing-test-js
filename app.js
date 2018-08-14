const http = require('http');
const buscaNaPasta = require('./busca-arquivos');
const comparaArquivos = require('./comparadorDeArquivos');
const hostname = '127.0.0.1';
const port = 3001;

const srcFolder = './src/';
const testFolder = './tests/';

var src = buscaNaPasta.lerPastaSrc(srcFolder);
var tests = buscaNaPasta.lerPastaTest(testFolder);
var semTestes = comparaArquivos.comprarListas(src, tests);
var body = semTestes.map((sem) => "<li>"+sem+"</li>")

const writeHTML = () => JSON.stringify(body)

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  res.end(writeHTML());

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


