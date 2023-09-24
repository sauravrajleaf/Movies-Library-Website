const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');

const cors = require('cors');
const axios = require('axios');

const Favorite = require('./models/Favorites');
const User = require('./models/User');

require('dotenv').config({ path: '../.env' });

const app = express();

connectDB();
app.use(cors({}));

app.all('*', (req, res, next) => {
	res.header(
		'Access-Control-Allow-Origin',
		'https://localhost:3000',
		'http://localhost:5000/',
		'https://movies-library-website-front.onrender.com'
	);
	next();
});

app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/mylist', require('./routes/mylist'));
// app.use("/api/share/", require("./routes/share"));

app.get('/api/share/:id', async (req, res) => {
	const { id } = req.params;
	// console.log(id);
	const favorites = await Favorite.find({ user: id }).sort({
		date: -1,
	});
	// const user = await User.find({ _id: id });
	// console.log("i am here inside finding movie");
	res.json(favorites);
	// res.json(user);
});

app.get('/api/data/:searchValue/:currentPage', async (req, res) => {
	const { searchValue, currentPage } = req.params;
	console.log(searchValue, currentPage);
	const response = await axios.get(
		`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_CLIENT_SECRET}&s=${searchValue}&page=${currentPage}`
	);
	// console.log(response.data);
	return res.send(response.data);
});

//FOR PRODUCTION
__dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'frontend/build')));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
	);
}

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`server started in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
