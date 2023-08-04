const showAboutPage = (req, res) => {
  res.render("about", {
    pageTitle: "About Page",
  });
};

module.exports = {
  showAboutPage,
};
