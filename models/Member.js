// modules import
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define new mongodb schema
const MemberSchema = new Schema({
  // attributes
  memberName: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Members", MemberSchema);
