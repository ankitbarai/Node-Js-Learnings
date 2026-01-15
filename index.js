const express = require('express');
const { Schema, default: mongoose } = require('mongoose');
require('./db_connection')

const app = express();

const PORT = 5000;

// app.get('/node',(req,res)=>{
// try {

//     res.status(200).json({
//         status:200,
//         message:"This is a get api",
//     });
    
// } catch (err) {
//     res.status(500).json({
//         message:"Server Error",
//     });
// }
// });


const todoSchema = new mongoose.Schema({
    title : String,
    description : String
});


const todoModel = 

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})