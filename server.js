const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");

const cors = require("cors");
const axios = require("axios");

dotenv.config();

const app = express();

connectDB();
app.use(cors());

app.all("*", (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "https://localhost:3000");
	next();
});

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/mylist", require("./routes/mylist"));

app.get("/api/data/:searchValue", async (req, res) => {
	const { searchValue } = req.params;
	console.log(searchValue);
	const response = await axios.get(
		`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_CLIENT_SECRET}&s=${searchValue}`
	);
	console.log(response.data);
	return res.send(response.data);
});

//FOR PRODUCTION

__dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "frontend/build")));

	app.get("*", (req, res) =>
		res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
	);
}

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`server started in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
