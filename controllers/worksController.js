const showWorksPage = (req, res) => {
  res.render("works", {
    pageTitle: "Works Page",
  });
};

module.exports = {
  showWorksPage,
};
