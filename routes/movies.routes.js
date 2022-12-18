const router = require("express").Router();

/* GET home page */
router.get("/movies/create", (req, res,) => {
  res.render("new-movies");
});

module.exports = router;