import {connect} from 'react-redux';
import EggList from "../screens/EggList";
import {addHuntEggs} from "../actions";

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
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EggList)