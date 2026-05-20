const { body, validationResult, matchedData } = require("express-validator");
const db = require("../db/queries");

async function getAddInstrumentForm(req, res, next) {
    try {
        const categories = await db.getAllCategories();
        res.render("newInstrument", { categories: categories });
    } catch (e) {
        next(e);
    }
}

async function submitNewInstrument(req, res, next) {
    try {
        const { instrument_name, price, quantity, description, category_id } = req.body;
        await db.addInstrument(instrument_name, price, quantity, description, category_id)
        res.redirect("categories");
    } catch (e) {
        next(e);
    }
}

async function getEditInstrumentForm(req, res, next) {
    try {
        const instrument_id = req.params.id
        const instrument = await db.getInstrumentById(instrument_id);
        const categories = await db.getAllCategories();
        res.render("editInstrument", { instrument: instrument[0], categories: categories });
    } catch (e) {
        next(e);
    }
}

async function submitEditInstrument(req, res, next) {
    try {
        const instrument_id = req.params.id;
        const { instrument_name, price, quantity, description, category_id } = req.body;
        await db.updateInstrument(instrument_id, instrument_name, price, quantity, description, category_id)
        res.redirect("/categories");
    } catch (e) {
        next(e);
    }
}

async function deleteInstrument(req, res, next) {
    try {
        const instrument_id = req.params.id;
        await db.deleteInstrument(instrument_id)
        res.redirect("/categories");
    } catch (e) {
        next(e);
    }
}



module.exports = {
    submitNewInstrument, 
    getAddInstrumentForm, 
    getEditInstrumentForm, 
    submitEditInstrument,
    deleteInstrument
};