const express = require("express");
const adminRoute = express.Router();
const {
  createUser,
  removeUser,
  createCrime,
  removeCrime,
} = require("../Controller/admin");

//Admin Dashboard after success login
const { dashboard } = require("../Controller/auth");

//ADD VALIDATION MIDDLEWARE FUNCTIONS
const { registerValidation } = require("../Middleware/Validation/validation");

const {
  checkAuthorization,
  adminAccess,
  userAccess,
} = require("../Middleware/Auth/auth");
const { errorValidation } = require("../Middleware/Validation/error");

adminRoute.delete(
  "/remove-user/:id",
  [checkAuthorization, adminAccess],
  removeUser
);

adminRoute.post(
  "/create-new-user",
  [registerValidation, errorValidation],
  createUser
);

adminRoute.post(
  "/create-new-crime",
  [checkAuthorization, adminAccess],
  createCrime
);

adminRoute.delete(
  "/remove-crime/:crimeID",
  [checkAuthorization, adminAccess],
  removeCrime
);

adminRoute.get("/dashboard", [checkAuthorization, adminAccess], dashboard);

module.exports = adminRoute;
