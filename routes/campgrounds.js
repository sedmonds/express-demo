var express = require("express");
var router  = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");

// INDEX - show all campgrounds
router.get("/", function(req, res) {
  console.log(req.user);
  // get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds){
    if(err){
      console.log(err)
    } else {
      res.render("campgrounds/index", {campgrounds:allCampgrounds})
    }
  })
})

// CREATE - add new campgrounds to DB
router.post("/", middleware.isLoggedIn, function(req, res) {
  //get form data and add to campgrounds array
  var name =req.body.name;
  var image =req.body.image;
  var desc = req.body.description;
  var author = {
    id: req.user._id,
    username: req.user.username
  }

  var newCampground = {name: name, image: image, description: desc, author:author};
  // create new campground and save to DB
  Campground.create(newCampground, function(err, newlyCreated){
    if(err){
      console.log(err)
    } else {
      //redirect back to campgrounds page
      console.log(newlyCreated); // test
      res.redirect("/campgrounds")
    }
  });

})

// NEW - show form to create a new campground
router.get("/new", middleware.isLoggedIn, function(req, res) {
  // render form
  res.render("campgrounds/new.ejs")
})


// SHOW - shows more info about one campground
router.get("/:id", function(req, res) {
  //find the campground with provided ID
  Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
    if(err){
      console.log(err)
    } else {
      console.log(foundCampground) // test
      //render show template with that campground
      res.render("campgrounds/show", {campground: foundCampground})
    }
  });
})

// EDIT CAMPGROUND ROUTE
router.get("/:id/:edit", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        // added if-statement for security testing
        if(err){
          req.flash("error", "You don't have permission to edit!");
        }
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});


// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function(req,res) {
  // find and update the correct campground

  Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
    if(err) {
      res.redirect("/campgrounds");
    } else {
      res.redirect("/campgrounds/" + req.params.id);
    }
  });
  // redirect somewhere(show page)
})

// DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
  Campground.findByIdAndRemove(req.params.id, function(err){
    if(err){
      res.redirect("/campgrounds");
    } else {
      res.redirect("/campgrounds");
    }
  });
});




module.exports = router;