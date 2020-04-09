import { FETCH_EGGS, ADD_HUNT_EGGS, UPDATE_HUNT_EGG,RESET_EGGS, RESET_HUNT} from "../actionTypes";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default (state = { eggs:{}, loading: null, error:null }, action ) => {
    switch (action.type) {
        case FETCH_EGGS.REQUEST:
            return {...state, loading: true, error: null};
        case ADD_HUNT_EGGS:
            let newState = Object.assign({},state,)
            //lets setup the array of eggs
            for (let i=0; i<action.payload.amt; i++) {
                let uuid = uuidv4()
                newState.eggs[uuid] = {...action.payload.egg,id:uuid,eggId:action.payload.egg.id,hidden:true}
            }

            return newState;
        case UPDATE_HUNT_EGG:
            let newState2 = Object.assign({},state,)
            newState2.eggs[action.payload.id] = Object.assign({},state.eggs[action.payload.id],action.payload)
            return newState2;
        case RESET_EGGS:
            let eggs = {...state.eggs}
            for (let i in eggs) {
                eggs[i].hidden = true
            }
            return {...state,eggs:eggs};
        case RESET_HUNT:
            return {...state,eggs:{}};
        default:
            return state;
    }
}