const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const PORT = 3000;

const app = express();
const homePath = path.join(__dirname, '../');
console.log(homePath);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(homePath, '/static_files')));
app.set('views', path.join(homePath, '/static_files/views'));
app.set('view engine', 'pug');

app.post('/new_visitor', (req, res) => {
   // const {something} = req.body;
   res.render(homePath + './static_files/views/thank_you_page');
})

app.listen(PORT, () => {
   console.log(`Server started on port http://localhost:${PORT}/new_visitor`);
})
