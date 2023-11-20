const sqlite = require("sqlite3");

const db = new sqlite.Database("src/db/models/users.db");

module.exports = db;
