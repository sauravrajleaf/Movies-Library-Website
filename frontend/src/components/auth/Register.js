import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { register } from "../../actions/auth";
import axios from "axios";

import "./Register.css";

const Register = ({ register, isAuthenticated, history, location, auth }) => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const { name, email, password, password2 } = user;

	const onFormDataChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onFormSubmit = async (e) => {
		e.preventDefault();
		if (password === password2) {
			register({ name, email, password });
		}

		// if (isAuthenticated) {
		// 	navigate("/");
		// }
		// console.log(isAuthenticated);
	};
	useEffect(() => {
		if (isAuthenticated && localStorage.getItem("token") !== null) {
			navigate("/");
		}
	});

	// console.log(auth);

	return (
		<div className='container'>
			<h1>Sign Up</h1>
			<form action='' onSubmit={onFormSubmit} className='signup-form'>
				{/* <div className='login_field'> */}
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					name='name'
					value={name}
					onChange={onFormDataChange}
					className='login_input'
				/>
				{/* </div> */}
				{/* <div className='login_field'> */}
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					value={email}
					onChange={onFormDataChange}
					className='login_input'
				/>
				{/* </div> */}
				{/* <div className='login_field'> */}
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					value={password}
					onChange={onFormDataChange}
					className='login_input'
				/>
				{/* </div> */}
				{/* <div className='login_field'> */}
				<label htmlFor='password2'>Confirm Password</label>
				<input
					type='password'
					name='password2'
					value={password2}
					onChange={onFormDataChange}
					className='login_input'
				/>
				{/* // </div> */}
				<button type='submit' value='SingUp' className='sign-up-button'>
					Sign Up
				</button>
				<p>
					Already have an account? <Link to='/signin'>Sign In</Link>
				</p>
			</form>

			{/* <h1>Sign Up</h1> */}
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
export default connect(mapStateToProps, { register })(Register);
