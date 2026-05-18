const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

const { Router } = require('express');
const instrumentController = require("../controllers/instrumentsController");
const instrumentsRouter = Router();

// loads add instrument form
instrumentsRouter.get("/new", instrumentController.getAddInstrumentForm);

// submits add instrument form
instrumentsRouter.post("/", instrumentController.submitNewInstrument);

// gets edit instrument form
instrumentsRouter.get("/:id/edit", instrumentController.getEditInstrumentForm);

// submits edit instrument form
instrumentsRouter.post("/:id", instrumentController.submitEditInstrument);

// delete specific instrument
instrumentsRouter.post("/:id/delete", instrumentController.deleteInstrument);

module.exports = instrumentsRouter;