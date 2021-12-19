const express = require("express");
const authRouter = express.Router();
const { login, dashboard, testAuth } = require("../Controller/auth.js");

//ADD VALIDATION MIDDLEWARE FUNCTIONS
const { loginValidation } = require("../Middleware/Validation/validation");
const { errorValidation } = require("../Middleware/Validation/error");
const { checkAuthorization, adminAccess } = require("../Middleware/Auth/auth");

authRouter.post("/login", [loginValidation, errorValidation], login);
authRouter.get("/me", [checkAuthorization, adminAccess], dashboard);
authRouter.get("/testAuth", [checkAuthorization, adminAccess], testAuth);
module.exports = authRouter;
