const express = require('express');
require('./db/mongoose');
const userRouter = require('./routes/users');
const movieRouter = require('./routes/movies');
const app = express();

app.use(express.json());
app.use(userRouter);
app.use(movieRouter);

module.exports = app;