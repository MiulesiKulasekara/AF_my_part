const express = require("express");
const router = express.Router();

const createUser = require("../contollers/userController");

//add a order
router.post("/", createUser);

module.exports = router;