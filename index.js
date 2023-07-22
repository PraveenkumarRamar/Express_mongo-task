const express = require('express');
const app = express();
app.use(express.json())
const port = process.env.port || 9009
const taskRouter = require('./routes/task')

app.use('/',taskRouter)

app.listen(port,()=>console.log(`App is running ${port}`))