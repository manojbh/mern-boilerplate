const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/errors');

app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

// import routes
const crud = require('./routes/crud');
const auth = require('./routes/auth');
app.use('/api/v1', crud);
app.use('/api/v1', auth);

// middleware to handle errors
app.use(errorMiddleware);

module.exports = app;