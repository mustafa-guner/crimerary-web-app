const express = require("express");
const criminalRouter = express.Router();
const { criminals } = require("../Controller/criminal");

criminalRouter.get("/", criminals);

module.exports = criminalRouter;
