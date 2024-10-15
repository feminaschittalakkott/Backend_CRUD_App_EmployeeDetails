const mongoose = require('mongoose')

const con = process.env.db

mongoose.connect(con).then((res)=>{
    console.log("Server connected to MongoDB Database!")
}).catch((err)=>{
    console.log(err)
})