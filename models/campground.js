var mongoose = require("mongoose");

//declare campground schema
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  author: {
    id: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "User"
    },
    username: String
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

// declare campground model
var Campground = mongoose.model("Campground", campgroundSchema);

module.exports = Campground;

