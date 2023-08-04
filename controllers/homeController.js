const showHomePage = (req, res) => {
  res.render("home", {
    pageTitle: "Home Page",
  });
};

module.exports = {
  showHomePage,
};
