import { FETCH_EGGS, ADD_HUNT_EGGS } from "../actionTypes";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default (state = { hunt:{eggs:{}}, loading: null, error:null }, action ) => {
    switch (action.type) {
        case FETCH_EGGS.REQUEST:
            return {...state, loading: true, error: null};
        case ADD_HUNT_EGGS:
            let newState = Object.assign({},state,)
            //lets setup the array of eggs
            for (let i=0; i<action.payload.amt; i++) {
                let uuid = uuidv4()
                newState.hunt.eggs[uuid] = {...action.payload.egg,id:uuid,eggId:action.payload.egg.id}
            }

            return newState
        default:
            return state;
    }
}