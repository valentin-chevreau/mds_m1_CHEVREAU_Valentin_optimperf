// modules import
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define new mongodb schema
const TaskSchema = new Schema({
  // attributes
  taskName: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Tasks", TaskSchema);
