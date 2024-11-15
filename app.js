// import express from "express";

// On import le framework express
const express = require("express");

// On créer l'application expressJs avec : app
const app = express();

// app.use((req, res) => {
//     // res.writeHead(200, {"content-Type": "text/html"});
//     res.json({message: "Message envoyer "});
//     // res.write("Bonjour !");
// });

// route
app.get("/", (req, res) => {
    res.end("Je viens de lancer mon serveur avec GET !");
});

// route acceuil
app.get("/acceuil", (req, res) => {
    res.end("Je viens de mettre un acceuil !");
});

// route apropos
app.get("/apropos", (req, res) => {
    res.end("Vous etes dans la apropos !");
});

// route services
app.get("/services", (req, res) => {
    res.end("Vous etes dans le services !");
});

// route contact
app.get("/contact", (req, res) => {
    res.end("Vous etes dans le contact !");
});

// POST
app.post("/moncompte", (req, res) => {
    res.end("Lancé dans le POST : /moncompte");
});

// PUT
app.put("/mettre", (req, res) => {
    res.end('une requete envoyer par la methode PUT : /mettre');
});

// DELETE
app.delete('/supprimer', (req, res) => {
    res.end('une requete envoyer par la methode DELETE : /supprimer');
});


/*
app.listen(3001, () => {
    console.log("Serveur au port 3001");
});
*/

// On exporter l'application
module.exports = app;