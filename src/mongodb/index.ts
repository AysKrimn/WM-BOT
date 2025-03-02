import mongoose from "mongoose";
import debug from "../utils/debug";
import config from "../config";

const createMongoConnection = async () => {
  try {
    const uri = config.db.uri;

    if (!uri) {
      throw new Error("MongoDB URI is not defined");
    }

    await mongoose.connect(uri);
    debug(`MongoDB connected successfully`);
  } catch (error) {
    debug("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default createMongoConnection;
