const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

const { Router } = require('express');
const categoriesRouter = Router();

categoriesRouter.get("/new", async (req, res) => {
    // new category form
});

categoriesRouter.post("/", async (req, res) => {
    // add new category
});

categoriesRouter.get("/:id", async (req, res) => {
    // shows all instruments in that category (according to category_id)
});

categoriesRouter.get("/:id/edit", async (req, res) => {
    // edit category form
});

categoriesRouter.post("/:id", async (req, res) => {
    // submits edited instrument information
});

categoriesRouter.post("/:id/delete", async (req, res) => {
    // delete category
});

module.exports = categoriesRouter;