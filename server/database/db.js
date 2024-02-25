import mongoose from "mongoose";

const Connection = async () => {
  const URL = "mongodb://localhost:27017/portfolioBuilder";
  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export default Connection;
