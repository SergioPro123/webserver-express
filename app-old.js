const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        let salida = {
            nombre: 'Sergio Aparicio',
            edad: 20,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(80);

console.log('Escuchando el puerto 80');