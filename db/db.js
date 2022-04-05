const mongoose = require('mongoose');

const connectDB = async (req,res) =>{
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('DB connected');
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;