import express from "express";

// On créer l'application expressJs
const app = express();

// app.use((req, res) => {
//     res.writeHead(200, {"content-Type": "text/html"});
//     res.end("Le serveur est lancer!");
// });

app.get("/", (req, res) => {
    res.end("<h1>Je viens de lancer mon serveur !</h1>");
});

app.get("/bonjour", (req, res) => {
    res.end("<h1>Je viens de mettre un bonjour !</h1>");
});

app.get("/cuisine", (req, res) => {
    res.end("<h1>Vous etes dans la cuisine !</h1>");
});

app.get("/bangalo", (req, res) => {
    res.end("<h1>Vous etes dans le bangalo !</h1>");
});

app.listen(3001, () => {
    console.log("Serveur au port 3001");
});
// On va exporter l'application pour les autres fichiers 
// module.exports = app;
// export{
//     app
// };