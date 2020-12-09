const mongoose = require("mongoose");
require("mongoose-type-url");
const Schema = mongoose.Schema;
const sessionSchema = new Schema(
  {
    date: {
      type: Date,
    },
    duration: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const habitSchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    imageURL: {
      type: mongoose.SchemaTypes.Url,
    },
    sessions: { type: [sessionSchema] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Habit", habitSchema);
