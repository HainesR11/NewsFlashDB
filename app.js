const express = require('express');
const morgan = require("morgan")
const actionRouter = require('./routes/ActionRoutes')

const app = express();

//---Middleware---
if (process.env.NODE_ENV === 'dev') {
    app.use(morgan('dev'))
}

app.use(express.json());

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next()
})

app.use('/api/v1/Actions', actionRouter)

module.exports = app