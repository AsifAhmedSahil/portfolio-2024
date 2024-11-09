// import mongoose from "mongoose";

// export default async function connectToDB() {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://portfolio:ComuC3OZKwfanWP3@cluster0.quaequt.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0"
//     );
//     console.log("Database connected successfully");
//   } catch (e) {
//     console.log(e);
//   }
// }

import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    const mongoURI = process.env.MONGO_URL;  // Access the environment variable
    console.log(mongoURI)
    if (!mongoURI) {
      console.error("MONGO_URL is not defined in the environment variables");
      throw new Error('MONGO_URL environment variable is not defined');
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(mongoURI);
    console.log('Database connected successfully');
  } catch (e) {
    console.error("Error connecting to MongoDB:", e);
    throw new Error("Database connection failed");
  }
}

