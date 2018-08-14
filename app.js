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
var html = montaBody(semTestes);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(html);

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function montaBody(semTestes) {
  var header = '';

  // TO-DO Gerar html
  // var body = semTestes.forEach(item => 
  //    "<li>"+item+"</li>"
  // );

  // var body = [];

  // for (let i = 0; i < semTestes.length; i++) {
  //   const element = semTestes[i];
    
  // }

  return '<!DOCTYPE html>'+ '<html><head>' + header + '</head><body><ul>' + body + '+</ul></body></html>';
};


