const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isReviewAuthor, isLoggedIn} = require("../middleware.js");


const reviewcontroller = require("../controllers/reviews.js");
// post Reviews routr

router.post("/", isLoggedIn, validateReview, wrapAsync(reviewcontroller.createReview ));
  
  // delete route
  router.delete( 
    "/:reviewId", isLoggedIn, isReviewAuthor,
    wrapAsync(reviewcontroller.destroyReview)
  );

  module.exports = router;