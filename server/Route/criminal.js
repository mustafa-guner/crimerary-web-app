const express = require("express");
const criminalRouter = express.Router();
const { criminals, criminal } = require("../Controller/criminal");

criminalRouter.get("/", criminals);
criminalRouter.get("/:criminalID", criminal);

module.exports = criminalRouter;
