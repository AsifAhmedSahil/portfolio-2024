import mongoose from "mongoose";

const HomeSchema = new mongoose.Schema(
  {
    heading: String,
    summary: String,
    resumelink:String
  },
  { timestamps: true }
);

const Home = mongoose.models.Home || mongoose.model("Home", HomeSchema);

export default Home;
