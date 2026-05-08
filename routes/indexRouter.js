// const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

const { Router } = require('express');
const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
    res.render("index");
});

module.exports = indexRouter;