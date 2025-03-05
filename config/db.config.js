const mongoose = require('mongoose')

async function connectDB(){
    await mongoose.connect('mongodb://127.0.0.1:27017/tweet');
    console.log('MongoDB connected...');
}
connectDB();

module.exports = mongoose.connection;