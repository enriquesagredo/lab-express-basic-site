const showPhotoGalleryPage = (req, res) => {
  res.render("photo_gallery", {
    pageTitle: "Photo Gallery Page",
  });
};

module.exports = {
  showPhotoGalleryPage,
};
