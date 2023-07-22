const mongoDB = require('mongodb')
const dbname = "task"
const dburl = `mongodb+srv://root:root123@cluster0.cxm3jl7.mongodb.net/${dbname}`

module.exports = {mongoDB,dbname,dburl}