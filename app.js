const express = require('express');
const cors = require("cors")
const morgan = require("morgan")
const actionRouter = require('./routes/ActionRoutes');
const bucketRouter = require('./Routes/BucketsRoutes')
const taskRouter = require('./Routes/TaskRoutes')

const app = express();

//---Middleware---
if (process.env.NODE_ENV === 'dev') {
    app.use(morgan('dev'))
}

app.use(cors())
app.use(express.json());

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next()
})  

app.use('/api/actions', actionRouter)
app.use('/api/buckets', bucketRouter)
app.use('/api/tasks', taskRouter)

module.exports = app