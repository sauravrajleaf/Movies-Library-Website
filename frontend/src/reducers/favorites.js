/* eslint-disable no-labels */
/* eslint-disable no-label-var */
import {
	GET_FAVORITE_SUCCESS,
	GET_FAVORITE_FAIL,
	ADD_FAVORITE_SUCCESS,
	ADD_FAVORITE_FAIL,
	DELETE_FAVORITE_SUCCESS,
	DELETE_FAVORITE_FAIL,
} from "../actions/types";

export const favorites = (state = { favorites: [] }, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_FAVORITE_SUCCESS:
			ADD_FAVORITE_SUCCESS: return {
				favorites: payload,
			};
		case DELETE_FAVORITE_SUCCESS:
			return {
				...favorites,
				favorites: favorites.filter(
					(favorite) => favorite._id !== action.payload
				),
			};
		case ADD_FAVORITE_FAIL:
			DELETE_FAVORITE_FAIL: return {
				...favorites,
			};
		default:
			return state;
	}
};
