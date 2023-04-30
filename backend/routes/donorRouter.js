const express = require("express");
const router = express.Router();

const createDonor = require("../contollers/donorContoller");

//add a order
router.post("/", createDonor);

module.exports = router;
