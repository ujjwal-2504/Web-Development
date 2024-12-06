const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  console.log(url, " ", filename);
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "New Listing Created!!");
  res.redirect("/listings");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  let data = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!data) {
    req.flash("error", "Listing you requested for does not exist!!");
    res.redirect("/listings");
  } else res.render("listings/show.ejs", { data });
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;

  let data = await Listing.findById(id);

  if (!data) {
    req.flash("error", "Listing you requested for does not exist!!");
    return res.redirect("/listings");
  }

  let currentImageUrl = data.image.url;
  currentImageUrl = currentImageUrl.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", { data, currentImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;

  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file != "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Listing Updated!!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;

  await Listing.findByIdAndDelete(id)
    .then((deletedList) => {
      console.log(deletedList);
      req.flash("success", "Listing Deleted!!");
      res.redirect("/listings");
    })
    .catch((err) => {
      console.log(err);
    });
};
