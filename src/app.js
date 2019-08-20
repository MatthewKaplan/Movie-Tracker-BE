const express = require('express');
require('./db/mongoose');
const app = express();
const userRouter = require('./routes/users');
const movieRouter = require('./routes/movies');

app.use(express.json());
app.use(userRouter);
app.use(movieRouter);

module.exports = app;