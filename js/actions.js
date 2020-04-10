import {ADD_HUNT_EGGS, UPDATE_HUNT_EGG, UPDATE_LOCATION, RESET_EGGS, RESET_HUNT, RESET_LOCATION} from "./actionTypes";

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
};

export const updateLocation = (position) => {
    return {
        type: UPDATE_LOCATION,
        payload: position
    }
};

export const resetLocation = () => {
    return {
        type: RESET_LOCATION
    }
};

export const resetEggs = () => {
    return {
        type: RESET_EGGS
    };
};

export const reset = () => {
    return {
        type: RESET_HUNT
    };
};

