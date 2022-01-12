const express = require("express");
const formRouter = express.Router();
const {
  reportExistedMissingPerson,
  reportNewMissingPerson,
  getForms,
  getForm,
} = require("../Controller/form");

const { uploadImage } = require("../Middleware/Uploads/upload");

formRouter.get("/forms", getForms);
formRouter.get("/forms/:formID", getForm);
formRouter.post("/report-existed-missing-person", reportExistedMissingPerson);
formRouter.post(
  "/report-new-missing-person",
  [uploadImage.single("photo")],
  reportNewMissingPerson
);

module.exports = formRouter;
