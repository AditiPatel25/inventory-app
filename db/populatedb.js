#! /usr/bin/env node

const { Client } = require("pg");
require('dotenv').config();

const SQL = `
DROP TABLE IF EXISTS instruments;
DROP TABLE IF EXISTS categories;

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

INSERT INTO categories (category_name) 
VALUES
  ('Woodwind'),
  ('String'),
  ('Brass'),
  ('Percussion'),
  ('Keyboard');

INSERT INTO instruments (instrument_name, price, quantity, description, category_id) 
VALUES
  ('Flute', 299.99, 5, 'A classic woodwind instrument', 1),
  ('Violin', 499.99, 3, 'A bowed string instrument', 2),
  ('Trumpet', 399.99, 4, 'A brass wind instrument', 3),
  ('Snare Drum', 199.99, 6, 'A classic percussion instrument', 4),
  ('Grand Piano', 9999.99, 1, 'A full sized grand piano', 5);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
