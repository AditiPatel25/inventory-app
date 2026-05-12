#! /usr/bin/env node

const { Client } = require("pg");
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category_name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS instruments (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  instrument_name VARCHAR(255),
  price FLOAT,
  quantity INTEGER,
  description VARCHAR ( 255 ),
  category_id INTEGER REFERENCES categories(id)
);

`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
