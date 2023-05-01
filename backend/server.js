//import packages
const express = require("express");
const cors = require("cors");
require("dotenv").config();

//database connection
const connection = require("./bdconnection/dbconn");

const donorRotes = require("./routes/donorRouter");
const donationRoute = require("./routes/donationsRouter")

const app = express();

//middle ware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/donors", donorRotes);
app.use("/api/donations", donationRoute);

//db connection
connection.once("open", () => {
  console.log("DB connected successfully!!");
});

//server
app.listen(process.env.PORT, () => {
  console.log(`App is running on the port ${process.env.PORT}`);
});
