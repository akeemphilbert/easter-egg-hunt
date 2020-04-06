import { connect } from 'react-redux';
import CreateEggHunt from "../screens/CreateEggHunt";
import {addHuntEggs} from "../actions";

const mapStateToProps = (state) => {
    return {
        currentEggHunt: state.hunt
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onHideEggs: (hunt,egg,amt,navigation) => {
            dispatch(addHuntEggs(hunt,egg,amt));
            navigation.navigate("HideEgg")
            //TODO after the aciton is done it should change the screen
        }
    }
}



export default connect (
    mapStateToProps,
    mapDispatchToProps
)(CreateEggHunt)