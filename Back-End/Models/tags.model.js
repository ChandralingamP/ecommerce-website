const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tagSchema = new Schema(
  {
    tag: { type: String, required: true },
    qCount: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Tags = mongoose.model("tags", tagSchema);

module.exports = Tags;