// Importeer le protocole http
// import { createServer } from "http";
// import app from "./app.js";

// On importe le module http
const http = require("http");

// On importe le fichier app.js
const app = require("./app.js");

// On créer un port avec pour valeur 3002
const PORT = 3002;

// On modifie le port de l'application avec la valeur du PORT
app.set("port", PORT);

// Déclaration du serveur en utilisant http
const server = http.createServer(app);

// Recuperer l'heure
const date = new Date();
const heure = (date.getHours() < 10) ? "0" + date.getHours(): date.getHours();
const minute = (date.getMinutes() < 10) ? "0"+date.getMinutes(): date.getMinutes();
// const seconde = (date.getSeconds() < 10) ? "0"+date.getSeconds(): date.getSeconds();


// On ouvre le serveur
server.listen(PORT, () =>{
    // Afficher l'heure
    
    console.log(date.toLocaleDateString()," ", date.toLocaleTimeString());
    console.log(`Il est ${heure}h${minute}`);
    console.log("Le serveur est lancé au port : " + PORT);
});

// const server1 = createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end("Bonjour le serveur est lancer !");
// });

// // le serveur est disponible au port 3000
// server.listen(3000, () => {
//     console.log('Listening on localhost:3000');
// });


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
