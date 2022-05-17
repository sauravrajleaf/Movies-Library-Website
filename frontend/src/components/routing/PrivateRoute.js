import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useNavigate,
	Outlet,
} from "react-router-dom";
import { connect } from "react-redux";
import Login from "../auth/Login";

const useAuth = ({ isAuthenticated }) => {
	const isLoggedIn = isAuthenticated;
	console.log(isAuthenticated);
	return isLoggedIn;
};
const PrivateRoute = () => {
	// console.log(isAuthenticated);
	const auth = useAuth();
	console.log(auth);
	return auth ? <Outlet /> : <Login />;
};

const mapStateToProps = (state) => {
	const { isAuthenticated } = state.auth;

	return {
		isAuthenticated,
	};
};
export default connect(mapStateToProps, null)(PrivateRoute);
