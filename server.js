

// Importeer le protocole http
const http = require("http");

// Déclaration du serveur en utilisant http
const server = http.createServer((req, res) => {
    res.end("Bonjour le serveur est lancé !");
});

// le serveur est disponible au port 3000
server.listen(3000, () => {
    console.log('Listening on localhost:3000');
});

