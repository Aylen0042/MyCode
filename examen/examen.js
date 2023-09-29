const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (req.method === 'GET' && parsedUrl.pathname === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error interno del servidor');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.method === 'POST' && parsedUrl.pathname === '/traducir') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            const requestBody = JSON.parse(body);
            const frase = requestBody.frase;

            const fraseTraducida = traducirFrase(frase);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ resultado: fraseTraducida }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada');
    }
});

function traducirFrase(frase) {
    const palabras = frase.split(' ');

    const fraseTraducida = palabras
        .map((palabra) => {
            let palabraTraducida = '';

            for (let i = 0; i < palabra.length; i++) {
                if (
                    palabra.charAt(i) !== 'a' &&
                    palabra.charAt(i) !== 'e' &&
                    palabra.charAt(i) !== 'i' &&
                    palabra.charAt(i) !== 'o' &&
                    palabra.charAt(i) !== 'u'
                ) {
                    palabraTraducida += palabra.charAt(i);
                } else {
                    palabraTraducida += palabra.charAt(i) + 'p' + palabra.charAt(i);
                }
            }

            return palabraTraducida;
        })
        .join(' ');

    return fraseTraducida;
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});