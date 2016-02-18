//create a bunch of campgrounds and comments => error driven development

var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");

//define array with 3 pieces of data. model expecting this
var data = [
    {
        name: "cloud's rest",
        image: "https://farm9.staticflickr.com/8579/16706717975_bdc99767d7.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue."
    },
    {
        name: "big bell",
        image: "https://farm4.staticflickr.com/3514/3844623716_427ed81275.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue."
    },
    {
        name: "small bear",
        image: "https://farm8.staticflickr.com/7503/15623542806_8058899c7d.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. "
    }
]

function seedDB() {
    Campground.remove({}, function(err) {
        // if (err) {
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        //  // add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if (err){
        //             console.log(err);
        //         } else {
        //             console.log("added a campground!");
        //             // add a few comments
        //             Comment.create(
        //             {
        //                 text: "this place is great, but I wish there was the internet",
        //                 author: "homer"
        //             },
        //             function(err, comment){
        //                   if(err){
        //                       console.log(err);
        //                   } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("created a new comment");
        //                   }
        //             });

        //         }
        //     });
        // });
    });
}

module.exports = seedDB;