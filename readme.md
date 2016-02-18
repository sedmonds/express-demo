## Express Course by Scott Edmonds

#YelpCamp
	* Add Landing Page
	* Add Campgrounds Page that list all campgrounds

#Each Campground has:
	* Name
	* Image

#Layout and Basic Styling
  * Create our header and footer partials
  * Add in Bootstrap

#Creating New Campgrounds
  * Setup new campground POST route
  * Add in body-parser
  * Setup route to show form
  * Add basic unstyled form

#Style the campgrounds page
  * Add a better header/title (Jumbotron bootstrap)
  * Make campgrounds display in a grid

#Style the Navbar and From
  * Add a navbar to all templates
  * Style the new campground form

#v2 ==
#Add Mongoose
  * Install and configure mongoose
  * Setup campground model
  * Use campground model inside of our routes!
  *
 #Show Page
  * Review the RESTful routes we've seen so far
  * Add description to our campground model
  * Show db.collection.drop()
  * Add a show route/template



#RESTful Routing

##Introduction
  * DefineREST and explain WHy it matters
  * List all 7 RESTful routes
  * Show example of RESTful routing in practice

REST - architecture/convention for mapping between HTTP routes and CRUD

RESTFUL ROUTES EXAMPLE

name      url             verb      description
===================================================================
INDEX     /dogs           GET       Display a list of all dogs
NEW       /dogs/new       GET       Displays form to make a new dog
CREATE    /dogs           POST      Add new dog to DB
SHOW      /dogs/:id       GET       Show info about one dog
EDIT      /dogs/:id/edit  GET       Show edit form for one dog
UPDATE    /dogs/:id       PUT       Update a particular dog, then redirect somewhere
DESTROY   /dogs/:id       DELETE    Delete a particular dog, then redirect somewhere


Example
api.github.com/users    USER'S INDEX    list of all users

CRUD
========================
CREATE
READ    /allBlogs
UPDATE  /updateBlog/:id
DESTROY /destroyBlog/:id


#Refactor Mongoose Code
  * Create a models directory
  * Use module.exports
  * Require everything correctly

#Add Seed Files
  * Add a seed.js file
  * Run the seeds file every time the server starts
  * Discuss error-driven development

#Add the Comment Model
  * Make our errors go away!
  * Display comments on campground show page
  *
#Comment New/Create
  * Discuss nested routes
  * Add the comment new and create routes
  * Add the new comment form
  *

name      url             verb      description
===================================================================

/ = Campground Routes

INDEX     /campgrounds           GET       Display a list of all dogs
NEW       /campgrounds/new       GET       Displays form to make a new dog
CREATE    /campgrounds           POST      Add new dog to DB
SHOW      /campgrounds/:id       GET       Show info about one dog
EDIT      /dogs/:id/edit  GET       Show edit form for one dog


// == Campground Comment Routes

NEW     /campgrounds/:id/commments/new      GET
CREATE  /campgrounds/:id/comments           POST


##Style Show Page
    * Add sidebar to show page
    * Display comments nicely

##Finish Styling Show PAge
    * Add public directory
    * Add custom stylesheet

##Add User Model
    * Install all packages needed for auth
    * Defune User model

## Comment New/Create
  * Discuss nested routes
  * Add the comment new and create routes
  * Add the new comment form

##Comment New/Create
    * Discuss nested routes
    * Add th cmment new and crate routrsd
    * Add the new comment form

##Style Show Page
    * Add sidebar to show page
    * Display comments nicely

##Finish Styling Show Page
    * Add public directory
    * Add custom stylesheet

## Auth(entication) Pt. 1 - Add User Model
    * Install all packages needed for auth
    * Defune User model

## Auth Pt. 2 - Add Register
    * Configure Passport
    * Add register routes
    * Add register template

## Auth Pt. 3 - Login
    * Add login routes
    * Add login template

## Auth Pt. 4 - Logout/Navbar
    * Add logout route
    * Prevent user from adding a comment if not signed in
    * Add links to navbar

## Auth Pt. 5 - Show/Hide Links
    * Show/hide auth links in navbar

## Refactor The Routes
    * Use Express router to reorganize all routes

##Users + Comments
    * Associate users and comments
    * Save author's name to a comment automatically

##Users + Campgrounds
 * Prevent an unauthenticated user from creating a campground
 * Save username+id to newly created campground

# Editing Campgrounds
    * Add Destroy Route
    * Add Delete button

# Authorization Part 1: Campgrounds
    * User can only edit his/her campgrounds
    * User can only delete his/her campgrounds
    * Hide/Show edit and delete buttons

# Editing Comments
    * Add Edit route for comments
    * Add Edit button
    * Add Update route

Campground Edit Route:
<!-- /campgrounds/:id/edit -->

Comment Edit Route:
<!-- /campgrounds/:id/comments/:comment_id/edit -->


# Deleting Comments
    * Add Destroy route
    * Add Delete button

Campground Destroy Route:
<!-- /campgrounds/:id -->

Comment Destroy Route:
<!-- /campgrounds/:id/comments/:comments_id -->


# Authorization Part 2: Comments
    * User can only edit his/her comments
    * User can only delete his/her comments
    * Hide/Show edit and delete buttons
    * Refactor Middleware

# UI Improvements
## before
    * demo working version
    * install and configure connect-flash
    * add bootstrap alerts to header


* BOOTSTRAP NAV COLLAPSE JS
* Flash Messages
* Refactor container div to header
* Show/hide delete and update buttons
* Style login/register forms
* Random Background Landing Page
* Refactor Middleware
* Change styling in show template - comment delete/update
* UPDATE/DELETE CAMPGROUND




RESTFUL ROUTES EXAMPLE

name      url             verb      description
===================================================================
INDEX     /dogs           GET       Display a list of all dogs
NEW       /dogs/new       GET       Displays form to make a new dog
CREATE    /dogs           POST      Add new dog to DB
SHOW      /dogs/:id       GET       Show info about one dog
EDIT      /dogs/:id/edit  GET       Show edit form for one dog
UPDATE    /dogs/:id       PUT       Update a particular dog, then redirect somewhere
DESTROY   /dogs/:id       DELETE    Delete a particular dog, then redirect somewhere


Example
api.github.com/users    USER'S INDEX    list of all users

CRUD
========================
CREATE
READ    /allBlogs
UPDATE  /updateBlog/:id
DESTROY /destroyBlog/:id