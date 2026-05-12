const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

const { Router } = require('express');
const instrumentsRouter = Router();

instrumentsRouter.get("/new", async (req, res) => {
    // new instrument form
});

instrumentsRouter.post("/", async (req, res) => {
    // add new instrument
});

instrumentsRouter.get("/:id", async (req, res) => {
    // shows specific instrument
});

instrumentsRouter.get("/:id/edit", async (req, res) => {
    // edit instrument form
});

instrumentsRouter.post("/:id", async (req, res) => {
    // submits edited instrument information
});

instrumentsRouter.post("/:id/delete", async (req, res) => {
    // delete instrument
});

module.exports = instrumentsRouter;