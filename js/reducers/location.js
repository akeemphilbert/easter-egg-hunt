import {RESET_LOCATION, UPDATE_LOCATION} from "../actionTypes";

export default (state = {} , action ) => {
    switch (action.type) {
        case UPDATE_LOCATION:
            return action.payload;
        case RESET_LOCATION:
            return {};
        default:
            return state
    }
}