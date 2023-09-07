const { Pool } = require('pg');
require('dotenv').config();
const {
  POSTGRES_USER,
  POSTGRES_HOST,
  POSTGRES_DATABASE,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
} = process.env;

const pool = new Pool({
  user: POSTGRES_USER || 'postgres',
  password: POSTGRES_PASSWORD,
  host: POSTGRES_HOST || 'localhost',
  port: POSTGRES_PORT || 5432,
  database: POSTGRES_DATABASE || 'postgres',
});

module.exports = { pool };
