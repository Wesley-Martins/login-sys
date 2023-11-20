const express = require("express");

const app = express();
const port = 3030;
const router = require("./router.js");

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Ouvindo na porta ${port}`);
})

