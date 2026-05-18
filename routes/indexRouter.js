const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

const { Router } = require('express');
const indexController = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", indexController.getSomeCategories);

module.exports = indexRouter;