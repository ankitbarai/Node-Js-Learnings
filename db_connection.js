const mongoose =  require('mongoose');

const DB_NAME = 'test_db';

const DB_URI = `mongodb://localhost:27017/${DB_NAME}`;

mongoose.connect(DB_URI);

mongoose.connection.on('error',(err)=>{
    console.error("An error occured",err);
});

mongoose.connection.on('connected',()=>{
    console.error("Database is Connected");
});

mongoose.connection.on('open',()=>{
    console.error("Database Connection is Open");
});

mongoose.connection.on('disconnected',()=>{
    console.error("Database is Disconnected");
});

module.exports = mongoose;