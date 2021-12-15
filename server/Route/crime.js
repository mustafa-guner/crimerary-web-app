const express = require("express");
const crimeRouter = express.Router();
const { crimes } = require("../Controller/crime");

crimeRouter.get("/", crimes);

module.exports = crimeRouter;
