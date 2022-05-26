import {
	GET_FAVORITE_SUCCESS,
	GET_FAVORITE_FAIL,
	ADD_FAVORITE_SUCCESS,
	ADD_FAVORITE_FAIL,
} from "../actions/types";

export const favorites = (state = { favorites: [] }, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_FAVORITE_SUCCESS:
			ADD_FAVORITE_SUCCESS: return {
				favorites: payload,
			};
		case GET_FAVORITE_FAIL:
			ADD_FAVORITE_FAIL: return {
				error: payload,
			};
		default:
			return state;
	}
};
