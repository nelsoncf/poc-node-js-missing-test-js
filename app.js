const http = require('http');
const buscaNaPasta = require('./busca-arquivos');
const comparaArquivos = require('./comparadorDeArquivos');
const hostname = '127.0.0.1';
const port = 3000;

const srcFolder = './src/';
const testFolder = './tests/';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

var src = buscaNaPasta.lerPastaSrc(srcFolder);
var tests = buscaNaPasta.lerPastaTest(testFolder);

comparaArquivos.comprarListas(src, tests);




server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

