const db = require("./connection.js");

function createUser(user) {

    //LEMBRAR DE VERIFICAR
    //SE JÁ EXISTE USUÁRIO COM
    //ESSE EMAIL

    const name = user.name;
    const email = user.email;
    const password = user.password;

    const query = `INSERT INTO users(name, email, password) VALUES(?, ?, ?)`;

    db.run(query, [name, email, password], (err) => {
        if(err) throw err;
    })
}

function deleteUser(user) {
    const email = user.email;
    const password = user.password;
    const query = `DELETE FROM users WHERE email = ? AND password = ?`;

    db.run(query, [email, password], (err) => {
        if(err) throw err;
    })
}

async function getUser(user) {
    const email = user.email;

    const query = `SELECT * FROM users WHERE email = ?`;

    const result = await new Promise((resolve, reject) => {
        db.get(query, [email], (err, rows) => {
           if(err) { return reject(err) }

           resolve(rows);
        });
    });

    return result;
}

module.exports = {
    createUser,
    deleteUser,
    getUser
}
