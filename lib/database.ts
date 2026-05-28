import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;



const connectToDatabase = async () => {
  try {
    // Check if URI exists
    if (!MONGODB_URI) {
      throw new Error("❌ MONGODB_URI is not defined in environment variables");
    }

    const connectionState = mongoose.connection.readyState;

    // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting

    if (connectionState === 1) {
      console.log("✅ Database already connected");
      return;
    }

    if (connectionState === 2) {
      console.log("⏳ Database is currently connecting...");
      return;
    }

    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI, {
      dbName: "portfolio",
      bufferCommands: true,
    });

    console.log("✅ Database connected successfully");
  } catch (err: any) {
    console.error("❌ Database connection failed:", err.message);
    throw err;
  }
};

export default connectToDatabase;