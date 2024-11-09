import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    name: String,
    website: String,
    technologies: String,
    github: String,
    image: String,
  },
  { timestamps: true }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default Project;
