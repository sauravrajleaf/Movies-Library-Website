import axios from "axios";
import {
	GET_FAVORITE_SUCCESS,
	GET_FAVORITE_FAIL,
	ADD_FAVORITE_SUCCESS,
	ADD_FAVORITE_FAIL,
	DELETE_FAVORITE_SUCCESS,
	DELETE_FAVORITE_FAIL,
} from "../actions/types";

import { setAuthToken } from "../utils/setAuthToken";

export const getFavoriteMovies = () => async (dispatch) => {
	console.log("i am here in actions");
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	// const body = JSON.stringify({ imdbid });
	try {
		const res = await axios.get("/api/mylist", config);
		console.log(res.data);
		dispatch({
			type: GET_FAVORITE_SUCCESS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: GET_FAVORITE_FAIL,
			payload: error.response,
		});
	}
};

export const createFavoriteMovies =
	({ Title, Year, imdbID, Type, Poster }) =>
	async (dispatch) => {
		console.log("i am here in create action");
		console.log({ Title });
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const body = JSON.stringify({ Title, Year, imdbID, Type, Poster });
		try {
			const res = await axios.post("/api/mylist", body, config);
			console.log(res.data);
			dispatch({
				type: ADD_FAVORITE_SUCCESS,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: ADD_FAVORITE_FAIL,
				payload: error.response,
			});
		}
	};

// export const deleteFavoriteMovies =
// 	({ id }) =>
// 	async (dispatch) => {
// 		console.log("i am here in delete action");
// 		console.log({ id });
// 		if (localStorage.token) {
// 			setAuthToken(localStorage.token);
// 		}
// 		const config = {
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		};
// 		const body = JSON.stringify({ id });
// 		try {
// 			const res = await axios.delete("/api/mylist/:id", body, config);
// 			console.log(res.data);
// 			dispatch({
// 				type: DELETE_FAVORITE_SUCCESS,
// 				payload: res.data,
// 			});
// 		} catch (error) {
// 			dispatch({
// 				type: DELETE_FAVORITE_FAIL,
// 				payload: error.response,
// 			});
// 		}
// 	};
