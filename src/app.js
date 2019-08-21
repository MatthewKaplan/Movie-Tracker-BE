const express = require('express');
require('./db/mongoose');
const session = require('express-session');
const mongoDBStore = require('connect-mongodb-session')(session);
const cors = require('cors');
const app = express();

const store = new mongoDBStore({
	uri: process.env.MONGODB_URI,
	collection: 'sessions'
});

app.use(session({ secret: 'asdfghjkl', resave: false, saveUninitialized: false, store: store }));
require('./db/mongoose');
const userRouter = require('./routes/users');
const movieRouter = require('./routes/movies');

app.use(cors());

app.use(express.json());
app.use(userRouter);
app.use(movieRouter);

module.exports = app;
