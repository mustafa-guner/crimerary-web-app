const express = require("express");
const authRouter = express.Router();

const { categories, category } = require("../Controller/category.js");

authRouter.get("/", categories);
authRouter.post("/create-category", category);
module.exports = authRouter;
