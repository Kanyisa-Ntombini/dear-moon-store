const { pool } = require('./database_config');

const createTable = async () => {
  await pool.query(`
   CREATE TABLE IF NOT EXISTS Visitors (
   id SERIAL PRIMARY KEY,
   visitor_name VARCHAR(50) NOT NULL,
   visitor_age INT NOT NULL,
   date_of_visit DATE NOT NULL,
   time_of_visit TIME NOT NULL,
   assistant_name VARCHAR(50) NOT NULL,
   comments VARCHAR(500) NOT NULL
 )`);
  return 'The Visitors table has been created successfully';
};

const addNewVisitor = async () => {
  await pool.query(
    `INSERT INTO Visitors (visitor_name, visitor_age, date_of_visit, time_of_visit, assistant_name, comments)
  VALUES ($1, $2, $3, $4, $5, $6)`,
    [visitorName, visitorAge, dateOfVisit, timeOfVisit, assistantName, comments]
  );
  return 'A new visitor has been added successfully';
};

const listAllVisitors = async () => {
  const listOfVisitors = await pool.query(
    `SELECT id, visitor_name FROM Visitors`
  );
  return listOfVisitors.rows;
};
