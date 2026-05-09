
const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema({
  subType: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  color: {
    type: [String],   // ✅ CHANGE HERE
    default: [],
  },

  modelNumber: {   // ✅ ADD THIS (important)
    type: String,
    required: true,
    trim: true,
  },

  image: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    default: [],
  },
});

const productSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    type: {
      type: String,
      lowercase: true,
      trim: true,
    },

    parentSeries: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    modelNumber: {   // 🔹 Parent model number
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    variants: {
      type: [variantSchema],
      validate: [v => v.length > 0, "At least one variant required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);