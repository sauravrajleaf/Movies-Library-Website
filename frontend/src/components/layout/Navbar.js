import React from "react";

import { Link, NavLink } from "react-router-dom";

import { connect } from "react-redux";

import { logout } from "../../actions/auth";

import logo from "../../img/logo.jpg";

import "./Navbar.css";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul>
			<li>
				<NavLink exact='true' activeClassName='active' to='/'>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink exact='true' activeClassName='active' to='/mylist'>
					My List
				</NavLink>
			</li>
			<li>
				<a href='/' onClick={logout}>
					Logout
				</a>
			</li>
		</ul>
	);
	const guestLinks = (
		<ul>
			<li>
				<NavLink exact='true' activeClassName='active' to='/'>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink exact='true' activeClassName='active' to='/signin'>
					Sign In
				</NavLink>
			</li>
			<li>
				<NavLink exact='true' activeClassName='active' to='/signup'>
					Sign Up
				</NavLink>
			</li>
		</ul>
	);
	console.log(isAuthenticated);
	return (
		<div>
			<nav>
				<div className='div-logo'>
					<Link to='/' className='logo'>
						<img src={logo} alt='logo' height='50px' width='50px' />
						<span>
							<p>Movies Website</p>
						</span>
					</Link>
				</div>
				<div>{isAuthenticated ? authLinks : guestLinks}</div>
			</nav>
		</div>
	);
};

const mapStateToProps = (state) => {
	const { auth } = state;

	return {
		auth,
	};
};
export default connect(mapStateToProps, { logout })(Navbar);
