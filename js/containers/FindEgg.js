import { connect } from 'react-redux';
import FindEggWrapper from "../screens/FindEggWrapper";
import {updateEgg} from "../actions";

/**
 * Get the eggs that have not been positioned yet
 *
 * @param eggs
 * @returns {*}
 */
const getHiddenEggs = (eggs) => {
    return Object.values(eggs).filter(e => e.hidden === true)
}

const mapStateToProps = (state) => {
    return {
        hiddenEggs: getHiddenEggs(state.currentEggHunt.eggs)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFindEgg: (egg) => {
            egg.hidden = false;
            dispatch(updateEgg(egg));
        },
    }
}


export default connect (
    mapStateToProps,
    mapDispatchToProps
)(FindEggWrapper)