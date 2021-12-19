const express = require("express");
const router = express.Router();

//Routes
const authRouter = require("./auth");
const adminRouter = require("./admin");
const crimeRouter = require("./crime");
const criminalRouter = require("./criminal");

router.use("/auth/", authRouter);
router.use("/admin/", adminRouter);
router.use("/crimes/", crimeRouter);
router.use("/criminals/", criminalRouter);

module.exports = router;
