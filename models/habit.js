const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const practiceSchema = new Schema(
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
    // imageURL: {
    //   type: mongoose.SchemaTypes.Url,
    // },
    // practice: { type: [practiceSchema] },
    // userId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Habit", habitSchema);
