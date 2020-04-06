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
        onHideEggs: (egg,amt,navigation) => {
            dispatch(addHuntEggs(egg,amt));
            //after the aciton is done it should change the screen
            navigation.navigate("HideEgg")
        }
    }
}



export default connect (
    mapStateToProps,
    mapDispatchToProps
)(CreateEggHunt)