const Donors = require("../models/donorModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");

//get all donors
const getAllDonors = async (req, res) => {
  const donors = await Donors.find({}).sort({ createAt: -1 });
  res.status(200).json(donors);
};

//create a donor
const createDonor = async (req, res) => {
  //add data to the db
  const { name, email, password, address, location, tele } = req.body;
  const success = Array();

  try {
    const donor = await Donors.create({
      //donor
      name,
      email,
      password,
      address,
      location,
      tele,
    });
    try {
      //user
      const user = await User.create({
        email,
        password,
      });
      success[0] = "User is created successfully";
    } catch (error) {
      //user
      console.log(error);
      res.status(400).json({ error: error });
    }
    success[1] = "Donor is created successfully";
    res.status(200).json({
      //user
      success: success,
    });
  } catch (error) {
    //donor
    console.log(error);
    res.status(400).json({ error: error });
  }
};

module.exports = {createDonor,getAllDonors};
