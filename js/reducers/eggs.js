import { FETCH_EGGS } from "../actionTypes";

export default (state = { getById:{}, loading: null, error:null }, action ) => {
    switch (action.type) {
        case FETCH_EGGS.REQUEST:
            return {...state, loading: true, error: null};
        default:
            return state;
    }
}