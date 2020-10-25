const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const models = require('./models');
const path = require("path");
const app = express();
const crypto = require("crypto");

const multer = require("multer");
const multerConfig = require("./config/multer");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    "/files",
    express.static(path.resolve(__dirname, "tmp", "uploads"))
);

let alunos = models.Alunos;
let users = models.Users;
// multer(multerConfig).single("avatar")
app.post('/add', async (req, res) => {
    let response = await alunos.create({
        name: req.body.name,
        address: req.body.address,
        image: req.body.image
    })

    if (response == null) {
        res.send(null);
    } else {
        res.send(response)
    }
})

app.get('/select', async (req, res) => {
    let response = await alunos.findAll({
        raw: true
    }).then(data => {
        res.send(data);
    }).catch((error) => {
        console.log(error)
        res.send(null)
    });
})

app.post('/authenticate', async (req, res) => {
    let response = await users.findOne({
        where: {
            login: req.body.login,
            password: req.body.password
        }
    })
    if (response == null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response)
    }
})

app.post('/update', async (req, res) => {
    let response = await alunos.findOne({
        where: {
            name: req.body.name
        }
    }).then(response => {
        response.address = req.body.address,
        response.save(),
        res.send(response)
    }).catch((error) => {
        console.log(error)
        res.send(null)
    });
})

app.post('/remove', async (req, res) => {
    let response = await alunos.destroy({
        where: {
            name: req.body.name,
            address: req.body.address
        }
    })
    if (response == null) {
        res.send(null);
    } else {
        res.send(response)
    }
})

let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log(`Servidor Rodando na porta ${port}...`);
})
