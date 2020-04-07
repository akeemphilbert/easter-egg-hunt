import { connect } from 'react-redux';
import {updateEgg} from "../actions";
import HuntStatus from "../screens/HuntStatus";

/**
 * Get the eggs that have not been positioned yet
 *
 * @param eggs
 * @returns {*}
 */
const eggsInBasket = (eggs) => {
    return Object.values(eggs).filter(e => e.position === undefined)
};

const mapStateToProps = (state) => {
    return {
        eggsFound: eggsInBasket(state.currentEggHunt.eggs)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFindEgg: (egg) => {
            delete egg.position;
            dispatch(updateEgg(egg));
        },
    }
};


export default connect (
    mapStateToProps,
    mapDispatchToProps
)(HuntStatus)