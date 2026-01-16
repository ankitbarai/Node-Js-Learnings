const express = require('express');
const { Schema, default: mongoose } = require('mongoose');
require('./db_connection')
const appRoutes = require('./router/user_routes')
app.use(express.json());
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
app.use(bodyParser.urlencoded({extended:false}));

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

// const todoSchema = new mongoose.Schema({
//     title : String,
//     description : String
// });


// const todoModel = mongoose.model('todoS',todoSchema);

// app.post('/create-todo',async (req,res)=>{
//     try {
//         const todo = await todoModel.create(req.body);
//         res.status(200).json({message:"new todo added",data:todo})
        
//     } catch (err) {
//         res.status(500).json({message:"Server error"});
//     }
// });

// app.get('/get-todo',async (req,res)=>{
//     try {
//         const todo = await todoModel.find(req.body);
//         res.status(200).json({message:"todo,s fetched",data:todo})
        
//     } catch (err) {
//         res.status(500).json({message:"Server error"});
//     }
// });

// app.delete('/delete-todo',async (req,res)=>{
//     try {
//         const todo = await todoModel.delete(req.body);
//         res.status(200).json({message:"todo,s deleted",})
        
//     } catch (err) {
//         res.status(500).json({message:"Server error"});
//     }
// });

const apiRoute = express.Router();

app.use('/v2',apiRoute)

apiRoute.use('/api',appRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})