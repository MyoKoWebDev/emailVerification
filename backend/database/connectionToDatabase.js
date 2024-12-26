import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log(`mongo db connected to host : ${connection.connection.host}`);
  } catch (error) {
    console.log(`Error connectinf to MongoDB : ${error.message}`);
  }
};
