var mongoose                = require("mongoose"),
    passportLocalMongoose   = require("passport-local-mongoose");

//user schema
var UserSchema = new mongoose.Schema(
    {
        username: String,
        password: String

    });

UserSchema.plugin(passportLocalMongoose); // adds methods to user schema

module.exports  =   mongoose.model("User", UserSchema);

