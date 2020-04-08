import {connect} from 'react-redux';
import EggList from "../screens/EggList";
import {addHuntEggs,updateLocation} from "../actions";

const mapStateToProps = (state) => {
    return {
        currentEggHunt: state.hunt,
        eggs: state.eggs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPickEgg: (egg, navigation) => {
            dispatch(addHuntEggs(egg, 1));
            navigation.navigate("HideEgg")
        },
        updateStartPosition:(coords) => {
            dispatch(updateLocation(coords))
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EggList)