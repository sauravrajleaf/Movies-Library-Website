import React, { useReducer } from "react";
import axios from "axios";

import { setAuthToken } from "../../utils/setAuthToken";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

//CREATE INITIAL STATE
const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get("/api/auth");

      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };

  //REGISTER USER - WHICH SIGNS THE USER UP AND GETS A TOKEN BACK
  const register = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/users", formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  //LOGIN USER - WHICH WILL LOG THE USER IN AND GET THE TOKEN
  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Types": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/auth", formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // //LOGOUT - WHICH WILL DESTROY THE TOKEN AND JUST CLEAR EVERYTHIN UP
  // const logout = () => dispatch({ type: LOGOUT });

  // //CLEAR_ERRORS - TO CLEAR OUT ANY ERRORS IN THE STATE
  // const clearErrors = () =>
  // 	dispatch({
  // 		type: CLEAR_ERRORS,
  // 	});

  //BY SURROUNDING THE COMPONENT IN THE SPECIFIC PROVIDER TAGS WE GET ACCESS TO THE STATE AND FUCNTIONS OF THE PROVIDER
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        // logout,
        // clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
