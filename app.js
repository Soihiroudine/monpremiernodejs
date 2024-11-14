// import express from "express";

// On import le framework express
const express = require("express");

// On créer l'application expressJs avec : app
const app = express();

app.use((req, res) => {
    // res.writeHead(200, {"content-Type": "text/html"});
    res.json({message: "Message envoyer "});
    // res.write("Bonjour !");
});

// On exporter l'application
module.exports = app;

/* 
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
*/