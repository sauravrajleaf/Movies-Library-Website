import React from "react";

import { Link, NavLink } from "react-router-dom";

import logo from "../../img/logo.jpg";

import "./Navbar.css";

export const Navbar = () => {
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
						<NavLink exact='true' activeClassName='active' to='/signin'>
							Sign In/Up
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};
