const express = require("express");
const router = express.Router();

const wrapAsync = require("../utilities/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

const listingController = require("../controllers/listings.js");

router
  .route("/")

  //Index Route
  .get(wrapAsync(listingController.index))

  .post(
    // Create Route
    isLoggedIn,
    upload.single("listing[image][url]"),
    validateListing,
    wrapAsync(listingController.createListing)
  );

// Filter Route
router.get("/filter/:category", async (req, res) => {
  let { category } = req.params;
  // console.log(category);

  let filteredListings = await Listing.find({ category: category });
  if (!filteredListings.length) {
    req.flash("warning", `Listings are not available for ${category} category`);
    return res.redirect(`/listings`);
  }
  res.render("listings/category.ejs", { filteredListings });
});

// New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
  .route("/:id")
  // Show Route
  .get(wrapAsync(listingController.showListing))

  // Update Route
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image][url]"),
    validateListing,
    wrapAsync(listingController.updateListing)
  )

  // Delete Route
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
