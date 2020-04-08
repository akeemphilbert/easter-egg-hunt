import { combineReducers } from "redux";
import eggs from "./reducers/eggs";
import currentEggHunt from "./reducers/currentEggHunt";
import location from "./reducers/location";


const rootReducer = combineReducers({
    eggs,
    currentEggHunt,
    location
});

export default rootReducer;
