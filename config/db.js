const mongoose = require("mongoose");
// const config=require('config');
const dotenv = require("dotenv");
dotenv.config();
mongoose.set("strictQuery", true);
// const db=config.get('mongoURI');
const db = process.env.mongoURI;
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
