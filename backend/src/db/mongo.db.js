import mongoose from "mongoose";

const connectToDB = async (uri) => {
  return await mongoose.connect(uri);
};

export default connectToDB;
