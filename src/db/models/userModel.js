const db = require("./connection.js");

function createUser(user) {
    const name = user.name;
    const email = user.email;
    const password = user.password;

    const sql = `INSERT INTO users(name, email, password) VALUES(?, ?, ?)`;

    db.run(sql, [name, email, password], (err) => {
        if(err) throw err;
    })
}

function deleteUser(email) {
    const sql = `DELETE FROM users WHERE email = ?`;

    db.run(sql, [email], (err) => {
        if(err) throw err;
    })
}

module.exports = {
    createUser,
    deleteUser,
}
