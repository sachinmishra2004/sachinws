import mongoose from "mongoose";

const ConnectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("ho gaya connect bhai");
  } catch (error) {
    console.log("nhi hua connect bhai");
  }
};

export default ConnectDB;
