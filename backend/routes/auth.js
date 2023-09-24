const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const auth = require('../middleware/auth');

const { body, validationResult } = require('express-validator');

const User = require('../models/User');

require('dotenv').config({ path: '../.env' });

// @route GET api/auth
// @get logged in user
// @access Private
router.get('/', auth, async (req, res) => {
	// res.send("Get logged in user");
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

// @route POST api/auth
// @auth user and get the jwt token
// @access Public
router.post(
	'/',
	[
		body('email', 'Please include a valid email').isEmail(),
		body('password', 'Password is required').exists(),
	],
	async (req, res) => {
		// res.send("Log in user");
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (!user) {
				return res.status(400).json({ msg: 'Invalid Credentials' });
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(
				payload,
				`${process.env.JWT_SECRET}`,
				{
					expiresIn: 360000000,
				},
				(error, token) => {
					if (error) throw error;
					res.json({ token });
				}
			);
		} catch (error) {
			console.error(error.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
