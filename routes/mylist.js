const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const { body, validationResult } = require("express-validator");

const User = require("../models/User");

const Favorite = require("../models/Favorites");

// @route GET api/mylist
// @get a users all lists of movies
// @access Private
router.get("/", auth, async (req, res) => {
	try {
		const favorites = await Favorite.find({ user: req.user.id }).sort({
			date: -1,
		});
		res.json(favorites);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server Error");
	}
	// res.send("Get the user all lists of movies");
});

// @route POST api/mylist
// @get a users all lists of movies
// @access Private
router.post(
	"/",
	[auth, [body("imdbid", "imdbid is required").not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { imdbid } = req.body;

		try {
			const newFavorite = new Favorite({
				imdbid,
				user: req.user.id,
			});
			const favorite = await newFavorite.save();
			res.json(favorite);
		} catch (error) {
			console.error(error.message);
			res.status(500).send("Server Error");
		}
		// res.send("Add a movie to mylist ");
	}
);

router.delete(
	"/:id",
	[auth, [body("imdbid", "imdbid is required").not().isEmpty()]],
	async (req, res) => {
		try {
			let favorite = await Favorite.findById(req.params.id);

			if (!favorite) return res.status(401).json({ msg: "Movie not found" });

			if (favorite.user.toString() !== req.user.id) {
				return res.status(401).json({ msg: "Not Authorized" });
			}

			await Favorite.findByIdAndRemove(req.params.id);

			res.json({ msg: "Movie Removed" });
		} catch (error) {
			console.error(error.message);
			res.status(500).send("Server Error");
		}
		// res.send("Add a movie to mylist ");
	}
);

module.exports = router;
