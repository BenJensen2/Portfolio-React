const mongoose = require("mongoose");
const Portfolio = mongoose.model("Portfolio");

module.exports = {
  index: (req, res) => {
    console.log("Portfolio Index pinggg-ed");
    res.json({
      // Our response to this function being called
      message: "Hello Portfolio",
    });
  },
};
