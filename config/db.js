const mongoose = require("mongoose");

const dbURI =
  // With Atlas
  "<YourCustomClusterURL>";
  // Local ---> mongoose.connect('mongodb://user:pw@host1.com:27017,host2.com:27017,host3.com:27017/testdb');

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

// With Atlas
mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

require("../models/Member");
