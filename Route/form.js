const express = require("express");
const formRouter = express.Router();
const {
  reportExistedMissingPerson,
  reportNewMissingPerson,
  getForms,
  removeForm,
} = require("../Controller/form");

const { uploadImage } = require("../Middleware/Uploads/upload");

formRouter.get("/forms", getForms);
formRouter.delete("/forms/:formID", removeForm);
formRouter.post("/report-existed-missing-person", reportExistedMissingPerson);
formRouter.post(
  "/report-new-missing-person",
  [uploadImage.single("photo")],
  reportNewMissingPerson
);

module.exports = formRouter;
