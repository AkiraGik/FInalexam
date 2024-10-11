import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  interest: {
    type: String,
    required: true
  }
});

const Category = mongoose.models.category || mongoose.model("category", categorySchema);

export default Category;
