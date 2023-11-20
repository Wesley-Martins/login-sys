const userModel = require("../db/models/userModel.js");

function createUser(req, res) {
    userModel.createUser(req.body);

    res.status(202);
    res.send("Usuário criado com sucesso");
}

function deleteUser(req, res) {
    userModel.deleteUser(req.body.email);

    res.status(200);
    res.send("Usuário deletado com sucesso");
}

module.exports = {
    createUser,
    deleteUser
}
