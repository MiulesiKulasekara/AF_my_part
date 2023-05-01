const express = require("express");
const router = express.Router();

const {
  createDonor,
  getAllDonors,
  getOneDonor,
} = require("../contollers/donorContoller");

//get a donor
router.get("/:id", getOneDonor);

//get all donors
router.get("/", getAllDonors);

//add a donors
router.post("/", createDonor);

module.exports = router;
