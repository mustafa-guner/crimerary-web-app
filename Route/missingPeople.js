const express = require("express");
const missingRouter = express.Router();
const { missingPeople } = require("../Controller/missingPeople");

missingRouter.get("/", missingPeople);

module.exports = missingRouter;
