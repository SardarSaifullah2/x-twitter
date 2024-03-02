import mongoose from "mongoose";

const Connect = async () => {
 let connection;
  if (!connection) {
    try {
      connection = await mongoose.connect(process.env.MONGODB_URL!);
    } catch (error) {
      throw error; 
    }
  }

  return connection;
};

export default Connect;