const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utilities/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");
const Listing = require("../models/listing.js");

router
  .route("/signup")

  .get(userController.renderSignupForm)

  .post(wrapAsync(userController.createUser));

router
  .route("/login")

  .get(userController.renderLoginForm)

  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/user/login",
      failureFlash: true,
    }),
    userController.loginUser
  );

router.get("/logout", userController.logoutUser);

router.get("/:username", async (req, res) => {
  let { username } = req.params;
  const owner = await User.findOne({ username: username });
  const ownerId = owner._id;
  const allListings = await Listing.find({ owner: ownerId });
  if (!allListings.length) {
    req.flash("warning", `${username} don't owned any listing`);
    return res.redirect("/listings");
  }
  // console.log(allListings);
  owned = { owner: username };
  res.render("listings/owned-listings.ejs", { allListings, owned });
});

module.exports = router;
