import { connect } from 'react-redux';
import {resetEggs, updateEgg} from "../actions";
import HuntStatus from "../screens/HuntStatus";

/**
 * Get the eggs that have not been positioned yet
 *
 * @param eggs
 * @returns {*}
 */
const eggsInBasket = (eggs) => {
    return Object.values(eggs).filter(e => e.hidden === false)
};


const mapStateToProps = (state) => {
    const eggsFound = eggsInBasket(state.currentEggHunt.eggs);
    const totalEggs = Object.keys(state.currentEggHunt.eggs).length;
    return {
        eggsFound: eggsFound,
        start: state.location,
        allEggsFound: eggsFound.length === totalEggs,
        totalEggs : totalEggs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetEggs: () => {
            dispatch(resetEggs());
        }
    }
};


export default connect (
    mapStateToProps,
    mapDispatchToProps
)(HuntStatus)