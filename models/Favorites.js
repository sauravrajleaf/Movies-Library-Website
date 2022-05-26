const mongoose = require("mongoose");

const FavoritesSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
	imdbID: {
		type: String,
		require: true,
	},
	Poster: {
		type: String,
		require: true,
	},
	Title: {
		type: String,
		require: true,
	},
	Type: {
		type: String,
		require: true,
	},
	Year: {
		type: String,
		require: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("favorites", FavoritesSchema);
