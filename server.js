const express = require("express");
const connectDB = require("./config/db");

const cors = require("cors");
const axios = require("axios");

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
		`http://www.omdbapi.com/?apikey=1a7828e4&s=${searchValue}`
	);
	console.log(response.data);
	return res.send(response.data);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
