const express = require('express')
const app = express()
const port = 6000
const connectdb=require('./config/connectdb')
require("dotenv").config()
connectdb()

app.use(express.json())

app.use('/user',require('./Routes/userRoutes'))
app.use("/event", require("./Routes/eventRoutes"));
app.use("/booking", require("./Routes/bookRoutes"));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))