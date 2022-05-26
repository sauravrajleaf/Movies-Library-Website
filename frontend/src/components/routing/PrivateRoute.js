import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import Login from "../auth/Login";

const PrivateRoute = ({ isAuthenticated }) => {
	// console.log(isAuthenticated);
	const auth = isAuthenticated;
	const navigate = useNavigate();
	// console.log(auth);
	return auth ? <Outlet /> : navigate("/login");
};

const mapStateToProps = (state) => {
	const { isAuthenticated } = state.auth;

	return {
		isAuthenticated,
	};
};
export default connect(mapStateToProps, null)(PrivateRoute);
