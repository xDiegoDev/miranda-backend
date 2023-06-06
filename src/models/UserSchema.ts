import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  StartDate: {
    type: Date,
    required: true,
  },
  Description: String,
  Contact: String,
  Status: {
    type: String,
    enum: ["Inactive", "Active"],
  },
  Password: {
    type: String,
    required: true,
  },
  IMG: String,
});

export default mongoose.model("User", UserSchema);