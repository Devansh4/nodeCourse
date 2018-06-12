const express = require('express');
const app = express();
const Joi = require('joi');
const genres = require('./routes/genres');

app.use(express.json());

app.use('/api/genres', genres);

const port = process.env.port || 3000;
app.listen(port);
console.log(`Server listening at port ${port}.....`);