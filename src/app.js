const express = require('express');
require('./db/mongoose');
const cors = require('cors');
const userRouter = require('./routes/users');
const movieRouter = require('./routes/movies');
const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(movieRouter);

module.exports = app;