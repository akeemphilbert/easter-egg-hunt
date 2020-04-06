import {ADD_HUNT_EGGS, UPDATE_HUNT_EGG} from "./actionTypes";

export const addHuntEggs = (egg,amt) => {
    return {
        type: ADD_HUNT_EGGS,
        payload: {
            egg: egg,
            amt: amt
        }
    }
};

export const updateEgg = (egg) => {
    return {
        type: UPDATE_HUNT_EGG,
        payload: egg
    }
}