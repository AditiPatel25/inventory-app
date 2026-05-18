const { body, validationResult, matchedData } = require("express-validator");
const db = require("../db/queries");

async function getSomeCategories(req, res, next) {
    try {
        const categories = await db.getAllCategories();
        const previewCategories = categories.slice(0, 4);
        console.log("Categories: ", categories);
        res.render("index", { categories: previewCategories });
    } catch (e) {
        next(e);
    }
}

module.exports = {
    getSomeCategories
};