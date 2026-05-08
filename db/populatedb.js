#! /usr/bin/env node

const { Client } = require("pg");
require('dotenv').config();

// const SQL = `
// CREATE TABLE IF NOT EXISTS messages (
//   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//   username VARCHAR(255),
//   text VARCHAR ( 255 ),
//   added TIMESTAMP DEFAULT NOW()
// );

// INSERT INTO messages (username, text) 
// VALUES
//   ('Amando', 'omg hi'),
//   ('Charles', 'i was here'),
//   ('Poppy', 'this is cool')`;

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
