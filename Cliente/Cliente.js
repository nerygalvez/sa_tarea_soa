const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


var request = require('request');
var options = {
	url : 'http://localhost:3001/',
	method : 'GET'
}


const server = http.createServer((req, res) => {

	request(options, function (error, response, body) {
	    //if (!error && response.statusCode == 200) {
	    //    console.log('La respuesta fue:' + body);
	    //}
	    console.log('error:', error); // Print the error if one occurred
  		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
		console.log('body:', body); // Print the HTML for the Google homepage.
	});

    res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Este es el archivo del cliente\n');


});

server.listen(port, hostname, () => {
  console.log(`Micro servicio del cliente corriendo en http://${hostname}:${port}/`);
});

