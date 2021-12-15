const express = require("express");
const authRouter = express.Router();
const { login, dashboard } = require("../Controller/auth.js");

//ADD VALIDATION MIDDLEWARE FUNCTIONS
const { loginValidation } = require("../Middleware/Validation/validation");
const { errorValidation } = require("../Middleware/Validation/error");
const { checkAuthorization, adminAccess } = require("../Middleware/Auth/auth");

authRouter.post("/login", [loginValidation, errorValidation], login);
authRouter.get("/me", [checkAuthorization, adminAccess], dashboard);
module.exports = authRouter;
