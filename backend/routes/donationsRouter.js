const express = require("express");
const router = express.Router();

const {createDonations,getAllDonations} = require("../contollers/donationsController");

//add a donation
router.post("/", createDonations);

//get all donors
router.get("/", getAllDonations);


module.exports = router;
