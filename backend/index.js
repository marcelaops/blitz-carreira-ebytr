const express = require('express');
const bodyParser = require('body-parser');

const taskController = require('./controllers/taskController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/tasks', taskController.create);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
