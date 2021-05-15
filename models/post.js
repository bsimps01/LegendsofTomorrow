const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LegendSchema = new Schema({
  title: { type: String, required: true },
  img: { data: Buffer, contentType: String },
  summary: { type: String, required: true },
  sport: { type: String, required: true },
});

module.exports = mongoose.model("Legend", LegendSchema);