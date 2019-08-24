const http = require('http');

const hostname = '127.0.0.1';
const port = 3002;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Este es el archivo del rastreo\n');
});

server.listen(port, hostname, () => {
  console.log(`Micro servicio del rastreo corriendo en http://${hostname}:${port}/`);
});