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
	return (
		<div>
			<nav>
				<div className='div-logo'>
					<Link to='/' className='logo'>
						<img src={logo} alt='logo' height='50px' width='50px' />
						<span>
							<p>Movies Library App</p>
						</span>
					</Link>
				</div>
				<input type='checkbox' id='checkbox' />
				<label for='checkbox' id='icon'>
					<svg
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M4 6h16M4 12h16M4 18h16'
						></path>
					</svg>
				</label>

				{isAuthenticated ? authLinks : guestLinks}
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
