import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://portfolio:ComuC3OZKwfanWP3@cluster0.quaequt.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
