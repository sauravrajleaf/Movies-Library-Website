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
const PrivateRoute = ({ auth: isAuthenticated }) => {
	return isAuthenticated ? <Outlet /> : <Login />;
};

const mapStateToProps = (state) => {
	const { auth } = state;

	return {
		auth,
	};
};
export default PrivateRoute;
