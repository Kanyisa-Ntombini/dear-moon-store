const express = require('express');
const app = express();
const port = 3000;
const {
  createTable,
  addNewVisitor,
  listAllVisitors,
} = require('./database_queries');
const bodyParser = require('body-parser');
const path = require('path');
const homePath = path.join(__dirname, '../'); //C:\Users\kanyi\coding\dear-moon\

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(homePath, '/public/views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.send('Hello and Molweni!');
});

app.post('/new_visitor', async (req, res) => {
  const { name, email, message } = req.body;

  await createTable();
  await addNewVisitor(name, email, message);
  res.render(homePath + './public/views/thank_you_page');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
