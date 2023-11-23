const userModel = require("../db/models/userModel.js");

async function createUser(req, res) {
    const result = await userModel.createUser(req.body);

    if(!result) {
        return res.status(200).send("USER ALREADY EXIST");
    }

    res.status(201);
    res.send("USER CREATED");
}

function deleteUser(req, res) {
    userModel.deleteUser(req.body);

    res.status(200);
    res.send("USER DELETED");
}

async function login(req, res) {
    const user = req.body;
    const result = await userModel.getUser(user);

    if(!result) {
        return res.status(404).send("CANT FIND USER");
    }

    switch(true) {
        case result.email == user.email && result.password == user.password:
            res.status(200);
            res.send("OK");
            break;
        case result.email == user.email:
            res.status(200);
            res.send("WRONG PASSWORD");
            break;
    }
}

module.exports = {
    createUser,
    deleteUser,
    login,

}
