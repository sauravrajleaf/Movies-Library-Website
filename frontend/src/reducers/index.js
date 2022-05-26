import { combineReducers } from "redux";
import auth from "./auth";
import { favorites } from "./favorites";
export default combineReducers({
	auth,
	favorites,
});
