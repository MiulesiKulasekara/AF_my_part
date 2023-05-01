const express = require("express");
const router = express.Router();

const { createDonor, getAllDonors } = require("../contollers/donorContoller");

//get all donors
router.get("/", getAllDonors);

//add a donors
router.post("/", createDonor);

module.exports = router;
