const express = require("express");

const router = express.Router();
const userController = require("./controllers/userController.js");

router.post("/create", userController.createUser);
router.post("/delete", userController.deleteUser);

module.exports = router;
