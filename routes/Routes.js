const routes = require('express').Router();
const models = require('../models');

let alunos = models.Alunos;
let users = models.Users;

routes.post('/add', async (req, res) => {
    let response = await alunos.create({
        name: req.body.name,
        address: req.body.address,
        image: req.body.image
    })

    return res.json(response);
})

routes.get('/read', async (req, res) => {

    let response = await alunos.findAll({
        raw: true
    })

    return res.json(response);
})

routes.post('/authenticate', async (req, res) => {
    let response = await users.findOne({
        where: {
            login: req.body.login,
            password: req.body.password
        }
    })

    return res.json(response);
})

routes.post('/remove', async (req, res) => {
    let response = await alunos.destroy({
        where: {
            id: req.body.id
        }
    })

    return res.json(response);
})

routes.post('/update', async (req, res) => {

    let aluno = await alunos.findByPk(req.body.id);

    if (aluno != null) {
        let dados = {
            id: req.body.id,
            name: req.body.name,
            address: req.body.address != '' ? req.body.address : aluno.address,
            image: req.body.image != '' ? req.body.image : aluno.image
        }

        let where = {
            where: { name: aluno.name },
            raw: true
        }

        let response = await alunos.update(
            dados,
            where
        )

        return res.json(response);
    }
    return res.json(aluno);
})

module.exports = routes;