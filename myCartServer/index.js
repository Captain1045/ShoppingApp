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
app.post("/login", (req, res) => {

    dataService.login(req, req.body.username, req.body.password).then(result => {
        res.status(result.statusCode).json(result);
        //console.log(req.session.currentUser);
    });
});
app.post("/signup", (req, res) => {

    dataService.signUp(req, req.body.username, req.body.password,req.body.name,req.body.pincode,req.body.phone,req.body.gender).then(result => {
        res.status(result.statusCode).json(result);
        //console.log(req.session.currentUser);
    });
});

app.listen(3000, () => {
    console.log("Mycart Working");
});