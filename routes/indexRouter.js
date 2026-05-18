const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

const { Router } = require('express');
const indexController = require("../controllers/indexController");
const categoryController = require("../controllers/categoriesController");
const indexRouter = Router();

indexRouter.get("/", indexController.getSomeCategories);
indexRouter.get("/categories", categoryController.getCategoriesPage);

module.exports = indexRouter;