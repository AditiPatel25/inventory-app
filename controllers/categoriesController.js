const { body, validationResult, matchedData } = require("express-validator");
const db = require("../db/queries");

async function getAllCategories(req, res, next) {
    try {
        const categories = await db.getAllCategories();
        console.log("Categories: ", categories);
        res.render("categories", { categories: categories });
    } catch (e) {
        next(e);
    }
}




module.exports = {
    getAllCategories
};