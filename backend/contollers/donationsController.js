const Donations = require("../models/donationsModel");
const mongoose = require("mongoose");

//get all donors
const getAllDonations = async (req, res) => {
  const donors = await Donations.find({}).sort({ createAt: -1 });
  res.status(200).json(donors);
};

//create a donor
const createDonations = async (req, res) => {
  //add data to the db
  const { donation, description } = req.body;

  try {
    const donations = await Donations.create({
      donation,
      description,
    });
    res.status(200).json(donations);
  } catch (error) {
    //donor
    console.log(error);
    res.status(400).json({ error: error });
  }
};

module.exports = {createDonations,getAllDonations};
