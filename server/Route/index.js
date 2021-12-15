const express = require("express");
const router = express.Router();

//Routes
const authRouter = require("./auth");
const adminRouter = require("./admin");
const crimeRouter = require("./crime");

router.use("/auth/", authRouter);
router.use("/admin/", adminRouter);
router.use("/crimes/", crimeRouter);

module.exports = router;
