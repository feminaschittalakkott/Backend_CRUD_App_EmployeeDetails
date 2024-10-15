require('dotenv').config()

const express = require('express')

const cors = require('cors')

const routes = require('./Routes/route')
require('./Connection/db')

const emp_server = express()

emp_server.use(cors())
emp_server.use(express.json())
emp_server.use(routes)

const PORT = 3000 || process.env.PORT

emp_server.listen(PORT, ()=>{
    console.log(`Server Running at ${PORT}`)
})