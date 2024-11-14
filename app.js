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

// On exporter l'application
module.exports = app;


app.get("/", (req, res) => {
    res.end("<h1>Je viens de lancer mon serveur !</h1>");
});

app.get("/acceuil", (req, res) => {
    res.end("<h1>Je viens de mettre un acceuil !</h1>");
});

app.get("/apropos", (req, res) => {
    res.end("<h1>Vous etes dans la apropos !</h1>");
});

app.get("/services", (req, res) => {
    res.end("<h1>Vous etes dans le services !</h1>");
});

app.get("/contact", (req, res) => {
    res.end("<h1>Vous etes dans le contact !</h1>");
});

/*
app.listen(3001, () => {
    console.log("Serveur au port 3001");
});
*/