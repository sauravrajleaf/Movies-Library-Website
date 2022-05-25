const mongoose = require("mongoose");

const FavoritesSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
	imdbid: {
		type: String,
		unique: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("favorites", FavoritesSchema);
