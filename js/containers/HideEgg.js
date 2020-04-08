import { connect } from 'react-redux';
import HideEggWrapper from "../screens/HideEggWrapper";
import {updateEgg, updateLocation} from "../actions";
import {ViroARScene, ViroText} from "react-viro";

/**
 * Get the eggs that have not been positioned yet
 *
 * @param eggs
 * @returns {*}
 */
const getUnplacedEggs = (eggs) => {
    return Object.values(eggs).filter(e => e.position === undefined)
};

const mapStateToProps = (state) => {
    return {
        unplacedEggs: getUnplacedEggs(state.currentEggHunt.eggs),
        location: state.location
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onHideEgg: (egg,position) => {
            egg.position = position;
        },
        updateBunnyPosition: (egg,location) => {
            if (egg !== undefined) {
                egg.location = location;
            }
        },
        onComplete: (egg,location) => {
            console.log("egg to save",egg)
            if (egg !== undefined) {
                if (egg.location !== undefined) {
                    dispatch(updateLocation(egg.location));
                } else {
                    if (location !== undefined) {
                        egg.location = location;
                    }
                }
                dispatch(updateEgg(egg));
            }

        }
    }
};


export default connect (
    mapStateToProps,
    mapDispatchToProps
)(HideEggWrapper)