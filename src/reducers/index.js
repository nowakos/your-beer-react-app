import { combineReducers } from "redux";
import { beers } from "./beers";
import { beersSearch } from "./beersSearch";

export default combineReducers({
    beers,
    beersSearch
});