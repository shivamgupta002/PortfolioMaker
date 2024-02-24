import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
    min: 2,
    max: 20,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
    min: 2,
    max: 20,
  },
  userName: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },
  githubProfile: {
    type: String,
    trim: true,
    required: true,
  },
  linkedinProfile: {
    type: String,
    trim: true,
    required: true,
  },
  skill: {
    type: String,
    trim: true,
    required: true,
  },
  aboutMe: {
    type: String,
    trim: true,
    required: true,
  },
});

const form = mongoose.model("Form", userSchema);
export default form;
