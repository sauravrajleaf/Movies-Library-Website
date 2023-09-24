const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { body, validationResult } = require('express-validator');

const User = require('../models/User');

require('dotenv').config({ path: '../.env' });

// @route POST api/users
// @registers a user
// @access Public
router.post(
	'/',
	[
		body('name', 'name is required').not().isEmpty(),
		body('email', 'email is required').isEmail(),
		body('password', 'password is required').isLength({ min: 6 }),
	],
	async (req, res) => {
		// res.send(req.body);
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { name, email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (user) {
				res.status(400).json({ msg: 'User already exists' });
			} else {
				user = new User({
					name,
					email,
					password,
				});

				const salt = await bcrypt.genSalt(10);

				user.password = await bcrypt.hash(password, salt);

				await user.save();

				// res.send("User saved");

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
			}
		} catch (error) {
			console.log(error.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
