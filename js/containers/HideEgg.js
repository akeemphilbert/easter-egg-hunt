import { connect } from 'react-redux';
import HideEggWrapper from "../screens/HideEggWrapper";
import {updateEgg} from "../actions";
import {ViroARScene, ViroText} from "react-viro";

/**
 * Get the eggs that have not been positioned yet
 *
 * @param eggs
 * @returns {*}
 */
const getUnplacedEggs = (eggs) => {
    return Object.values(eggs).filter(e => e.position === undefined)
}

const mapStateToProps = (state) => {
    return {
        eggs: getUnplacedEggs(state.currentEggHunt.eggs)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onHideEgg: (egg) => {
            dispatch(updateEgg(egg));
        }
    }
}


export default connect (
    mapStateToProps,
    mapDispatchToProps
)(HideEggWrapper)