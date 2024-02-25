import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  githubProfile: {
    type: String,
    trim: true,
    required: true,
  },
  linkedinProfile: {
    type: String,
    required: true,
  },
  skill: {
    type: String,
    trim: true,
    required: true,
  },
  aboutMe: {
    type: String,
    required: true,
  },
});

const data = mongoose.model("Form", userSchema);
export default data;
