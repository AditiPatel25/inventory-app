const pool = require("./pool");

async function getAllCategories() {
    const { rows } = await pool.query("SELECT * FROM categories");
    return rows;
}

async function getCategoryById(id) {
    const { rows } = await pool.query("SELECT * FROM categories WHERE id = $1", [id]);
    return rows;
}

async function addCategory(category_name) {
    await pool.query("INSERT INTO categories (category_name) VALUES ($1)", [category_name]);
}

async function updateCategory(category_id, category_name) {
    await pool.query("UPDATE categories SET category_name = $1 WHERE id = $2", [category_name, category_id])
}

async function deleteCategory(category_id) {
    await pool.query("DELETE FROM categories WHERE id=$1", [category_id])
}

async function getAllInstruments() {
    const { rows } = await pool.query("SELECT * FROM instruments");
    return rows;
}

async function getInstrumentById(instrument_id) {
    const { rows } = await pool.query("SELECT * FROM instruments WHERE id = $1", [instrument_id]);
    return rows;
}

async function addInstrument(instrument_name, price, quantity, description, category_id) {
    await pool.query("INSERT INTO instruments (instrument_name, price, quantity, description, category_id) VALUES ($1, $2, $3, $4, $5)", [instrument_name, price, quantity, description, category_id]);
}

async function getInstrumentByCategory(category_id) {
    const { rows } = await pool.query("SELECT * FROM instruments WHERE category_id = $1", [category_id]);
    return rows;
}

async function updateInstrument(instrument_id, instrument_name, price, quantity, description, category_id) {
    await pool.query("UPDATE instruments SET instrument_name = $1, price = $2, quantity = $3, description = $4, category_id = $5 WHERE id = $6", [instrument_name, price, quantity, description, category_id, instrument_id])
}

async function deleteInstrument(instrument_id) {
    await pool.query("DELETE FROM instruments WHERE id=$1", [instrument_id])
}

module.exports = {
    getAllCategories,
    getCategoryById,
    addCategory,
    updateCategory,
    deleteCategory, 
    getAllInstruments,
    getInstrumentById, 
    addInstrument,
    getInstrumentByCategory,
    updateInstrument, 
    deleteInstrument
};
