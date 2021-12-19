const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const bp = require("body-parser");
const cors = require("cors");
const { connectDB } = require("./Helper/Database/connectDB");
const morgan = require("morgan");

dotenv.config({
  path: path.join(__dirname, "/Config/dotenv/.env"),
});

const PORT = process.env.PORT || 4200;
const { CLIENT_URL } = process.env;

//Connect to database;
connectDB();

//Cors policy for the communicate with front end / back end
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);

app.use(morgan("dev"));

app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));
app.use(express.json());

const indexRoute = require("./Route/index");
app.use("/api/v1/", indexRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}.`);
});
