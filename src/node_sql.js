const { response } = require('express');
const { pool } = require('./database_config');

const createTable = async () => {
  await pool.query(`
   CREATE TABLE IF NOT EXISTS Visitors (
   id SERIAL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   email VARCHAR(50) NOT NULL,
   message VARCHAR(500) NOT NULL
 )`);
  return 'The Visitors table has been created successfully';
};

const addNewVisitor = async (name, email, message) => {
  await pool.query(
    `INSERT INTO Visitors (name, email, message) VALUES ($1, $2, $3)`,
    [name, email, message]
  );
  return 'A new visitor has been added successfully';
};

const listAllVisitors = async () => {
  const listOfVisitors = await pool.query(
    `SELECT id, name, email, message FROM Visitors`
  );
  return listOfVisitors.rows;
};

module.exports = { createTable, addNewVisitor, listAllVisitors };
