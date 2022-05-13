const express = require("express");
const router = express.Router();

// @route GET api/mylist
// @get a users all lists of movies
// @access Private
router.get("/", (req, res) => {
	res.send("Get the user all lists of movies");
});

// @route POST api/mylist
// @get a users all lists of movies
// @access Private
router.post("/", (req, res) => {
	res.send("Add a movie to mylist ");
});

module.exports = router;
