const express = require("express");
const session = require('express-session');
const cors = require("cors");
const dataService = require("./services/data");
const app = new express();
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}))

app.use(express.json());
app.use(session({
    secret: "randomsecurestring",
    resave: false,
    saveUninitialized: false
}));
app.get("/", (req, res) => {
    res.send("Welcome GET");
});


app.listen(3000, () => {
    console.log("Mycart Working");
});