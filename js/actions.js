import {ADD_HUNT_EGGS} from "./actionTypes";

export const addHuntEggs = (hunt,egg,amt) => {
    return {
        type: ADD_HUNT_EGGS,
        payload: {
            hunt: hunt,
            egg: egg,
            amt: amt
        }
    }
};