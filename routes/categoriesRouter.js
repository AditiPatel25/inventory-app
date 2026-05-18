const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

const { Router } = require('express');
const categoryController = require("../controllers/categoriesController");
const categoriesRouter = Router();

categoriesRouter.get("/new", categoryController.getAddCategoryForm);

categoriesRouter.post("/", categoryController.submitNewCategory)

// shows all instruments in that category (according to category_id)
categoriesRouter.get("/:id", categoryController.getInstrumentsByCategory);

// get edit category form
categoriesRouter.get("/:id/edit", categoryController.getEditCategoryForm);

categoriesRouter.post("/:id", categoryController.submitEditCategory);

categoriesRouter.post("/:id/delete", categoryController.deleteCategory);

module.exports = categoriesRouter;