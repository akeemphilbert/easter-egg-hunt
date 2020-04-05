import { combineReducers } from "redux";
import eggs from "./reducers/eggs";
import currentEggHunt from "./reducers/currentEggHunt";


const rootReducer = combineReducers({
    eggs,
    currentEggHunt
});

export default rootReducer;
