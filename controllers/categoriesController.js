const { body, validationResult, matchedData } = require("express-validator");
const db = require("../db/queries");

async function getCategoriesPage(req, res, next) {
    try {
        const categories = await db.getAllCategories();
        const instruments = await db.getAllInstruments();
        // console.log("Categories: ", categories);
        // console.log("Instruments: ", instruments);
        res.render("categories", { categories: categories, instruments: instruments, selectedCategory: null });
    } catch (e) {
        next(e);
    }
}

async function getInstrumentsByCategory(req, res, next) {
    try {
        const { id } = req.params;
        const categories = await db.getAllCategories();
        const category_id = await db.getCategoryById(id);
        const instruments = await db.getInstrumentByCategory(id)
        res.render("categories", { selectedCategory: parseInt(id), instruments: instruments, categories: categories });
    } catch (e) {
        next(e);
    }
}


module.exports = {
    getCategoriesPage,
    getInstrumentsByCategory
};