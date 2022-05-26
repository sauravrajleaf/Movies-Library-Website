import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { connect } from "react-redux";

import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated, auth }) => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const { email, password } = user;

	const onFormDataChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onFormSubmit = async (e) => {
		e.preventDefault();
		login(email, password);
	};
	useEffect(() => {
		if (isAuthenticated && localStorage.getItem("token") !== null) {
			navigate("/");
		}
	});

	return (
		<div className='container'>
			<h1>Login</h1>
			<form action='' onSubmit={onFormSubmit}>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						value={email}
						onChange={onFormDataChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={onFormDataChange}
						required
					/>
				</div>

				<button type='submit' value='SingUp' className='sign-up-button'>
					Log In
				</button>
				<p>
					Don't have an account? <Link to='/signup'>Sign Up</Link>
				</p>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	const { isAuthenticated } = state.auth;
	const { auth } = state;

	return {
		isAuthenticated,
	};
};
export default connect(mapStateToProps, { login })(Login);
