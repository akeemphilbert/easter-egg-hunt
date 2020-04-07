import { connect } from 'react-redux';
import Invite from "../screens/Invite";

const mapStateToProps = (state) => {
    return {
        currentEggHunt: state.hunt,
        eggs: state.eggs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onShowEgg: (egg,navigation) => {
            navigation.navigate("ShowEgg",{egg:egg})
        }
    }
}



export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Invite)