const userModel = require("../db/models/userModel.js");

function createUser(req, res) {
    userModel.createUser(req.body);

    res.status(202);
    res.send("Usuário criado com sucesso");
}

function deleteUser(req, res) {
    userModel.deleteUser(req.body);

    res.status(200);
    res.send("Usuário deletado com sucesso");
}

async function login(req, res) {
    const user = req.body;
    const result = await userModel.getUser(user);

    console.log(result);

    switch(true) {
        case result.email == user.email && result.password == user.password:
            res.status(200);
            res.send("OK");
            break;
        case result.email == user.email:
            res.status(200);
            res.send("WRONG PASSWORD");
            break;
        default:
            res.status(404);
            res.send("CANT FIND USER");
            break;
    }
}

module.exports = {
    createUser,
    deleteUser,
    login
}
