const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Este es el archivo del piloto\n');
});

server.listen(port, hostname, () => {
  console.log(`Micro servicio del piloto corriendo en http://${hostname}:${port}/`);
});