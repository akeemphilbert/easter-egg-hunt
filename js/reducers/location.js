import {UPDATE_LOCATION} from "../actionTypes";

export default (state = {} , action ) => {
    switch (action.type) {
        case UPDATE_LOCATION:
            return action.payload;
        default:
            return state
    }
}