const express = require("express");
const formRouter = express.Router();
const {
  reportExistedMissingPerson,
  reportNewMissingPerson,
} = require("../Controller/form");

const { uploadImage } = require("../Middleware/Uploads/upload");

formRouter.post("/report-existed-missing-person", reportExistedMissingPerson);
formRouter.post(
  "/report-new-missing-person",
  [uploadImage.single("photo")],
  reportNewMissingPerson
);

module.exports = formRouter;
