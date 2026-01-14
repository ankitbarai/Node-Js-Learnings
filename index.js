const express = require('express');

const app = express();

const PORT = 5000;

app.get('/node',(req,res)=>{
try {

    res.status(200).json({
        status:200,
        message:"This is a get api",
    });
    
} catch (err) {
    res.status(500).json({
        message:"Server Error",
    });
}
});

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})