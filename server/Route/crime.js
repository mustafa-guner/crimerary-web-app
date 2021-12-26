const express = require("express");
const crimeRouter = express.Router();
const { crimes, crime } = require("../Controller/crime");

crimeRouter.get("/", crimes);
crimeRouter.get("/:crimeID", crime);

module.exports = crimeRouter;
