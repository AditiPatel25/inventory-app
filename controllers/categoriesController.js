const { body, validationResult, matchedData } = require("express-validator");
const db = require("../db/queries");

async function getCategoriesPage(req, res, next) {
    try {
        const categories = await db.getAllCategories();
        const instruments = await db.getAllInstruments();
        res.render("categories", { categories: categories, instruments: instruments, selectedCategory: null });
    } catch (e) {
        next(e);
    }
}

async function getInstrumentsByCategory(req, res, next) {
    try {
        const { id } = req.params;
        const categories = await db.getAllCategories();
        const instruments = await db.getInstrumentByCategory(id)
        res.render("categories", { selectedCategory: parseInt(id), instruments: instruments, categories: categories });
    } catch (e) {
        next(e);
    }
}

async function getAddCategoryForm(req, res, next) {
    try {
        const categories = await db.getAllCategories();
        res.render("manageCategories", { categories: categories, editing: false });
    } catch (e) {
        next(e);
    }
}

async function submitNewCategory(req, res, next) {
    try {
        const { category_name } = req.body;
        await db.addCategory(category_name)
        res.redirect("categories");
    } catch (e) {
        next(e);
    }
}

async function getEditCategoryForm(req, res, next) {
    try {
        const category_id = req.params.id;
        const category = await db.getCategoryById(category_id);
        const categories = await db.getAllCategories();
        res.render("manageCategories", { categories, category: category[0], editing: true });
    } catch (e) {
        next(e);
    }
}

async function submitEditCategory(req, res, next) {
    try {
        const category_id = req.params.id;
        const { category_name } = req.body;
        await db.updateCategory(category_id, category_name)
        res.redirect("/categories");
    } catch (e) {
        next(e);
    }
}

async function deleteCategory(req, res, next) {
    try {
        const category_id = req.params.id;
        const instruments = await db.getInstrumentByCategory(category_id);
        if (instruments.length > 0) {
            const categories = await db.getAllCategories();
            return res.render("manageCategories", {
                categories,
                editing: false,
                error: "Cannot delete a category that has instruments in it!"
            });
        }
        await db.deleteCategory(category_id)
        res.redirect("/categories");
    } catch (e) {
        next(e);
    }
}



module.exports = {
    getCategoriesPage,
    getInstrumentsByCategory,
    getAddCategoryForm,
    submitNewCategory,
    getEditCategoryForm,
    submitEditCategory,
    deleteCategory
};