// Importeer le protocole http
const http = require("http");

// Déclaration du serveur en utilisant http
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("Bonjour le serveur est lancer !");
});

// le serveur est disponible au port 3000
server.listen(3000, () => {
    console.log('Listening on localhost:3000');
});


/* 
 ==== En résumé ====
1. Le projet Node est initialisé avec la commande " npm init

2. un serveur Node basique est lancé grâce
à la méthode createServer venant du package http "http.createServer()"

Les paramètres 'req' et 'res' sont obligatoires pour createServer().
 - 'req' signifie la requête de l'utilisateur effectuée le navigateur web
 - 'res' signifie la réponse retournée par le serveur

Dans notre serveur ici il retourne le message : "Bonjour le serveur est lancé !"
grace à res.end()
*/
