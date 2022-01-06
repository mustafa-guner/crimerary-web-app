const express = require("express");
const router = express.Router();

//Routes
const authRouter = require("./auth");
const adminRouter = require("./admin");
const crimeRouter = require("./crime");
const criminalRouter = require("./criminal");
const categoryRouter = require("./category");
const missingRouter = require("./missingPeople");
const formRouter = require("./form");

router.use("/auth/", authRouter);
router.use("/admin/", adminRouter);
router.use("/crimes/", crimeRouter);
router.use("/criminals/", criminalRouter);
router.use("/categories/", categoryRouter);
router.use("/missing-people/", missingRouter);
router.use("/contact/", formRouter);

module.exports = router;
