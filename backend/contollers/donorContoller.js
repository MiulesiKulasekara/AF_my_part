const Donors = require("../models/donorModel");
const mongoose = require("mongoose");

//create a donor
const createDonor = async (req, res) => {
  //add data to the db
  const { name, email, password, address, location, tele } = req.body;

  try {
    const donor = await Donors.create({
      name,
      email,
      password,
      address,
      location,
      tele,
    });
    // res.status(200).json(donor);
    res.status(200).json({
      donor,
      success: "Donor is created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
};

module.exports = createDonor;
