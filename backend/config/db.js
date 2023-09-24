const mongoose = require('mongoose');
const config = require('config');

require('dotenv').config({ path: '../.env' });

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {});
		console.log('MongoDB Connected');
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
};

module.exports = connectDB;
