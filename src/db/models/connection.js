const sqlite = require("sqlite3");

const db = new sqlite.Database("src/db/models/users.db");
const query = `CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
)`

db.run(query, (err) => {
    if(err) throw err;
})

module.exports = db;
